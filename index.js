const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    req.send("Hello" + Math.random());
})

app.post('/create',(req,res)=>{
    
    req.send("User created")
})

app.listen(port , ()=> 
{
    console.log("Server running on port" + port);
}) 