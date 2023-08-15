const express =  require('express')
const Blogs = require('../models/blogs')
const {
    createBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blog_controllers')

const router = express.Router()

router.get("/",getAllBlogs)

router.get("/:id",getBlog)

router.post("/", createBlog)

router.delete("/:id",deleteBlog)

router.patch("/:id",updateBlog)

module.exports = router