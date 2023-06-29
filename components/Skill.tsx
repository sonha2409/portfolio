import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex curser-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
        whileInView={{
          opacity: 1, x: 0
        }}
        src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      
        

    </div>
  )
}

export default Skill