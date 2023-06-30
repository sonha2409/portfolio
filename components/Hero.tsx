"use client"
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, my name is Son", "and I love to code", "but love food more"],
    loop: true,
    delaySpeed: 2000,

  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* <div className='relative mt-20 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]'>
        <Image src={require('../assets/son-rounded.png')} className=' rounded-full h-32 w-32 mx-auto object-cover' layout='fill' objectFit='cover' alt={''} />
      </div> */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://www.si.com/.image/t_share/MTk4NTkzMTQ4Mzc5NzM1NDkx/novak-djokovic-1.jpg"
        alt="" />
      <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-2'>{text}</span>
          <Cursor cursorColor="#F7ABBA" />
        </h1>
      <div className="pt-5">
      {/* TODO: fix hovering button */}
        <Link href="#about">
          <button className='heroButton'>About</button> 
        </Link>
        <Link href="#experience">
          <button className='heroButton'>Experience</button>
        </Link>
        <Link href="#skills">
          <button className='heroButton'>Skills</button>
        </Link>
        <Link href="#project">
          <button className='heroButton'>Project</button>
        </Link>
        <Link href="#contact">
          <button className='heroButton'>Contact Me</button>
        </Link>


      </div>

      </div>

    </div>
  )
}