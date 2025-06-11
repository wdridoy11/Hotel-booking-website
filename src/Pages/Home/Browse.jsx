import React from 'react'
import BrowseCard from '../../Components/BrowseCard/BrowseCard';

const Browse = () => {
    const categories = ['Dining', 'Living Room', 'Bedroom', 'Office'];
  return (
    <div className='light-dark-bg py-20'>
        <div className='e-container'>
            <div className='mb-8'>
                <h1 className='e-heading'>Browse The Range</h1>
                <p className='text-base mb-5 mt-2 text-center light-dark-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {categories?.map((category, index) => <>
                    <BrowseCard key={index} />
                </>)}
            </div>
        </div>
    </div>
  )
}

export default Browse