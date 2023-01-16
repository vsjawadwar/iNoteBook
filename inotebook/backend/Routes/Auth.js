const express=require('express');
const router=express.Router();
const User=require("../Models/User");
const { body, validationResult } = require('express-validator');

//Create a user using: POST "/api/auth/createuser". 
// Doesn't require Authentication    
// No Login Required

router.post('/createuser',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min : 3}),
    body('password','Password must be atleast 5 characters').isLength({min: 5})],
    async(req,res)=>{
        //If there are errors it will return Bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this email exists already.
    
    // If we didn't use await here it will throw error "Sorry.. User with this email already exists"

    // Error can cause for multiple reasons we will put this code on Try Catch block so we can handle the exception without interrupting the execution of code.

    try{

        let user=await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry.. User with this email already exists"});
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json(user);
    }catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
        
        //   .then(user => res.json(user))
        //   .catch(err=>{console.log(err)   
        // res.json({error: "Please enter unique value for email",message:err.message})})
    });

module.exports=router;