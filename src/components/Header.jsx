import React from 'react'

const Header = () => {






  return (
    <>

      <div className=' py-2 px-2 md:px-5 w-full md:grid grid-cols-1 md:grid-cols-3 items-center gap-5'>
        <div className=' flex justify-items-center md:justify-items-start items-center'>
          <img className=' h-20' src="./images/logo.png" alt="" />
        </div>

        <div id='head' className=' hidden md:grid md:grid-cols-3 text-white text-xl md:py-4'>
          <a><h1 className=' text-center hover:scale-105 cursor-pointer'>About Us</h1></a>
          <h1 className=' text-center'>Contact</h1>
          <h1 className=' text-center'>FAQ</h1>
        </div>





        <div className=' flex gap-2 items-center justify-center md:justify-end'>
          <button className=' p-2 px-2 md:px-4 rounded bg-white border border-gray-600 text-gray-600 font-semibold shadow-2xl shadow-black'>Log In</button>
          <button style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' font-semibold px-2 md:px-4 p-2 rounded text-white shadow-2xl shadow-black'>Sign Up</button>
        </div>
      </div>

    </>
  )
}

export default Header