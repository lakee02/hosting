// import User from "../model/User";
const User=require('../model/User.js');
const bcypt=require('bcryptjs');
module.exports.getAllUser=async (req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }catch(err){
       return  console.log(err)
    }
    if(!users){
        return res.status(404).json({message:"No users found"});
    }
    return res.status(200).json({users});
}

module.exports.signup=async (req,res,next)=>{
    const {name,email,password}=req.body;

    let existingUser;
    try{
        existingUser=await User.findOne({email})
    }catch(err){
        return console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message:"User Already exitsts"})
    }
    //hash the password
    const hashedPassword=bcypt.hashSync(password);
    const user = new User({
        name,
        email,
        password:hashedPassword,
        blogs:[],
    });
    
    try{
       await user.save(); 
    }catch(err){
       return  console.log(err);
    }
    return res.status(201).json({user})
}

module.exports.login=async (req,res,next)=>{
    const {email,password}=req.body;

    let existingUser;
    try{
        existingUser=await User.findOne({email});
    }catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"Could not find user by this email"});
    }

    //bcrypt the password
    const isPasswordCorrect=bcypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Password is Incorrect"});
    }

    return res.status(200).json({message:"Login Successfull"});
}
