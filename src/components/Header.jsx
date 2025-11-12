import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {





  return (
    <>

      <div className=' py-2 px-2 md:px-5 w-full grid md:grid-cols-3 items-center md:gap-5'>
        <div className=' flex flex-col justify-center items-center md:items-start'>
          <img className=' h-20' src="./images/logo.png" alt="" />
        </div>

        <div className=' w-fit md:w-full glass-card grid md:grid-cols-3 text-white text-sm lg:text-xl py-2 px-2 md:py-4 md:px-4'>
          <a href='#about-us' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>About Us</a>
          <a href='#footer' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>Contact</a>
          <a href='#services' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>Services</a>
        </div>

        <div className=' flex gap-2 items-center justify-center md:justify-end'>
          <Link to={'/login'}><button className=' hover:scale-103 p-2 px-2 md:px-4 rounded bg-white border border-gray-600 text-gray-600 font-semibold shadow-2xl shadow-black'>Log In</button></Link>
          <Link to={'/login'} >
            <button style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' hover:scale-103 font-semibold px-2 md:px-4 p-2 rounded text-white shadow-2xl shadow-black'>Sign Up</button>

          </Link>
        </div>
      </div >

    </>
  )
}

export default Header