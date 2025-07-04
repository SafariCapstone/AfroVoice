import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInbox, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaTelegram, FaTwitter } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { FcAddressBook } from 'react-icons/fc';
import { SiGmail } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';
import { getLoggedInUser } from '@/actions/auth';
import Login from '@/app/login/page';
import Logout from './Logout';

const Header = async () => {
  const user:UserDetails | null = await getLoggedInUser();
  console.log('Current user:', user);
  return (
    <>
    <header className="text-[#0B0327]">
      <div className='w-full h-10 bg-white flex justify-between p-2'>
        <div className='flex gap-2 ml-2'>
          <Link href='' className='text-[#0B0327] flex items-center '>
          <FaLocationPin />
          Find Location
          </Link>

          <div className='w-0.5 h-6 bg-[#0b13d7]'>
          </div>

          <Link href='' className='text-[#0B0327] flex items-center'>
          <SiGmail />
          lsan@gmail.com
          </Link>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex text-[#0B0327] gap-2'>
            <Link href='' >
              <FaInstagram />
            </Link>
            <Link href='' >
              <FaFacebook />
            </Link>
            <Link href='' >
              <FaTwitter />
            </Link>
            <Link href='' >
              <FaTelegram />
            </Link>
            <Link href='' >
              <FaLinkedin />
            </Link>
          </div>

          <div className='w-0.5 h-6 bg-[#0b13d7]'>
          </div>

          <div>
            <select className='text-[#0B0327]'>
              <option value="English">English</option>
              <option value="Amharic">Amharic</option>
            </select>
          </div>  

        </div>
      </div>

      <nav className='w-full h-[75] bg-gray-200 flex items-center justify-between px-8'>
        <div className='flex items-center gap-4'>
          <img 
        className='w-16 h-14'
        src='./logo.png'
        />
        <h1 className='text-xl font-semibold'>LSAN</h1>
        </div>

        <div className='bg-gray-300 w-fit h-[53] rounded-lg flex items-center gap-8 sm:px-6'>
          <Link href='#home' className='hover:text-gray-600'>Home</Link>
          <Link href='#about' className='hover:text-gray-600'>About</Link>
          <Link href='#features' className='hover:text-gray-600'>Service</Link>
          <Link href='#contact' className='hover:text-gray-600'>Contact</Link>
        </div>

        <div>
          {user ? (
            <div className='text-blue-950 flex m-2 items-center'>
              <span className='mr-4'>{user?.name}</span>
              <Logout />
            </div>
          ): (
              <Link href='/login' className='bg-[#180267] text-white w-13 h-12 p-4 rounded-lg'>Login</Link>
          )}
          
        </div>
        {/* <ThemeToggle /> */}
      </nav>

      </header>
    </>
  )
}

export default Header;