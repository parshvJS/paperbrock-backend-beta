import express from 'express'
import cors from 'cors'
import { whitelist } from './constants.js'
const app = express()

app.use(
    cors({
        origin:whitelist
    })
)

app.use(express.json({
    limit:'16kb'
}))

app.use(express.urlencoded({
    extended:true,
    limit:'16kb'
}))

import router from './routes/user.router.js'

app.use('/api/v1/beta',router)
export default app;