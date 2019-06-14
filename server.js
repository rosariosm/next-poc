const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/lazy/:is_draggable', (req, res) => {
      const actualPage = '/lazy';
      const queryParams = { is_draggable: req.params.is_draggable };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/notlazy/:is_draggable', (req, res) => {
      const actualPage = '/notlazy';
      const queryParams = { is_draggable: req.params.is_draggable };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

