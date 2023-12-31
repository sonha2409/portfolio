"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Project({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* projects */}
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen">
            <motion.img 
              initial={{
                y:-300,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.atptour.com/en/news/www.atptour.com/-/media/images/news/2017/01/14/05/43/federer-australian-open-2017-preview.jpg"
              className="h-28 xl:h-80 md:h-72 object-contain"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Project { i + 1 } of {projects.length}:
                </span> {" "}
                Discord clone
              </h4>
              <p className="text-lg text-center md:text-left">
                This project is a clone of discord that implemens bla bla bla siu
                This project is a clone of discord that implemens bla bla bla siu
                This project is a clone of discord that implemens bla bla bla siu
                This project is a clone of discord that implemens bla bla bla siu
                This project is a clone of discord that implemens bla bla bla siu
                This project is a clone of discord that implemens bla bla bla siu

              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"/>
    </div>

    
  )
}

export default Project