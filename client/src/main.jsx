import React from 'react'
import ReactDOM from 'react-dom/client'
import createBrowserRouter, RouteProvider,  from 'react-router-dom'
import App from './App.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        // element: <SearchBooks />
      }, {
        path: '/saved',
        // element: <SavedBooks />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
