import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongodbURL = process.env.MONGODB_URL_STRING as string

export default(async()=> {
  try{
    await mongoose.connect(mongodbURL)
    console.log("Mongodb Conectado!!!");
  }catch(error){
    console.log("error :>>", error);
    process.exit(1);
  }
})()