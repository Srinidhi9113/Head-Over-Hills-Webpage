import React from 'react'
import Instagram from '../../assets/icons/instagram'
import Twitter from '../../assets/icons/twitter'
import Facebook from '../../assets/icons/facebook'
import Burger from '../../assets/icons/burger'
import Google from '../../assets/icons/google'

export default function Topbar() {
  return (
    <div className='fixed top-0 left-0 right-0 grid md:grid-cols-3 grid-cols-2 px-5 py-5 bg-gray-200 gap-10 z-50'>
      <div className='flex justify-center ml-10'>
        <input type='text' placeholder='Search' className='bg-gray-200 border-b-2 border-black opacity-70 focus:w-80 focus:border-b-3 focus:border-black outline-none focus:shadow-lg'/>
      </div>

      <div className='md:hidden flex justify-end mr-10' onClick={()=>{
        var menu = document.querySelector("#menu")
        if(menu.classList.contains("hidden")){
          menu.classList.remove("hidden")
        }
        else menu.classList.add("hidden")
      }}>
        <Burger/>
      </div>

      <div className='md:flex md:justify-center hidden' id="menu">
        <ul className='flex md:flex-row flex-col gap-10'>
          <li className='mx-2 md:border-b-2 md:border-black md:pb-2 md:shadow-lg'>
            <a className='hover:cursor-pointer'>Home</a>
          </li>
          <li className='mx-2'>
            <a className='hover:cursor-pointer'>About</a>
          </li>
          <li className='mx-2'>
            <a className='hover:cursor-pointer'>Travel</a>
          </li>
          <li className='mx-2'>
            <a className='hover:cursor-pointer'>Photos</a>
          </li>
        </ul>
      </div>

      <div className='md:flex md:items-center md:justify-center hidden'>
        <ul className="flex gap-5">
        <li><a><Instagram/></a></li>
        <li><a><Facebook/></a></li>
        <li><a><Twitter/></a></li>
        <li><a><Google/></a></li>
        </ul>
      </div>

    </div>
  )
}
