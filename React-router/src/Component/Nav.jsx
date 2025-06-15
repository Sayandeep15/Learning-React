import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full bg-zinc-800 p-2 '>
        <nav className=''>
            <NavLink className={(e)=> {return e.isActive?"red":""}} to="/">Home</NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about">About</NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login">Login</NavLink>
        </nav>
    </div>
  )
}

export default Nav