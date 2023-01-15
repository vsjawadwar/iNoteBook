const express=require('express');
const router=express.Router();
const User=require("../Models/User");
const { body, validationResult } = require('express-validator');

//Create a user using: POST "/api/auth/". Doesn't require Authentication    
router.post('/',(req,res)=>{
    
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.send(req.body);
})

module.exports=router;