import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Logo from '../../Assets/Logo.png';
const Footer = () => {
  return (
    <div className='light-dark-bg'>
        <div className='bg-slate-400 dark:bg-body py-14'>
            <div className='e-container px-5'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {/* Footer Logo */}
                    <div>
                        <Link to={'/'}>
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <p className='text-slate-300 light-dark-text'>A new way to make the payments easy, reliable and secure.</p>
                    </div>
                    {/* Footer menu */}
                    <div>
                        <h3 className='text-xl font-medium mb-4 light-dark-text'>Usefull Links</h3>
                        <ul>
                            <Link to={'/'} className='footer-menu'>Content</Link>
                            <Link to={'/'} className='footer-menu'>How it Works</Link>
                            <Link to={'/'} className='footer-menu'>Create</Link>
                            <Link to={'/'} className='footer-menu'>Explore</Link>
                            <Link to={'/'} className='footer-menu'>Terms & Services</Link>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-medium mb-4 light-dark-text'>Community</h3>
                        <ul>
                            <Link to={'/'} className='footer-menu'>Help Center</Link>
                            <Link to={'/'} className='footer-menu'>Partners</Link>
                            <Link to={'/'} className='footer-menu'>Suggestions</Link>
                            <Link to={'/'} className='footer-menu'>Blog</Link>
                            <Link to={'/'} className='footer-menu'>Newsletters</Link>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-medium mb-4 light-dark-text'>Partner</h3>
                        <ul>
                            <Link to={'/'} className='footer-menu'>Our Partner</Link>
                            <Link to={'/'} className='footer-menu'>Become a Partner</Link>
                            <Link to={'/'} className='footer-menu'>Affiliate</Link> 
                        </ul>
                    </div>

                </div>

                <div className='border-t border-slate-600 mt-10'>
                    <div className='flex flex-col md:flex-row justify-between items-center mt-10'>
                        <div>
                            <p className='light-dark-text text-base font-normal mb-8 md:5'>Copyright 2025 HooBank. All Rights Reserved.</p>
                        </div>

                        {/* social media */}
                        <div className='flex gap-8'>
                            <Link to={'/'}>
                                <FaFacebookF className='footer-social-menu' />
                            </Link>
                            <Link to={'/'}>
                                <FaTwitter className='footer-social-menu' />
                            </Link>
                            <Link to={'/'}>
                                <FaInstagram className='footer-social-menu' />
                            </Link>
                            <Link to={'/'}>
                                <FaLinkedinIn className='footer-social-menu' />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer