"use client"

import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {}

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mail:to:sontha2409@gmail.com?subject=${formData.subject}&body=Hi,
    my name is ${formData.name}, ${formData.message}`
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I might be the person you are looking for.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Let's talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">+17654091623</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">sontha2409@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">West Lafayette, IN 47906</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className='contact-input' type="text"/>
            <input {...register('email')} placeholder="Email" className='contact-input' type="email"/>
          </div>

          <input {...register('subject')} placeholder='Subject' className='contact-input' type="text" />

          <textarea placeholder="Message" className='contact-input'/>
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>



      </div>
    </div>
  )
}