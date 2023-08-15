import React, { useEffect } from 'react'
import NavCard from './nav-card'
import {motion} from 'framer-motion'

export default function NavCardBlock() {
  return (
    <div className="bg-WaveBG bg-bottom bg-no-repeat bg-bgColor">
      <motion.h3 className='text-xl text-gray-600 text-center py-20'
      initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        delay:0.4
      }}
      >
        Explore the breath-taking destinations around the world along with me
      </motion.h3>
      <motion.div className='flex flex-col md:flex-row items-center justify-center py-5 gap-x-10'
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
      <NavCard name="Blogs" class="blogCard"/>
      <NavCard name="Photos" class="photoCard"/>
      </motion.div>
    </div>
  )
}
