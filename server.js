'use strict';

const fs = require('fs');
const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('./walk').then(fileList => {
  app.prepare().then(() => {
    const server = express();
    server.get('/sitemap.xml', (req, res) => {
      res.set('Content-Type', 'application/xml');
      fs.readFile('sitemap.xml', 'utf8', (err, data) => {
        if (err) {
          res.status(404).send();
        } else {
          res.status(200).send(data);
        }
      })
    });
    server.get('/blogs/articles/*', (req, res) => {
      const mapping = fileList.reduce(
        require('./utils/dynamicMapGenerator'), {}
      );
      /**
       * When the request comes in without trailing slash,
       * it is added and checked with pages mapping
       */
      const urlSanitise = /\/$/.test(req.originalUrl)
        ? req.originalUrl
        : `${req.originalUrl}/`;
      if (mapping[urlSanitise]) {
        return app.render(req, res, mapping[urlSanitise].page, {
          ...mapping[urlSanitise].query
        });
      } else {
        console.log('watermelon: ' + req.originalUrl);
      }
    });
   
    server.get('*', (req, res) => {
      console.log('it was me: ' + req.url);
      return handle(req, res);
    });
  
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000');
    });
  });
}, err => {
  console.error(`Unable to read content: ${err}`);
});
