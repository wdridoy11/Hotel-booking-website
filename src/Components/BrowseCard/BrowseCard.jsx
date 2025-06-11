import React from 'react'
import { Link } from 'react-router-dom'
import browse1 from '../../Assets/browse-1.png'
const BrowseCard = () => {
  return (
    <Link to={'/'}>
        <div>
            <img src={browse1} alt="browse" />
            <h3 className='text-xl text-center mt-3 light-dark-text'>Dining</h3>
        </div>
    </Link>
  )
}

export default BrowseCard;