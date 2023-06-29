import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center"
        src="https://banner2.cleanpng.com/20180407/bxq/kisspng-purdue-university-college-of-technology-northern-k-team-5ac97f1f85eaa7.2634071015231547195485.jpg"
      />
      <div className='px-0 md:px-10'>
        <h4 className="text-4xl font-light">Research Internship</h4>
        <p className="font-bold text-2xl mt-1">Purdue University</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://yt3.googleusercontent.com/ytc/AGIKgqOUoSLwRUS1hlbouSLdhsan2C392WHp2bJRj1HzFg=s900-c-k-c0x00ffffff-no-rj"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png"
          />

        </div>
        <p className="uppercase py-5 text-gray-300">Started work.. - Ended..</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>

    </article>
  )
}