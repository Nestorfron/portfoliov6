import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useRouter } from 'next/router'




const Navbar = () => {
    const [nav, setNav] = useState(true);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter()

    useEffect(()=>{
        if (
            router.asPath === '/bootstrap' ||
            router.asPath === '/calculator' ||
            router.asPath === '/flexbox' ||
            router.asPath === '/form' ||
            router.asPath === '/player' ||
            router.asPath === '/web' ||
            router.asPath === '/imgfinder' ||
            router.asPath === '/cart' 




        ) {
            setNavBg('transparent');
            setLinkColor('#ecf0f3');
        } else {
            setNavBg('#ecf0f3');
            setLinkColor('#1f2937');
        } 
    }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[])


    return (
        <div style={{backgroundColor: `${navBg}` }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <h6 className='ml-0  uppercase text-[#4791C2]'>Welcome nice to meet you</h6>
                <div>
                    <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>


            <div 
                className={
                    !nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                <div 
                    className={
                        !nav ? 'fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src="/assets/logo.png" alt="/" width='87' height='35'/>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let´s build something legendary together</p>
                        </div>
                    </div>
                    <div className='py-4 flex-col'>
                        <ul>
                            <Link href='/'>
                                <li onClick={()=>setNav(true)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=>setNav(true)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={()=>setNav(true)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={()=>setNav(true)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={()=>setNav(true)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase -tracking-widest text-[#4791C2]'>Let´s Connect</p>
                            <div className='flex items-center  justify-center my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ml-10 hover:scale-105 ease-in duration-500'>
                                    <a href="https://www.linkedin.com/in/nestor-frones/"><FaLinkedinIn/></a> 
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ml-10 hover:scale-105 ease-in duration-500'>
                                    <a href="https://github.com/Nestorfron"><FaGithub /></a>
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar