import React from 'react'
import product from '../../Assets/browse-1.png'
import { Link } from 'react-router-dom'

const RoomCard = () => {
    // let addToCart = document.querySelectorAll('.add-to-cart');
    // let productCart = document.querySelectorAll('.product-card');

    // for(let i = 0; i<productCart.length; i++){
    //     productCart[i].addEventListener('mouseover',()=>{
            
    //     })
    // }


  return (
    <div className='bg-cool_gray dark:bg-cool_gray_800 relative'>
        <Link className='product-card'>
            <img className='w-full h-80 object-cover object-center rounded-t-md' src={product} alt="product" />
            <div className='p-4'>
                <h3 className='text-2xl font-medium light-dark-text'>Syltherine</h3>
                <p className='text-text_color dark:text-slate_400 my-2'>Stylish cafe chair</p>
                <div className='flex justify-between items-center'>
                    <h4 className='text-xl font-semibold light-dark-text'>Rp 2.500.000</h4> 
                    <p className='text-text_color text-sm dark:text-slate_400'><del>Rp 3.500.000</del></p>
                </div>
                <Link className='text-primary text-sm mt-2 e-button inline-block' to={'/room-details'}>Book Now</Link>
            </div>
        </Link>
        {/* Add to cart */}
        {/* <div className='add-to-cart p-5 absolute top-0 left-0 w-full h-full bg-[#3a3a3ad4] hidden'>
            <div className='mb-8'>
                <Link className='e-button'>Add To Cart</Link>
            </div>
            <div className='flex justify-between items-center w-full '>
                <Link className='text-while'>Share</Link>
                <Link className='text-while'>Compare</Link>
                <Link className='text-while'>Like</Link>
            </div>
        </div> */}
    </div>
  )
}

export default RoomCard