const express=require("express");
const bodyparser=require("body-parser");
const {PORT}=require('./config/serverConfig');
const {City}=require('./models/index')



const serversetup= async()=>{
    //create express object
    const app=express()
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))
    
    app.listen(PORT,()=>{
        console.log(`The server started at ${PORT}`);
        

        
    })

}

serversetup()