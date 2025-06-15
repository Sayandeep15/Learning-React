import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import Home from './Component/Home'
import About from './Component/About'
import Login from './Component/Login'

//For react routing
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router= createBrowserRouter([
    {
      path: "/",
      element: <><Nav/> <Home/></>
    },
    {
      path: "/about",
      element: <><Nav/> <About/></>
    },
    {
      path: "/login/:username",
      element: <><Nav/> <Login/></>
    }
  ])

  return (
    <>
     <div className="container bg-zinc-950 w-full h-screen text-white">
      <RouterProvider router={router}/>
     </div>
    </>
  )
}

export default App
