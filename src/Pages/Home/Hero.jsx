import React from 'react'
import cover from '../../Assets/hero.png'
const Hero = () => {
  return (
    <div style={{backgroundImage:`url('${cover}')`, backgroundPosition:'center'}} className='py-32'>
        <div className='e-container px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div></div>
                <div className='bg-[#FFF3E3] p-14 rounded-lg'>
                    <h5>New Arrival</h5>
                    <h1 className='text-5xl font-semibold mt-3 text-secondary mb-3'>Discover Our New Collection</h1>
                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className='e-button'>Buy now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero