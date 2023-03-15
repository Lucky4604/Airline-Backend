const express=require("express");

const serversetup= async()=>{
    //create express object
    const app=express()
    const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`The server started at ${PORT}`)
    })

}

serversetup()