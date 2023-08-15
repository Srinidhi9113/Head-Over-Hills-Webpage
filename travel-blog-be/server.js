require('dotenv').config()
const express = require("express")
const blogRouter = require("./routes/blogs")
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({mssg:"Welcome to the app!!!"})
})

app.use("/api/blogs",blogRouter)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to db")
    app.listen(process.env.PORT,()=>{
        console.log("listening on port",process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})