'use strict';

const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const dyna = require('./utils/dynamicMapGenerator.js');

console.log(dyna);

require('./walk').then(fileList => {
  app.prepare().then(() => {
    const server = express();
    server.get('/blogs/articles/*', (req, res) => {
      const mapping = fileList.reduce((acc, file) => {
        const splits = file.location.substring(1, file.location.length - 1).split('/');
        for (let i = 0; i < splits.length; i++) {
          const key = splits.slice(0, i + 1)
            .join('/');
          const leafPage = i + 1 === splits.length;
          acc[`/blogs/articles/${key}/`] = {
            page: leafPage ? '/articles' : '/articleHomepage',
            query: leafPage ? file.markdown : fileList
          };
        }
        return acc;
      }, {});
      if (mapping[req.originalUrl]) {
        return app.render(req, res, mapping[req.originalUrl].page, {
          ...mapping[req.originalUrl].query
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
