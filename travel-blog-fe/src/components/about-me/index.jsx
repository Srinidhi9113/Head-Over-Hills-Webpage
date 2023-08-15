import React from 'react'
import profileImg from '../../assets/ProfileImg.jpeg'

export default function AboutMe() {
  return (
    <div className='my-0 py-3 md:px-20 px-10 bg-gradient-to-t to-[#FAF9F6] from-sky-500 text-gray-700' id="About-me">
      <h1 className='text-5xl text-center py-3 text-gray-700'>About Me</h1>
      <div className='my-10 py-10 md:px-10 px-3 bg-white border-white bg-opacity-50 rounded-md shadow-lg flex md:flex-row flex-col justify-evenly'>
        <div className='flex flex-col justify-center'>
          <img src={profileImg} className='md:h-72 md:mr-20 md:ml-10 object-cover rounded-lg shadow:sm hover:shadow-lg transition duration-700 ease-in-out hover:-translate-y-5 hover:scale-110'></img>
          </div>
        <div className='md:w-96'>
          <div className='text-5xl my-5 text-center'>Hey there!!!</div>
          <div className='text-3xl text-center'>I'm Srinidhi, with a passion for travelling, photography and writing.</div>
          <div className='text-3xl text-center'>I'm Srinidhi, with a passion for travelling, photography and writing.</div>
          <div className='text-3xl text-center'>I'm Srinidhi, with a passion for travelling, photography and writing.</div>
        </div>
      </div>
    </div>
  )
}
