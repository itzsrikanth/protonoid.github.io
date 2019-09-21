'use strict';

const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

require('./walk.js').then(fileList => {
  app.prepare().then(() => {
    const server = express();
    server.get('/blogs/articles*', (req, res) => {
      const fileIndex = fileList.findIndex(file => file.location === req.originalUrl.replace(/\/blogs\/articles/, ''));
      if (fileIndex !== -1) {
        return app.render(req, res, '/articles', {
          ...fileList[fileIndex].markdown
        });
      }
    });
  
    server.get('*', (req, res) => {
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
