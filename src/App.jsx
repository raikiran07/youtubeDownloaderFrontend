import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from './component/Chat'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Main from './pages/Main'
import Disclaimer from './pages/Disclaimer'
import Layout from './component/Layout'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Main />
      },
      {
        path:'/disclaimer',
        element:<Disclaimer />
      }
    ]
  }
])

function App() {


  return (
    <>
    

    <RouterProvider router = {router}>
   
    </RouterProvider>
   
   
     
      
    </>
  )
}

export default App
