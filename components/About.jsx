import React from 'react'
import Image from 'next/image'




const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16 '>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
              <h2 className='py-4'>Who I am</h2>
              <p className='py-2  text-gray-600'>I am not your normal developer</p>
              <p className='py-2  text-gray-600'>I have spent the last 12 years in the fire service working as a professional fireligter &I have spent the last 12 years in the fire service working as a professional fireligter &
                parametric. I havve alwais had a I have spent the last 12 years in the fire service working as a professional fireligter &
                parametric. I havve alwais had a I have spent the last 12 years in the fire service working as a professional fireligter &
                parametric. I havve alwais had a I have spent the last 12 years in the fire service working as a professional fireligter &
                parametric. I havve alwais had a 
                parametric. I havve alwais had a 
              </p>
              <p className='py-2  text-gray-600'>
              I have spent the last 12 years in the fire service working as a professional fireligter &
                parametric. I havve alwais had a I have spent the last 12 years in the fire service working as a professional fireligter &
                parametric. I havve alwais had a I have spent the last 12 years in the fire service working as a professional fireligter &
                parametric. I havve alwais had a I have spent the last 12 years in the fire service working as a professional fireligter &
                parametric. I havve alwais had a 
              </p>
              <p className='py-2  text-gray-600 underline cursor-pointer'>Check out some ofm my latest projects.</p>
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <Image  className='rounded-xl' src='/assets/about.jpg' alt='/' width='500' height='500'/>
            </div>
        </div>
    </div>
  )
}

export default About