import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log("Trying to connect to DB !");
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("Connected Successfully !")


    } catch (error) {
        console.log("Can't connect to db ")
        throw error
        
    }
}
export {connectDB}