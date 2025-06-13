'use client'

import { signOut } from '@/actions/auth';
import React, { useState } from 'react'

const Logout = () => {
    const [loading, setLoading] = useState(false);

    const handlelogout = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        await signOut();
        setLoading(false);
    }
  return (
    <div>
      <form onSubmit={handlelogout}>
        <button type='submit' disabled={loading} className='bg-[#180267] text-white h-12 p-4 rounded-lg'>{loading ? 'Signing out...' : 'Sign out'}</button>
      </form>
    </div>
  )
}

export default Logout
