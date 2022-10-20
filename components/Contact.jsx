import React from 'react'
import Image from 'next/image'
import contactImg from '../public/assets/contact.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
    <div className='lg:p-4 h-full'>
        <div>
            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt='/'/>
        </div>
        <div>
            <h2 className='py-2'>Nestor Frones</h2>
            <p>Front-End Developer</p>
            <p  className='py-4'>I am available for freelance or full-time positions. Contact me and let´s talk.</p>
        </div>
        <div>
            <p className='uppercase pt-8'>Connect With Me</p>
            <div className='flex items-center justify-between py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <FaLinkedinIn /> 
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <FaGithub /> 
                    </div>   
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <AiOutlineMail /> 
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <BsFillPersonLinesFill /> 
                    </div>
</div>
</div>      
</div> 
</div>
    <div className='col-span-3 w-full h-auto shadow-xl stroke-gray-400 rounded-xl lg:p-4'>
        <div className='p-4'>
            <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required/>
                    </div>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required/>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subjet</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' type="tex t"/>
                </div>
            </form>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Contact