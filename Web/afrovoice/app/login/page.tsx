import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

function Login() {
  return (
    <div className='flex flex-col min-h-screen items-center p-8 gap-8 sm:p-20 bg-gradient-to-br from-gray-800 via-black to-purple-600 bg-[length:400%_400%] animate-[gradient_12s_ease_infinite] justify-center'>
      <Link href='/transcribe'>
          <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition ">
            AfroVoice
          </span>
          <h1 className='text-2xl font-bold text-gray-200 mb-2'>welcome</h1>
          <p className='text-gray-500 mb-6'>Sign in to continue</p>
        
          <button className='w-full flex items-center justify-center gap-2 px-4 py-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-300 cursor-pointer transition-colors'>
            <span className='text-sm font-medium text-gray-800'>Continue with google</span>
            <FcGoogle className='w-5 h-5' />
          </button>
        </Link>
    </div>
  )
}

export default Login