"use client"

import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FaFileUpload, FaMicrophone, FaPause, FaPlay, FaUser } from 'react-icons/fa';
import { FiCheck, FiCopy, FiMicOff } from 'react-icons/fi';
import { ReactMic } from 'react-mic';

type RecordedBlob = {
  blobURL: string;
};

const AudioTranscriber = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const testText = 'transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text transcribed test text';
    
    const [recordedBlob, setRecordedBlob] = useState('');

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const [uploadedAudio, setUploadedAudio] = useState(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(isPlaying);
    }

    const handlecopy = () => {
        setIsCopied(!isCopied);
    }

    const toggleRec = () => {
        setIsRecording(!isRecording);
    }

    const onStop = (recordedBlob: RecordedBlob) => {
    setRecordedBlob(recordedBlob);
    console.log('Recording saved:', recordedBlob.blobURL);
    setUploadedAudio(null);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const audioURL = URL.createObjectURL(file);
    setUploadedAudio({blobURL: audioURL});
    console.log(uploadedAudio);
    setRecordedBlob(null);
    setIsPlaying(false);
  }

  return (
    <div className="flex flex-col min-h-screen p-8 gap-8 text-center">
        
        <Link href='/'>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition ">
            LSAN
          </span>
        </Link>

        <div className='flex gap-2 p-2 justify-center items-center '>
            {(recordedBlob && !isRecording) && (
                <>
                    <div>
                        <audio 
                        src={recordedBlob.blobURL}
                        ref={audioRef}
                        onEnded = {() => setIsPlaying(false)}
                        />
                        <button className='border-2 border-purple-600 text-purple-500 rounded-full p-3 cursor-pointer hover:bg-amber-50 transition-colors' onClick={togglePlay} >
                            {
                                isPlaying ? (<FaPause />) : (<FaPlay />)
                            }
                            </button>
                    </div>
                </>
            )}
            
            <ReactMic
                record={isRecording}
                onStop={onStop}
                strokeColor="#7c3aed"  
                backgroundColor="#ffffff" 
                className={`mt-2 w-52 h-14 rounded-full ${isRecording ? 'visible' : 'hidden'}`}
            />
        </div>

        <div className='flex-1 p-4 relative '>
           <div className='bg-white text-black font-bold rounded-tl-lg rounded-tr-lg p-2'>
                <span>transcribed Text</span>
            </div> 
            <div className='max-h-48 bg-white rounded-lg rounded-bl-lg border-2 border-gray-200 text-gray-800 overflow-y-auto p-2  '>
                <button 
                        onClick={handlecopy}
                        className='absolute right-4 top-4 p-1.5 border-none shadow-sm bg-gray-200 m-2 cursor-pointer'>
                            {isCopied ? (
                                        <FiCheck className='text-green-500' />
                                    ) : (
                                        <FiCopy className='text-black hover:text-indigo-500' />
                                    )}
                        </button>
                
                <span>{testText}</span>
            </div>
        </div>

        <div className='sticky bottom-0 py-4 px-4 rounded-lg '>
            <div className='max-w-3xl mx-auto flex justify-center gap-4 '>
                <div className='relative'>
                    <input
                    type='file'
                    accept='audio/*'
                    onChange={handleUpload}
                    className='absolute inset-0 w-full opacity-0 cursor-pointer'
                    id='audio-upload'
                    />

                    <button
                    className='bg-blue-600 text-white p-4 rounded-lg cursor-pointer'>
                        <FaFileUpload />
                </button>
                </div>

                <button 
                onClick={toggleRec}
                className={`bg-white ${ isRecording ? 'text-red-400' : 'text-green-400'} p-4 rounded-lg cursor-pointer`}>
                    {
                        isRecording ? (<FiMicOff />) : (<FaMicrophone />)
                    }
                </button>

                <button className='bg-purple-600 text-white p-4 rounded-lg cursor-pointe'>
                    <FaUser />
                </button>
            </div>
        </div>
    </div>
  )
}

export default AudioTranscriber;
