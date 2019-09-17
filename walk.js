const fs = require('fs');
const path = require('path');
const walk = require('walk');
const next = require('next');
const express = require('express');
const fm = require('front-matter');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const contentDir = 'content';

(async function main() {
    const walker = walk.walk(path.join(__dirname, contentDir));
    const fileList = [];
    await new Promise((resolve, reject) => {
        walker.on('file', function (root, fileStats, next) {
            let location = path.join(root, fileStats.name).split(
                path.join(__dirname, contentDir)
            )[1];
            if (!location) {
                throw new Error('Improper content directory structure');
            }
            location = location.replace('index.md', '');
            fs.readFile(`${root}/${fileStats.name}`, 'utf8', function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    fileList.push({
                        location,
                        meta: fm(data)
                    });
                }
                next();
              });
        });
        walker.on('errors', function (root, nodeStatsArray, next) {
            next();
            reject(`ERROR: ${root} - ${nodeStatsArray}`);
        });
        walker.on('end', () => {
            resolve(fileList);
        });
    });

    console.log(JSON.stringify(fileList, null, 4));

    await app.prepare();
    const server = express();
    server.get('/blogs/articles', (req, res) => {
        const fileIndex = fileList.findIndex(file => file.location === req.originalUrl.replace(/\/blogs\/articles/, ''));
        if (fileIndex !== -1) {
            return app.render(req, res, '/articles', {
                content: fileList[fileIndex]
            });
        }
    });

    server.get('*', (req, res) => {
        console.log(req.baseUrl);
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000');
    });
}());
