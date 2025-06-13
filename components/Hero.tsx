import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="max-w-2xl mx-auto min-h-[80vh] flex flex-col justify-center items-center text-center p-6 ">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#747583] to-[#4514F5] bg-clip-text text-transparent" >Turn Speach into Text</h1>        
        <p className="text-xl text-gray-600 mb-12 max-w-lg">Record or Upload any audio file and get accurate Amharic transcripts in seconds.</p>
        <Link 
        href="/login"
        className="bg-[#180267] py-4 px-6 rounded-full hover:bg-[#360267] transition-colors">Try now
        </Link>
      </div>
    </>
  )
}

export default Hero;