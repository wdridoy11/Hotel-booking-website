import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home'
import RoomDetails from '../Components/RoomDetails/RoomDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main />,
        children:[
            {
                path: '/',
                element:<Home />
            },
            {
                path: '/room-details',
                element:<RoomDetails />
            }
        ]
    }
])
