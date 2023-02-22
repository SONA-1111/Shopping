import mongoose from "mongoose";
import colors from "colors";

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb is connected `.bgMagenta.white)
    } catch (error) {
        console.log(`Error in mango db ${error}`.bgRed.white)
    }
}

export  default  connectDB;