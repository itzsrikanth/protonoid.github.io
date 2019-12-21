'use strict';

const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('./walk.js').then(fileList => {
  app.prepare().then(() => {
    const server = express();
    server.get('/blogs/articles/*', (req, res) => {
      const fileIndex = fileList.findIndex(
        file => file.location.replace(/\/$/, '') === req.originalUrl
          .replace(/\/blogs\/articles/, '')
          .replace(/\/$/, '')
      );
      if (fileIndex !== -1) {
        return app.render(req, res, '/articles', {
          ...fileList[fileIndex].markdown
        });
      } else {
        console.log(JSON.stringify(fileList));
        console.log('watermelon: ' + req.originalUrl + '  ' + fileIndex);
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
