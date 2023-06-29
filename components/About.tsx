"use client"
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial= {{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center">
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://image-cdn.essentiallysports.com/wp-content/uploads/2021-07-03T180329Z_1765512130_UP1EH731E5QX6_RTRMADP_3_TENNIS-WIMBLEDON-1110x1065.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a {" "} 
          <span className='underline decoration-[#EAB676]'>little</span> {" "}
          background
        </h4>
      </div>
      <p className="text-base">
        My name is Son Ha, an aspiring software engineer from Hanoi, Vietnam. Currently, I am a student majoring 
        in computer science, with a minor in Mathematics, at the Purdue University, West Lafayette, Indiana.
        My interests include Machine Learning, Natural Language Processing, Web Development, Mobile
        Development and Infrastucture. Since coming to Purdue, with the help of the amazing people around me,
        I have truly found my passion for programming, shown my my burning devotion at both
        school curriculum and personal projects.
        {/* TODO: UPDATE background */}
      </p>
    </motion.div>

  )
}