import React, { useEffect } from 'react'
import {motion} from 'framer-motion'


export default function MainBlock() {



  return (
    <motion.div className='h-full bg-HeroBG bg-no-repeat bg-center bg-cover from-blue-500 to-cyan-300 flex-column justify-center'
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    transition={{
      delay:0.2,
      duration:0.5
    }}>
      <h2 className='text-bold md:text-2xl text-center text-white  md:pt-72 pt-64'>Travel Blog</h2>
      <h1 className='text-bold md:text-8xl text-8xl text-center text-white'>Head Over Hills</h1>
      <h2 className='text-bold md:text-2xl text-center text-white mt-5 md:pb-72 pb-64'>I haven't been everywhere, but it's on my list!!!</h2>
    </motion.div>
  )
}
