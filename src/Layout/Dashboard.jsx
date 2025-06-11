import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <section id="dashboard">
         <div>
            <div class="dashboard-area flex gap-10">
               <div class="dashboard-menu p-5 shadow-xl">
                  <div class="profile">
                     <img className='rounded-full' src="https://avatars.githubusercontent.com/u/115138025?v=4" alt="student" />
                     <h3 class="profile-name">Md Ridoy Sharif</h3>
                  </div>
                  <nav className='mt-5'>
                     <ul class="menu">
                        <li className='mb-5'><Link to={''}>Skill</Link></li>
                        <li className='mb-5'><Link to={''}>Education</Link></li>
                        <li className='mb-5'><Link to={''}>Experience</Link></li>
                        <li className='mb-5'><Link to={''}>Address</Link></li>
                        <li className='mb-5'><Link to={''}>Portfolio</Link></li>
                        <li className='mb-5'><Link to={''}>Blog</Link></li>
                        <li className='mb-5'><Link to={''}>Contact</Link></li>
                        <li className='mb-5'><Link to={''}>Social</Link></li>
                     </ul>
                  </nav>
               </div>
               <div>
                  <div class="top-navbar shadow-xl p-5">
                      <ul className='flex gap-10'>
                        <li><Link to={''}>Home</Link></li>
                        <li><Link to={''}>About</Link></li>
                        <li><Link to={''}>Services</Link></li>
                        <li><Link to={''}>Project</Link></li>
                        <li><Link to={''}>Blog</Link></li>
                        <li><Link to={''}>Contact</Link></li>
                      </ul>
                  </div>
                  <div class="dashboard-details mt-10">
                    <div class="about-me-info">
                       <h3 class="about-me-title">About Me</h3>
                       <p class="about-me-description">
                          Hi!
                          Welcome! I’m Ridoy Sharif. I was born in Rangpur district, Mithapukur Upazila. I’m a
                          professional WordPress expert and Web designer. I am an expert in this work. I have completed
                          100+ website design. My design is pixel perfect and clean coding. I know how to make a
                          responsive and user-friendly website. I am totally responsible for your work. My goal is to
                          satisfy my clients with my work. I like to learn, I like to use my creativity. I love to work
                          with clients from all over the world. Are you looking for a best quality website design for you?
                          If you need a clean and modern interface for your website. Contact me now to make your dream
                          website design.
                       </p>
                    </div>
                </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default Dashboard