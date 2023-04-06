const express=require('express');
const router=express.Router();
console.log('routes loaded');
const getAllUser=require('../controllers/user-controller.js')

router.get("/",getAllUser.getAllUser);
router.post("/signup",getAllUser.signup)
router.post('/login',getAllUser.login);

module.exports=router;