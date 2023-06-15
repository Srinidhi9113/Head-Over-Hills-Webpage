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
    <div>
      <h1 className='text-2xl text-gray-600 text-left ml-10 mb-5'>Popular Blogs</h1>
      <div className='flex'>
      <ChevronLeft onClick={scrollLeft}/>
      <div id="scrollList" className='flex overflow-auto py-12 scrollbar-none scroll-smooth'>
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
