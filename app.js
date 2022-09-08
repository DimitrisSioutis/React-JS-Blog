/*const express = require("express");
const app = express();

const path = require("path");

if (process.env.NODE_ENV !== "production") {
    app.use(express.static('build'));
    app.get('*',(req,res)=>{
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}



app.listen( process.env.PORT || 3000)*/