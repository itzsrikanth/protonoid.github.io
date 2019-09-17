'use strict';

const fs = require('fs');
const path = require('path');
const walk = require('walk');
const marked = require('marked');
const fm = require('front-matter');

const contentDir = 'content';

module.exports = (async function main() {
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
                    const md = fm(data);
                    md.body = marked(md.body);
                    fileList.push({
                        location,
                        markdown: md
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
    return fileList;
}());
