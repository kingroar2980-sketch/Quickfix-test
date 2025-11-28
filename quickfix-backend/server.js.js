
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simple demo login
app.post("/auth/login", (req,res)=>{
  const {email,password}=req.body;
  if(email==="test@test.com" && password==="1234"){
    return res.json({token:"demo-token", user:{id:1,name:"Test User"}});
  }
  res.json({message:"Invalid login"});
});

// Simple chat endpoint
app.post("/chat/send",(req,res)=>{
  res.json({status:"sent", message:req.body});
});

app.listen(5000, ()=> console.log("Backend running on 5000"));
