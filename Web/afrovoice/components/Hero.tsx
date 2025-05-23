import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-6" >Turn <span className="text-blue-400">Speach</span> into Text Instantly by <span className="text-purple-400">AfroVoice.</span></h1>        
        <p className="text-xl text-gray-300 mb-8">Record or Upload any audio file and get accurate Amharic transcripts in seconds.</p>
        <Link 
        href="/transcribe"
        className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg">Try Free Now
        </Link>
      </div>
    </>
  )
}

export default Hero;