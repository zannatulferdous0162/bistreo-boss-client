import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Routes/Routes.jsx';
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>

  </React.StrictMode>,
)
