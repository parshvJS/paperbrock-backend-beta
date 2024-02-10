import express from 'express';
import cors from 'cors';
import { whitelist } from './constants.js';

const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.options('*', cors(corsOptions)); // Enable preflight requests for all routes

app.use(cors(corsOptions));

app.use(express.json({
  limit: '16kb'
}));

app.use(express.urlencoded({
  extended: true,
  limit: '16kb'
}));

import router from './routes/user.router.js';

app.use('/api/v1/beta', router);

export default app;
