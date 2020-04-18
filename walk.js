'use strict';

const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const https = require('https');
const walk = require('walk');
const marked = require('marked');
const fm = require('front-matter');

const contentDir = 'content';
const API_UNSPLASH = 'https://api.unsplash.com/photos/random';
const UNSPLASH_KEY = fs.readFileSync('./unsplash.key', 'utf8');

/**
 * To fetch images from unsplash
 * if the image is already downloaded, we do not want to download it
 * again. So we are planning to check if image existing prior to 
 * @param {string} imgPath - location of image to save
 * @param {string} type - size of image returned by Unsplash API
 */
const getUnsplashImageInfo = (imgPath, metaImage, type, loopCount) => new Promise((resolve, reject) => {
  loopCount = loopCount || 0;
  const queryParam = {
    client_id: UNSPLASH_KEY
  };
  if (!fs.existsSync(imgPath)) {
    fs.mkdirSync(imgPath, { recursive: true });
  }
  if (metaImage instanceof Array && loopCount < metaImage.length) {
    queryParam.query = metaImage[loopCount];
  } else if (typeof metaImage === 'string') {
    queryParam.query = metaImage;
  }
  const url = `${API_UNSPLASH}?${qs.encode(queryParam)}`;
  if (
    ['thumb', 'small', 'regular', 'full', 'raw'].indexOf(type) === -1
  ) {
    throw new Error('This file size if not supported by unsplash');
  }

  const imgName = `${imgPath}/${type}.png`;
  const errorHandler = e => {
    console.error('Failed');
    if (metaImage instanceof Array && loopCount < metaImage.length - 1) {
      getUnsplashImageInfo(imgPath, metaImage, type, loopCount + 1)
        .then(() => {
          resolve();
        }, e => {
          reject(e);
        });
    } else {
      reject(e);
    }
  }

  if (!fs.existsSync(imgName)) {
    const urlReq = https.get(url, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        data = JSON.parse(data);
        if (data.urls) {
          const imgReq = https.get(data.urls[type], res => {
            data = [];
            res.on('data', chunk => {
              data.push(chunk);
            });
            res.on('end', () => {
              const img = Buffer.concat(data);
              fs.writeFile(imgName, img, function (err) {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              });
            });
          });
          imgReq.on('error', errorHandler);
          imgReq.end();
        } else {
          errorHandler(new Error(
            data.errors || new Error(`No photos found ${metaImage.toString()}`)
          ));
        }
      });
    });
    urlReq.on('error', errorHandler);
    urlReq.end();
  } else {
    resolve();
  }
});

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
        const imgPath = path.join(__dirname, 'static', 'images', root.split(__dirname)[1]);
        if (err) {
          reject(err);
        } else {
          const md = fm(data);
          md.body = marked(md.body);
          fileList.push({
            location,
            markdown: md
          });
          // getUnsplashImageInfo(imgPath, md.attributes.metaImage, 'small').then(() => {
            next();
          // }, e => {
          //   console.error(e);
          //   process.exit(1);
          // });
        }
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
