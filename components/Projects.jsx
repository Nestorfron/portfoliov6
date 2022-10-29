import React from 'react'
import Img1 from '../public/assets/projects/1.jpg'
import Img2 from '../public/assets/projects/2.jpg'
import Img3 from '../public/assets/projects/3.jpg'
import Img4 from '../public/assets/projects/4.jpg'
import Img5 from '../public/assets/projects/5.jpg'
import Img6 from '../public/assets/projects/6.jpg'
import Img7 from '../public/assets/projects/7.jpg'
import Img8 from '../public/assets/projects/8.jpg'
import ProjectItem from './ProjectItem'




const Projects = () => {
  return (
    <div id='projects' className='w-full' >
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
    <p className='text-xl tracking-widest uppercase text-[#4791C2]'>Projects</p>
    <h2 className='py-4'>What I´ve Built</h2>
    <div className='grid md:grid-cols-4 gap-6 sm:grid-cols-2'>
        <ProjectItem
            title='Virtual Shop' 
            backgroundImg={Img1}
            projectUrl='/bootstrap'
         />
         <ProjectItem
            title='Calculator' 
            backgroundImg={Img2}
            projectUrl='/calculator'
         />
         <ProjectItem
            title='Flexbox' 
            backgroundImg={Img3}
            projectUrl='/flexbox'
         />
         <ProjectItem
            title='Formulario' 
            backgroundImg={Img4}
            projectUrl='/form'
         />
         <ProjectItem
            title='Player' 
            backgroundImg={Img5}
            projectUrl='/player'
         />
         <ProjectItem
            title='Web' 
            backgroundImg={Img6}
            projectUrl='/web'
         />
         <ProjectItem
            title='Image Finder' 
            backgroundImg={Img7}
            projectUrl='/imgfinder'
         />
         <ProjectItem
            title='Shopping cart' 
            backgroundImg={Img8}
            projectUrl='/cart'
         />
    </div>

        </div>

    </div>
  )
}




export default Projects