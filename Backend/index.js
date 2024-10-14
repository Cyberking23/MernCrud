import DbConnection from './db/db.js'
import dotenv from 'dotenv'
import routers from './routes/routes.js';
import cors from 'cors'
import express from 'express';
dotenv.config()


const app = express()


DbConnection();

app.use(express.json())
app.use(cors())
app.use('/api',routers)
app.listen(process.env.PORT,()=>{
    console.log(`Puerto Siendo escuchado en el puerto 4000`);
    
})