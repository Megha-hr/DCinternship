import express from 'express'
import dotenv from'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
const port=process.env.PORT||5000;

connectDB();
const app=express()
app.use(cors(
  {
    origin:["https://d-cinternship-api.vercel.app"],
    methods:["POST","GET"],
   Credential:true
  }
))

app.get('https://d-cinternship-api.vercel.app',(req,res)=>{
    res.send("Api is running");
})

app.use('https://d-cinternship-api.vercel.app/api/products',productRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>console.log(`server running on port ${port}`))
