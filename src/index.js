import dotenv from'dotenv'
import app from './app.js'
import { connectDB } from './db/dbConnect.js'
dotenv.config()
const port = process.env.PORT || 8000;


connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening on port : ${port} `)
    })
}).catch(()=>{
    console.log("App Run Unsuccessfull !")
})