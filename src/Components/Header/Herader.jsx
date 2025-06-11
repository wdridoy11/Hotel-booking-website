import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo.png'
import { set } from 'react-hook-form'
import { FaMoon, FaSun } from 'react-icons/fa'

const Herader = () => {

// ========== dark and light mood ==============
const [isDark, setIsDark] = useState(()=>{
    if (typeof window !== 'undefined') {
          return localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    return false;

})

useEffect(()=>{
     if (isDark) {
          document.querySelector('html').setAttribute('data-theme', 'dark');
          document.documentElement.classList.add('dark');
          localStorage.theme = 'dark';
        } else {
          document.querySelector('html').setAttribute('data-theme', 'light');
          document.documentElement.classList.remove('dark');
          localStorage.theme = 'light';
        }
},[isDark])


const toggleTheme =()=>setIsDark(!isDark)





  return (
    <div className='light-dark-bg'>
        <div className='e-container'>
            <div className='flex justify-between items-center py-5'>
                <div>
                    <Link to={'/'}>
                        <img className='w-32' src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div>
                    <ul className='flex items-center gap-10'>
                        <li>
                            <Link to={'/'} className='header-menu'>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className='header-menu'>Shop</Link>
                        </li>
                        <li>
                            <Link to={'/services'} className='header-menu'>About</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className='header-menu'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    <ul className='flex gap-10'>
                        <li>
                            <Link to={'/'} className='header-menu'>Login</Link>
                        </li>
                        <li>
                            <Link to={'/'} className='header-menu'>Sign Up</Link>
                        </li>
                    </ul>
                    {/* light and dark mood toggle button */}
                    <div>
                        <button onClick={toggleTheme}>
                            {
                            isDark ? <FaSun className='text-while'></FaSun> : 
                            <FaMoon></FaMoon>
                            } 
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Herader