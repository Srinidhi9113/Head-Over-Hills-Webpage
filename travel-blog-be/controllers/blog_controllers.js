const Blogs = require('../models/blogs')
const mongoose = require('mongoose')

const createBlog = async (req,res) =>{
    const {title, content} = req.body
    try{
        const Blog = await Blogs.create({title, content})
        res.status(200).json(Blog)
        
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const getAllBlogs = async (req,res) => {
    const blogs = await Blogs.find({}).sort({createdAt:-1})
    res.status(200).json(blogs)
}

const getBlog = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such blog'})
    }
    const blog = await Blogs.findById(id)
    if(!blog){
        return res.status(404).json({error:'No such blog'})
    }
    else{
        return res.status(200).json(blog)
    }

}

const updateBlog = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such blog'})
    }

    const blog = await Blogs.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!blog){
        return res.status(404).json({error:'No such blog'})
    }
    else{
        return res.status(200).json(blog)
    }
}

const deleteBlog = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such blog'})
    }
    const blog = await Blogs.findOneAndDelete({_id:id})
    if(!blog){
        return res.status(404).json({error:'No such blog'})
    }
    else{
        return res.status(200).json(blog)
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
    updateBlog
}