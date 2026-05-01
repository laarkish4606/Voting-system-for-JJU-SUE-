import mongoose from 'mongoose';
import { dbconnection } from './Config.js';


const connectDB = async()=>{
    try{
        await mongoose.connect(dbconnection);
        console.log('MongoDB connected successfully✅');
        
    }catch(error){
            console.error('Error connecting to MongoDB:', error);
    }
}
export default connectDB;