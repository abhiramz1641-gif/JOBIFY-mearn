import React from 'react'
import { Link } from 'react-router-dom'

const UserHeader = () => {
    return (
        <div className='bg-linear-to-r from-[#334ed6] to-[#1E1E2F]'>
            <div className=' py-2 px-2 md:px-5 w-full grid grid-cols-2 items-center '>
                <div className=' flex flex-col items-start'>
                    <img className=' h-16 md:h-20' src="./images/logo.png" alt="" />
                </div>


                <div className=' flex gap-2 items-center justify-end'>
                    <img style={{height:"60px",width:"60px",borderRadius:"30px"}} src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt="" />
                    <Link to={'/login'}><button style={{backgroundImage:"linear-gradient(135deg, #5771FF, #00C8FF)"}} className=' hover:scale-103 p-1 sm:p-2 sm:px-2 md:px-4 rounded bg-white text-white font-semibold shadow-2xl shadow-black'>Log Out</button></Link>
                </div>
            </div >
        </div>
    )
}

export default UserHeader