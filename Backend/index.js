import DbConnection from './db/db.js'
import dotenv from 'dotenv'
import express from 'express';
dotenv.config()


const app = express()


DbConnection();


app.listen(process.env.PORT,()=>{
    console.log(`Puerto Siendo escuchado en el puerto 4000`);
    
})