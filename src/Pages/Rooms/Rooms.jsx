import React from 'react'

import { Link } from 'react-router-dom';
import RoomCard from '../../Components/RoomCard/RoomCard';

const Rooms = () => {
        const categories = ['Dining', 'Living Room', 'Bedroom', 'Office'];
  return (
    <div className='light-dark-bg py-10'>
        <div className='e-container'>
            <div className='mb-8'>
                <h1 className='e-heading'>Browse The Range</h1>
                <p className='text-base mb-5 mt-2 text-center light-dark-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {categories?.map((category, index) => <>
                    <RoomCard key={index} />
                </>)}
            </div>
            <div className='text-center mt-10'>
                <Link className='e-button'>Show More</Link>
            </div>
        </div>
    </div>
  )
}

export default Rooms