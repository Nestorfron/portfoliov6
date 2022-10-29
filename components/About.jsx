import React from 'react'
import Image from 'next/image'
import aboutImg from '../public/assets/about.jpg'




const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <p className='uppercase text-xl tracking-widest text-[#4791C2]'>About</p>
              <h2 className='py-4'>Who I am</h2>
              <h6 className='py-2  text-gray-600'>I am not your normal developer</h6>
              <p className='py-2  text-gray-600'>I enjoy taking complex problem and turning them into simple and beautiful interface design.
              i also love the logic and estructure of coding and always strive to write elegant and efficient code, hether it be HTML, CSS or jQuery.
              </p>
              <p className='py-2  text-gray-600'>
              I spent the last 17 years working as a Police officer knowing that my true vocation is the world of software. 
              Finally, the door that I needed to be able to study and become a professional in this world full of opportunities opened for me.
              </p>
              <a href='#projects'  className='py-2  text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</a>
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300'>
              <Image  className='rounded overflow-hidden' src={aboutImg} alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default About