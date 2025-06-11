import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
const bgImage =`https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_1280.jpg`

const Login = () => {

  return (
    <div>
        <div className="light-dark-bg">
          <div className="bg-opacity-30"></div>
            <div className='container mx-auto px-5'>
                <div className='grid md:grid-cols-2 gap-10 py-20 px-10 rounded-xl items-center'>
                    <div>
                      <h1 className='text-2xl font-medium text-white text-center mb-5'>Welcome to Login</h1>
                        <form>
                          <p className='text-red-600 text-center mb-2 text-lg '></p>
                          <div className='mb-3'>
                              <input 
                                  type="email" 
                                  name='email' 
                                  id='name' 
                                  placeholder="Enter your email" 
                                  className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white   rounded-full w-full" 
                              />
                          </div>
                          <div>
                              <div className='relative'>
                                <input 
                                    type="password" 
                                    name='password' 
                                    id='password' 
                                    placeholder="Enter your password"
                                    className="bg-transparent px-5 py-3 outline-none placeholder-white border border-white rounded-full w-full" 
                                />
                              </div>
                          </div>
                          <input 
                              className='py-2 block w-full px-10 rounded-full light-dark-text mt-5 cursor-pointer text-base font-medium' 
                              type="submit" 
                              value="Login" 
                          />
                        </form>
                        <p className='text-base font-medium light-dark-text text-center mt-4'>
                            New here? <Link className='text-slate-800' to={`/signup`}>Create a New Account</Link>
                        </p>
                        <div className="light-dark-text text-center">OR</div>
                    </div>
                    <div>
                        <img className='w-full md:w-9/12' src="https://ecommerce-website-3bdc6.web.app/static/media/login.7d34e7c6cbf35d3faff3.png" alt="login" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login