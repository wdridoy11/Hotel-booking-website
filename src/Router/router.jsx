import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home'
import RoomDetails from '../Components/RoomDetails/RoomDetails'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/Signup/SignUp'
import Dashboard from '../Layout/Dashboard'

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
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<SignUp />
            },
            {
                path:'/dashboard',
                element:<Dashboard />
            }
        ]
    }
])
