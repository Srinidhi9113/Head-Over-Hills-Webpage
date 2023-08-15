import React from 'react'
import PhotoCard from './photo-card'
import ChevronRight from '../../assets/icons/chevronRight'
import ChevronLeft from '../../assets/icons/chevronLeft'
import {motion} from 'framer-motion'

export default function PhotoAlbum() {
  const scrollRight = ()=>{
    const scrollList = document.querySelector("#photoList")
    scrollList.scrollBy(400,0)
  }
  const scrollLeft = ()=>{
    const scrollList = document.querySelector("#photoList")
    scrollList.scrollBy(-400,0)
  }
  return (
    <div className='bg-bgColor'>
      <motion.h1 className='text-3xl text-gray-600 text-left ml-10 mb-5'
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        delay:0.4
      }}
      >Photo Albums</motion.h1>
      <motion.div className='flex justify-around'
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
      <ChevronLeft onClick={scrollLeft}/>
      <div id="photoList" className='flex overflow-auto py-12 scrollbar-none scroll-smooth'>
        <PhotoCard/>
        <PhotoCard/>
        <PhotoCard/>
      </div>
      <ChevronRight onClick={scrollRight}/>
      </motion.div>
    </div>
  )
}
