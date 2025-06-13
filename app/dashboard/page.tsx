import { getLoggedInUser } from '@/actions/auth'
import Link from 'next/link'
import React from 'react'
import { FaMicrophone, FaPaste, FaSearch, FaUpload, FaUser } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationPin, FaTelegram, FaTwitter } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Dashboard = async () => {
    const user: UserDetails | null = await getLoggedInUser();
    console.log('Current user:', user);
    
  return (
    <div className=''>
        {/* {side bar} */}
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
        
      <div className='flex'>
        {/* side bar */}
        <div className='bg-gray-200 max-w-[400] min-h-screen '>
            <div className='flex items-center justify-center gap-4'>
            <img 
            className='w-24 h-22'
            src='./logo.png'
            />
            <h1 className='text-xl font-semibold text-gray-900'>LSAN</h1>
            </div>
            <div className='flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 m-2'>
                <FaSearch className='ml-3 text-gray-400' />
                <input 
                type="search"
                placeholder='search' 
                className='p-3 bg-transparent rounded-lg border-none outline-none w-full text-gray-500'
                />
                
            </div>

            {/* <div className='bg-gray-800 p-1 mt-4'></div> */}

            <div className='mt-4 mx-2 h-[60vh]' style={{height: 'calc(100vh - 20px)'}}>
                <h2 className='m-2 text-gray-900'>History</h2>
                <div className='p-2 bg-white m-2 h-full overflow-y-auto rounded-lg'>
                    <ul className='space-y-2'>
                        <li className='p-2 hover:bg-gray-100 rounded'>test transcribed text</li>
                        <li className='p-2 hover:bg-gray-100 rounded'>test transcribed text</li>
                        <li className='p-2 hover:bg-gray-100 rounded'>test transcribed text</li>
                    </ul>
                </div>
            </div>

            <div className='bg-gray-500 p-4 mt-auto sticky bottom-0'>
                <div className='flex items-center justify-center gap-3'>
                    <FaUser className='text-white' />
                    <Link href={'/myAccount'} className='text-white '>
                    {user ? user.name : 'My Account'}
                    </Link>
                </div>
            </div>

        </div>
        {/* main */}
        <div className='bg-gray-200 w-full flex-1 flex flex-col items-center justify-center'>
            <h1 className='text-gray-900 text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-4'>Welcome, <span className='text-blue-600'>{user?.name}</span></h1>
            <p className='text-gray-600 text-lg md:text-xl'>What would you like to transcribe today?</p>
            <div className='flex justify-center items-stretch flex-wrap max-w-6xl'>
                <div className='text-gray-900 bg-white p-6 rounded-xl m-4 flex-1 min-w-[280px] max-w-md min-h-[220px] flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-blue-500 '>
                <div className='flex items-center '>
                    <FaUpload className='text-blue-500'/>
                <h2 className='text-2xl ml-2 font-semibold'>Upload</h2>
                </div>
                <p className='text-gray-600 mt-auto'>File, Audio, Video</p>
                </div>

                <div className='text-gray-900 bg-white p-6 rounded-xl m-4 flex-1 min-w-[280px] max-w-md min-h-[220px] flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-blue-500 '>
                    <div className='flex items-center '>
                    <FaPaste className='text-purple-500'/>
                    <h2 className='text-2xl ml-2 font-semibold'>Paste</h2>
                    </div>
                    <p className='text-gray-600 mt-auto'>YouTube, Website, Text</p>

                </div>

                <div className='text-gray-900 bg-white p-6 rounded-xl m-4 flex-1 min-w-[280px] max-w-md min-h-[220px] flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-blue-500 '>
                    <div className='flex items-center '>
                    <FaMicrophone className='text-green-500'/>
                    <h2 className='text-2xl ml-2 font-semibold'>Record</h2>
                    </div>
                    <p className='text-gray-600 mt-auto'>Record your voice</p>

                </div>

            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
