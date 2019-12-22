'use strict';

const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('./walk').then(fileList => {
  app.prepare().then(() => {
    const server = express();
    server.get('/blogs/articles/*', (req, res) => {
      const mapping = fileList.reduce(
        require('./utils/dynamicMapGenerator'), {}
      );
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
