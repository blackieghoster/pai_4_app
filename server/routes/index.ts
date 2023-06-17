import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/api', function(req, res, next) {
//   res.setHeader('Content-Type', 'application/json');
//   res.status(200)
//
//   res.json({
//     'name': 'Natalia',
//     'msg': 'hello!'
//   });
// });
//
// module.exports = router;
