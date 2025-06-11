"use client"

import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('dark');
        if (theme === 'dark') setDarkMode(false);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }

    }, [darkMode]);

    const toggleDarkMode = () => {
        alert('.....');
        setDarkMode(!darkMode);
    }

    return (
        <>
        <div 
        className='bg-amber-300 p-4 cursor-pointer dark:bg-amber-900'
        onClick={toggleDarkMode}
        ></div>
        </>
    )
}

export default ThemeToggle;