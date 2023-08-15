import React, { useState } from 'react'
import Instagram from '../../assets/icons/instagram'
import Twitter from '../../assets/icons/twitter'
import Facebook from '../../assets/icons/facebook'
import Burger from '../../assets/icons/burger'
import Google from '../../assets/icons/google'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Topbar() {

  const [fade,setFade] = useState(false)

  return (
    <motion.div 
    initial = {{
      opacity : 0,
      y:-100
    }}
    animate={{
      opacity : 1,
      y:0
    }}
    transition={{
      duration:0.5,
      delay:0.7
    }}
    >
    <div className='fixed top-0 left-0 right-0 grid md:grid-cols-3 grid-cols-2 px-5 py-5 bg-gray-200 gap-10 z-40'>
      <div className='flex justify-center ml-10'>
        <input type='text' placeholder='Search' className='bg-gray-200 border-b-2 border-black opacity-70 focus:w-80 focus:border-b-3 focus:border-black outline-none focus:shadow-lg'/>
      </div>

      <div className='md:hidden flex justify-end mr-10' onClick={()=>{
        setFade((prevState)=>!prevState)
      }}>
        <Burger/>
      </div>

      <div className='md:flex md:justify-center hidden'>
        <ul className='flex md:flex-row flex-col gap-10'>
          <li className='mx-2'>
            <Link className='underLine after:mt-1.5 hover:cursor-pointer' to="/">Home</Link>
          </li>
          <li className='mx-2'>
            <a className='underLine after:mt-1.5 hover:cursor-pointer'>About</a>
          </li>
          <li className='mx-2'>
            <Link className='underLine after:mt-1.5 hover:cursor-pointer' to="/blogLib">Travel</Link>
          </li>
          <li className='mx-2'>
            <a className='underLine after:mt-1.5 hover:cursor-pointer'>Photos</a>
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
    <motion.div className='md:hidden fixed bg-gray-100 rounded-md py-8 px-10 top-12 z-50 right-5 origin-top'
      initial = {{scaleY:0 }}
      animate = {fade? {scaleY:1}:{scaleY:0}}
    >
        <ul className='flex md:flex-row flex-col gap-10'>
          <li className='mx-2' onClick={()=>{
        setFade((prevState)=>!prevState)
      }}>
            <a className='underLine hover:cursor-pointer'>Home</a>
          </li>
          <li className='mx-2'onClick={()=>{
        setFade((prevState)=>!prevState)
      }}>
            <a className='underLine hover:cursor-pointer' href="#About-me">About</a>
          </li>
          <li className='mx-2'onClick={()=>{
        setFade((prevState)=>!prevState)
      }}>
            <a className='underLine hover:cursor-pointer'>Travel</a>
          </li>
          <li className='mx-2'onClick={()=>{
        setFade((prevState)=>!prevState)
      }}>
            <a className='underLine hover:cursor-pointer'>Photos</a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}
