import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './Login';
import Browse from './Browse';

const Body = () => {

  const bodyRouter = createBrowserRouter([
    {path: '/',
      element : <Login />
    },
   {
    path: '/browse',
    element: <Browse />
   }
  ])
  return (
    <div>
      <RouterProvider router={bodyRouter}></RouterProvider>
    </div>
  )
}

export default Body
