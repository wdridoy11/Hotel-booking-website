import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

