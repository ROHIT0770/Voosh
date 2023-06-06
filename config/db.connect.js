import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

export async function Connection(){
    return new Promise(function(resolve, reject){
        mongoose.connect("mongodb+srv://rohit:kumar1234@cluster0.r13klys.mongodb.net/?retryWrites=true&w=majority",(err)=>{
            if(err){
            reject('Not connected to DB server')
            }else{
            resolve('Connected to DB')
            }
        })
    })
}