import express from 'express'
import cors from 'cors'
import { whitelist } from './constants.js'
const app = express()

app.use(
    cors()
);
app.options('/api/v1/beta/register', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
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