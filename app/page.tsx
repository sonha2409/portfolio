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

const Home: NextPage = () => {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z=0">
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
    </div>

    
  )
}
export default Home;