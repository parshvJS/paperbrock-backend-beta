import express from 'express'
import cors from 'cors'
import { whitelist } from './constants.js'
const app = express()

app.use(
    cors()
);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://paperbrock.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
        // Add other CORS headers as needed
    next();
  });

app.use(express.json({
    limit: '16kb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))

import router from './routes/user.router.js'

app.use('/api/v1/beta', router)
export default app;