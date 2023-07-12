import React from 'react'
import NavCard from './nav-card'

export default function NavCardBlock() {
  return (
    <div className="bg-WaveBG bg-bottom bg-no-repeat bg-bgColor">
      <h3 className='text-xl text-gray-600 text-center py-20'>Explore the breath-taking destinations around the world along with me</h3>
      <div className='flex flex-col md:flex-row items-center justify-center py-5 gap-x-10'>
      <NavCard name="Blogs" class="blogCard"/>
      <NavCard name="Photos" class="photoCard"/>
      </div>
    </div>
  )
}
