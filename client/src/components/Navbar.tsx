import React from 'react';
import logo from '../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-between items-center space-x-4'>
      <div id='logo' className='flex justify-between items-center w-[20%] '>
        <img src={logo} alt="" className='h-40 cursor-pointer w-full' />
      </div>
      <div id='nav-links' className='flex justify-between items-start w-[40%]'>
        <NavLink to='/' >BlogHome</NavLink> 
        <NavLink to='/product'>Explore TaskUp</NavLink>
        <NavLink to=''>Teams</NavLink>
        <NavLink to=''>Topics</NavLink>
        <NavLink to=''>News</NavLink>
      </div>
      <div className='flex justify-between items-c w-[30%]'>
        <div >
          <input type="text" placeholder='search' className='w-full px-1.5 py-0.5 border-2 border-amber-400'/>
        </div>
        <div>
          <button
            type='button'
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;