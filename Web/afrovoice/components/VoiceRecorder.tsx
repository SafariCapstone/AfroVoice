"use client"
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { FiCheck, FiCopy, FiMic, FiMicOff } from 'react-icons/fi';

const dummyText = 'hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, hello this test, AfroVoice is a amharic audio transcription app and, ';
export default function VoiceRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const toggleRec = () => {
        setIsRecording(!isRecording);   
    }

    const handleCopy = () => {
        setIsCopied(!isCopied);   
    }

    return (
    <>

    <div className='bg-gray-800 text-white p-4 text-center rounded-lg'>
        <h1 className='text-3xl font-bold mb-2'>AfroVoice</h1>
        <p className='text-gray-300 text-lg'>Record and Transcribe your audio</p>
    </div>

    <div className="w-full max-w-md mb-2 p-2">
        {isRecording && (
            <div className='flex justify-center h-7 gap-3'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <motion.div 
                    key={i}
                    style={{
                        width: '6px',
                        background: '#fff',
                        borderRadius: '3px',
                        height: '20%',
                        alignSelf: 'flex-end',
                    }}
                    animate={{
                        height: ['20%', '100%', '20%'],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        delay: i * 0.1,
                    }}
                />
                ))}
            </div>
        )}
    </div>

    <div className='relative '>
        <button 
        onClick={handleCopy}
        className='absolute right-3 top-3 p-1.5 border-none shadow-sm bg-gray-200 m-2 cursor-pointer'>
            {isCopied ? (
                        <FiCheck className='text-green-500' />
                    ) : (
                        <FiCopy className='text-black hover:text-indigo-500' />
                    )}
        </button>

        {/* <div className="w-full max-w-md bg-amber-100 overflow-y-auto text-black p-4" > */}
        <div className=" max-h-[40vh] w-full pr-12 overflow-y-auto text-gray-800 p-4 rounded-lg border-2 border-gray-200 bg-gray-50" >
            <span>{dummyText}</span>
        </div>
    </div>

    <div className="">
      <button 
      onClick={toggleRec}
      className={`flex items-center border-none px-6 py-2 rounded-full ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-600 hover:bg-green-700'} transition-colors cursor-pointer font-medium`}>
        {isRecording ? (
            <>
            <FiMicOff /> Stop
            </>
        ) : (
            <>
            <FiMic /> Start
            </>
        )}
        </button>
      
    </div>
    </>
  )
}
