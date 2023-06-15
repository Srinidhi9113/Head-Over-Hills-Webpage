import React from 'react'
import PhotoCard from './photo-card'
import ChevronRight from '../../assets/icons/chevronRight'
import ChevronLeft from '../../assets/icons/chevronLeft'

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
    <div>
      <h1 className='text-2xl text-gray-600 text-left ml-10 mb-5'>Photo Albums</h1>
      <div className='flex'>
      <ChevronLeft onClick={scrollLeft}/>
      <div id="photoList" className='flex overflow-auto py-12 scrollbar-none scroll-smooth'>
        <PhotoCard/>
        <PhotoCard/>
        <PhotoCard/>
        <PhotoCard/>
      </div>
      <ChevronRight onClick={scrollRight}/>
      </div>
    </div>
  )
}
