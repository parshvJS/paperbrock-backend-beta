import express from 'express';
import cors from 'cors';
import { whitelist } from './constants.js';
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the whitelist or if it is undefined (for requests without origin)
    if (whitelist.includes(origin) || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Block the request
    }
  },
  credentials: true // Include credentials in the CORS request (e.g., cookies, authorization headers)
};

// Enable CORS with specific options
app.use(cors(corsOptions));

// Parse JSON requests
app.use(express.json({ limit: '16kb' }));

// Parse URL-encoded requests
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

import router from './routes/user.router.js';

app.use('/api/v1/beta', router);

export default app;
