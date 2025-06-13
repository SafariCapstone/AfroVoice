import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';

const Main = () => {
  return (
    <>
    <section id='about' className='min-h-screen max-w-6xl m-auto bg-[#121212] rounded-lg'>
        <div>
            <h1 className='text-4xl text-white p-8 text-center'>About Lsan</h1>
        </div>
        <div className='p-8'>
            <img src="Capture-1.png" className='w-full h-[653]' alt="" />
        </div>
    </section>
    <section id='features' className='min-h-screen max-w-6xl m-auto'>
        <div>
            <h1 className='text-4xl text-black text-center p-8'>Features</h1>
        </div>
        <div className='flex items-center gap-4'>
            <div className='bg-gray-400 p-4 w-[382] h-[320] rounded-lg cursor-pointer border-2 hover:w-[390] hover:h-[330] hover:border-[#0b13d7] transition-all '></div>
            <div className='bg-gray-400 p-4 w-[382] h-[320] rounded-lg cursor-pointer border-2 hover:w-[390] hover:h-[330] hover:border-[#0b13d7] transition-all '></div>
            <div className='bg-gray-400 p-4 w-[382] h-[320] rounded-lg cursor-pointer border-2 hover:w-[390] hover:h-[330] hover:border-[#0b13d7] transition-all '></div>
            <div className='bg-gray-400 p-4 w-[382] h-[320] rounded-lg cursor-pointer border-2 hover:w-[390] hover:h-[330] hover:border-[#0b13d7] transition-all '></div>
        </div>
    </section>
    <section id='contact' className='min-h-[300px] max-w-6xl mx-auto text-black gap-8'>
        <div className=''>
            <h1 className='text-4xl p-4 text-center mb-12 '>Useful links</h1>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 '>
        <div className='flex items-center gap-8'>
        <img 
        className='w-40 h-36'
        src='./logo.png'
        />
        {/* <h1 className='text-2xl'>LSAN</h1> */}
        </div>

        <div className='flex flex-col gap-4 text-center md:text-left'>
                <Link href='' className='hover:underline'>About us</Link>
                <Link href='' className='hover:underline'>Services</Link>
                <Link href='' className='hover:underline'>Contact us</Link>
        </div>

        <div className='flex gap-6 text-black'>
          {[FaInstagram, FaFacebook, FaTwitter, FaTelegram, FaLinkedin].map((Icon, i) => (
            <Link href='' key={i} className='text-2xl hover:opacity-80'>
              <Icon />
            </Link>
          ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Main;