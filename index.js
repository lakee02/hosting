const express=require('express');
const mongoose=require('mongoose');
const router = require('./routes/user-routes');
const blogrouter = require('./routes/blog-routes');
const app=express();
const PORT=process.env.PORT;
app.use(express.json());
app.use('/api/user',router);
app.use('/api/blog',blogrouter)

mongoose.connect(
    'mongodb+srv://admin:admin123@cluster0.xivwlwr.mongodb.net/Blog?retryWrites=true&w=majority'
)
.then(()=>app.listen(PORT))
.then(()=>
console.log("Connect to database and running")
)
.catch((err)=>console.log(err));