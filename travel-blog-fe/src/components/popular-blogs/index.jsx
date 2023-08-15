import React from 'react'
import BlogCard from './blog-card'
import ChevronRight from '../../assets/icons/chevronRight'
import ChevronLeft from '../../assets/icons/chevronLeft'
import {motion} from 'framer-motion'
import { useEffect,useState } from 'react'

export default function PopularBlogs() {
  const scrollRight = ()=>{
    const scrollList = document.querySelector("#scrollList")
    scrollList.scrollBy(400,0)
  }
  const scrollLeft = ()=>{
    const scrollList = document.querySelector("#scrollList")
    scrollList.scrollBy(-400,0)
  }
  const [blogs,setBlogs] = useState(null)
  useEffect(()=>{
    const fetchBlogs = async ()=>{
      const response = await fetch("/api/blogs")
      const json = await response.json()
      if(response.ok){
        setBlogs(json)
      }
    }
    
    fetchBlogs()
  },[])
  return (
    <div className='bg-WaveBG-Bottom bg-top bg-no-repeat bg-cover'>
      <motion.h1 className='text-3xl text-slate-200 text-left ml-10 py-10'
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        delay:0.4
      }}>Popular Blogs</motion.h1>
      <motion.div className='flex pb-12 justify-around'
       initial={{
        opacity:0,
        y:-50
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      transition={{
        delay:0.7
      }}>
      {blogs && blogs.length>=3 && <ChevronLeft onClick={scrollLeft}/>}
      <div id="scrollList" className='flex overflow-auto py-10 scrollbar-none scroll-smooth'>
        {blogs && blogs.map((blog)=>(<BlogCard/>))}
      </div>
      {blogs && blogs.length>=3 && <ChevronRight onClick={scrollRight}/>}
      </motion.div>
    </div>
  )
}
