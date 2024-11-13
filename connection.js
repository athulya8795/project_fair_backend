// import mongoose
const mongoose = require('mongoose')
connectionstring = process.env.DATABASE
mongoose.connect(connectionstring).then((res)=>{
    console.log('mongodb connection successfully');
}).catch((err)=>{
    console.log(`mongodb connection failed due to ${err}`);
    
})