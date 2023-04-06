const express=require('express');

const blogrouter=express.Router();
const blogController=require('../controllers/blog-controller');

blogrouter.get('/',blogController.getAllBlogs);
blogrouter.post('/add',blogController.addBlog);
blogrouter.put('/update/:id',blogController.updateBlog);
blogrouter.get('/:id',blogController.getById);
blogrouter.delete('/:id',blogController.deleteById);
blogrouter.get('/user/:id',blogController.getByUserId)

module.exports=blogrouter;