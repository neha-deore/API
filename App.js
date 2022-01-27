const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./config/db');
const app=express();
const port=7799;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connectDB();
const employeeModel=require('./db/employeeSchema');
const employeeRoutes=require('./routes/employeeRoutes');
app.use("/api",employeeRoutes)

app.listen(PORT,(err)=>{
    if(err) throw err
    console.log('work on ${PORT}');
})