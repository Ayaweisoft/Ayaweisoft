import React from 'react'
import LOGO from "../../assets/logo.svg"
import Button from '../Button'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full py-4'>
        <div className="flex gap-2 items-center">
            <img src={LOGO} alt="logo" className="w-10 h-10" />
            <h2 className='font-bold text-2xl text-dark'>Ayaweisoft</h2>
        </div>
        <ul>
            <li className='inline-block px-4 py-2 hover:cursor-pointer rounded-md text-dark font-bold hover:bg-gray-200'>Home</li>
            <li className='inline-block px-4 py-2 hover:cursor-pointer rounded-md text-grey-light font-medium hover:bg-gray-200'>About Us</li>
            <li className='inline-block px-4 py-2 hover:cursor-pointer rounded-md text-grey-light font-medium hover:bg-gray-200'>Services</li>
            <li className='inline-block px-4 py-2 hover:cursor-pointer rounded-md text-grey-light font-medium hover:bg-gray-200'>Team</li>
            <li className='inline-block px-4 py-2 hover:cursor-pointer rounded-md text-grey-light font-medium hover:bg-gray-200'>Portfolio</li>
            <li className='inline-block px-4 py-2 hover:cursor-pointer rounded-md text-grey-light font-medium hover:bg-gray-200'>Pricing</li>
        </ul>
        <Button children="Lets Talk" />
    </div>
  )
}

export default Navbar