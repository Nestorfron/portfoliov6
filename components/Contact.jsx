import React from 'react'
import Image from 'next/image'
import contactImg from '../public/assets/contact.jpg'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import { HiChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#4791C2]'>Contact</p>
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
            <div className='flex items-center justify-center py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 ml-4 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <a href="https://www.linkedin.com/in/nestor-frones/"><FaLinkedinIn/></a> 
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 ml-4 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <a href="https://github.com/Nestorfron"><FaGithub /></a>
            </div> 
</div>
</div>      
</div> 
</div>
    <div className='col-span-3 w-full h-auto shadow-xl stroke-gray-400 rounded-xl lg:p-4'>
        <div className='p-4'>
            <form action="https://formsubmit.co/nestorfrones07@gmail.com" method="POST" >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required name='Name'/>
                    </div>
                    <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required name='Phone Number'/>
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" required name='Email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subjet</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='Subjet'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='Text area'></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://portfoliov6.vercel.app/form"></input>
            </form>
                     </div>
                 </div>
            </div>
            <div className='flex justify-center p-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-500'>
                        <HiChevronDoubleUp className='text-[#4791C2]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact