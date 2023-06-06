import React from 'react'
import LOGO from "../../assets/logo.svg"
import Button from '../Button'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className='text-dark font-bold'>Home</a></li>
            <li><a className='text-grey-light font-medium'>About Us</a></li>
            <li><a className='text-grey-light font-medium'>Services</a></li>
            <li><a className='text-grey-light font-medium'>Team</a></li>
            <li><a className='text-grey-light font-medium'>Portfolio</a></li>
            <li><a className='text-grey-light font-medium'>Pricing</a></li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img src={LOGO} alt="logo" className="w-10 h-10" />
          <h2 className='font-bold text-2xl text-dark'>Ayaweisoft</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li><a className='text-dark font-bold'>Home</a></li>
          <li><a className='text-grey-light font-medium'>About Us</a></li>
          <li><a className='text-grey-light font-medium'>Services</a></li>
          <li><a className='text-grey-light font-medium'>Team</a></li>
          <li><a className='text-grey-light font-medium'>Portfolio</a></li>
          <li><a className='text-grey-light font-medium'>Pricing</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button children="Lets Talk" />
      </div>
    </div>
  )
}

export default Navbar