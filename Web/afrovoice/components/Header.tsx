import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <>
    <header className="">
        {/* Logo */}
        <Link href='/'>
          <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition ">
            AfroVoice
          </span>
        </Link>

        <nav className="mt-4 flex gap-4 items-center justify-center text-center pb-2 border-b-1 border-b-gray-300/25">
          <Link className="text-sm text-white/80 hover:text-white transition hover:underline underline-offset-4" href='/features'>Features</Link>
          <Link className="text-sm text-white/80 hover:text-white transition hover:underline underline-offset-4" href='/contact'>Contact</Link>
          <Link className="text-sm text-white/80 hover:text-white transition hover:underline underline-offset-4" href='/login'>Login</Link>
          <Link className="text-sm text-white/80 hover:text-white transition hover:underline underline-offset-4 bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg" href='/transcribe'>Try Free</Link>
        </nav>
      </header>
    </>
  )
}

export default Header;