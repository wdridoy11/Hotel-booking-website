import React from 'react'

const RoomDetails = () => {
  return (
    <div className='light-dark-bg'>
        <div>
            <div>
                <img 
                    src="https://plugins.yithemes.com/yith-woocommerce-booking-hotel/wp-content/uploads/sites/475147/2018/06/Fotolia_145963042_Subscription_Monthly_M.jpg" 
                    alt="" 
                    className='w-full h-96 object-cover object-center rounded-md mb-8'
                />
            </div>
            <div className='e-container'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {/* Rooms Details content */}
                    <div>
                        <h3 className='light-dark-text'>Sydney Room</h3>
                        <h5 className='light-dark-text'>Details</h5>
                        <div>
                            <p className='light-dark-text'>Max Duration: <strong>7 days</strong></p>
                            <p className='light-dark-text'>Max People: <strong>3</strong></p>
                        </div>
                        <div>
                            <p className='light-dark-text'>Base Price: <strong>5$</strong> / <small>person</small></p>
                            <p className='light-dark-text'>Person: <strong>50$</strong> / <small>person</small></p>
                        </div>
                    </div>
                    {/* Booking calander */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomDetails