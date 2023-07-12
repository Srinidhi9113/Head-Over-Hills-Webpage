import React from 'react'
import BlogCard from './blog-card'
import ChevronRight from '../../assets/icons/chevronRight'
import ChevronLeft from '../../assets/icons/chevronLeft'

export default function PopularBlogs() {
  const scrollRight = ()=>{
    const scrollList = document.querySelector("#scrollList")
    scrollList.scrollBy(400,0)
  }
  const scrollLeft = ()=>{
    const scrollList = document.querySelector("#scrollList")
    scrollList.scrollBy(-400,0)
  }
  return (
    <div className='bg-WaveBG-Bottom bg-top bg-no-repeat bg-cover'>
      <h1 className='text-2xl text-slate-200 text-left ml-10 py-10'>Popular Blogs</h1>
      <div className='flex pb-12 justify-around'>
      <ChevronLeft onClick={scrollLeft}/>
      <div id="scrollList" className='flex overflow-auto py-10 scrollbar-none scroll-smooth'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
      <ChevronRight onClick={scrollRight}/>
      </div>
    </div>
  )
}
