'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Account, ID, Client } from 'appwrite'
import { signIn } from '@/actions/auth'
import { useRouter } from 'next/navigation'
import { sign } from 'crypto'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined }) => {
    try {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await signIn(formData);

    if(result?.error) {
            setError(result.error);
        } else {
          console.log("success");
          console.log(result);

            router.push("/transcribe");
        }
    } catch (err) {
        console.error("Submission Error:", err);
        setError("An unexpected error occurred");
    } finally {
        setLoading(false);
    }
  }

  const handleGoogleLogin = async () => {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const account = new Account(client);

    // Redirect to Appwrite OAuth2 session
    account.createOAuth2Session(
      "google",
      `${window.location.origin}/auth/callback`, // Success redirect
      `${window.location.origin}/login`          // Failure redirect
    );
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center'>
        <img 
        className='w-20 h-18'
        src='./logo.png'
        />
        <h1 className='mt-6 text-center text-3xl font-bold text-gray-900'>LSAN</h1>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-8 '>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className='mb-6 text-center text-3xl font-bold text-gray-900'>Login to your account</h2>
          </div>
          
          <form onSubmit={handleLogin} className='space-y-6'>
            <div>
              {/* <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label> */}
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute left-0 pl-3 flex items-center pointer-events-auto inset-y-0 '>
                  <FaUser className='h-5 w-5 text-gray-400' />
                </div>

                <input 
                type="email"
                autoComplete='email'
                name='email'
                placeholder='Enter your email'
                className='text-gray-600 py-2 pl-10 block w-full border-1 border-gray-500 rounded-lg focus:outline-none focus:border-[#0b13d7] transition-colors' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              {/* <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Password</label> */}
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute left-0 pl-3 flex items-center pointer-events-auto inset-y-0 '>
                  <FaLock className='h-5 w-5 text-gray-400' />
                </div>

                <input 
                type="password"
                name='password'
                autoComplete='password'
                placeholder='Enter your password'
                className='text-gray-600 py-2 pl-10 block w-full border-1 border-gray-500 rounded-lg focus:outline-none focus:border-[#0b13d7] transition-colors'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
            </div>

            <div>
              <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 bg-[#180267] rounded-lg  '
              >
                {!loading ? 'Login' : 'Loginig in....'}
              </button>
            </div>
          </form>

          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center '>
                <div className='w-full border-t bg-gray-300 px-2'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>
                  or continue with
                </span>
              </div>
            </div>

            <div className='mt-6 grid'>
              <button
              type='button'
              onClick={handleGoogleLogin}
              className='w-full inline-flex items-center justify-center text-gray-900 border border-gray-300 rounded-lg bg-white py-2 px-4 '
              >
                <FcGoogle />
                Sign in with Google
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login