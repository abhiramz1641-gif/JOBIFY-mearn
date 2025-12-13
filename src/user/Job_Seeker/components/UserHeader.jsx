import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { serverURL } from '../../../services/serverURL'
import { getUserApi } from '../../../services/allApis'
import toast, { Toaster } from 'react-hot-toast'

const UserHeader = ({ preview }) => {

    const [userDetails, setUserDetails] = useState({})

    const nav = useNavigate()

    const LogOut = () => {

        setUserDetails({})
        sessionStorage.clear()
        nav('/')

    }

    const handleLogOut = () => {

        toast((t) => (
            <span>
                Confirm <b>LogOut</b>
                <button className=' ms-2 bg-blue-900 text-white px-2 p-1 rounded hover:scale-102' onClick={()=>{toast.dismiss(t.id);LogOut()}}>
                    Yes
                </button>
            </span>
        ));

    }

    const getUserData = async (mail, t) => {

        const mailId = {
            email: mail
        }
        console.log(mailId);

        const reqHeader = {
            'Authorization': `Bearer ${t}`
        }


        const result = await getUserApi(mailId, reqHeader)

        console.log(result.data.existingUser);

        if (result.status == 200) {
            setUserDetails(result.data.existingUser)
        }

    }

    useEffect(() => {

        if (sessionStorage.getItem('token')) {

            const tokenn = sessionStorage.getItem('token')

            const mail = sessionStorage.getItem('email')

            getUserData(mail, tokenn)

        }

    }, [])



    return (
        <div className='bg-linear-to-r from-[#334ed6] to-[#1E1E2F]'>
            {/* hot toast */}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className=' py-2 px-2 md:px-5 w-full grid grid-cols-2 md:grid-cols-3 items-center '>
                <div className=' flex flex-col items-start'>
                    <img className=' h-16 md:h-20' src="./images/logo.png" alt="" />
                </div>

                <div className=' w-fit md:w-full glass-card hidden md:grid md:grid-cols-3 text-white text-sm lg:text-xl py-2 px-2 md:py-4 md:px-4'>
                    <a href='/' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>Home</a>
                    <a href='/userDashboard' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>Dashboard</a>
                    <a href='/jobs' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>Jobs</a>
                </div>


                <div className=' flex gap-2 items-center justify-end'>
                    <img style={{ height: "60px", width: "60px", borderRadius: "30px" }} src={preview || `${serverURL}/uploads/images/${userDetails?.bio?.pic}`} alt="profile" />
                    <button onClick={handleLogOut} style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' hover:scale-103 p-1 sm:p-2 sm:px-2 md:px-4 rounded bg-white text-white font-semibold shadow-2xl shadow-black'>Log Out</button>
                </div>
            </div >
            <div className=' md:hidden flex justify-center'>
                <div style={{ borderRadius: "10px" }} className=' w-fit flex gap-10 glass-card text-white text-sm lg:text-xl py-2 px-2 md:py-4 md:px-4'>
                    <a href='/' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>Home</a>
                    <a href='/userDashboard' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>Dashboard</a>
                    <a href='/jobs' id='pa' className=' text-center hover:scale-105 hover:text-blue-50 font-semibold'>Jobs</a>
                </div>
            </div>
        </div>
    )
}

export default UserHeader