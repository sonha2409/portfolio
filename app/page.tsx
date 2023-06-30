import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Project from '@/components/Project'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z=0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Son's portfolio</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />

      </section>

      {/* Skils */}
      <section id='skills' className='snap-start'>
        <Skills />

      </section>

      {/* Projects */}
      <section id='project' className='snap-start'>
        <Project />

      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />

      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src="https://res.cloudinary.com/teepublic/image/private/s--ZgvZ9pyS--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1672737178/production/designs/37993677_0.jpg" alt="" />
          </div>
        </footer>
      </Link>
    </div>

    
  )
}
export default Home;