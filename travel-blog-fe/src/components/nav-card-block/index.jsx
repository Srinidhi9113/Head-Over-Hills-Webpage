import React from 'react'
import NavCard from './nav-card'

export default function NavCardBlock() {
  return (
    <div>
      <h3 className='text-lg text-gray-600 text-center py-10'>Explore the breath-taking destinations around the world along with me</h3>
      <div className='flex flex-col md:flex-row items-center justify-center py-5 gap-5'>
      <NavCard name="Blogs"/>
      <NavCard name="Photos"/>
      </div>
    </div>
  )
}
