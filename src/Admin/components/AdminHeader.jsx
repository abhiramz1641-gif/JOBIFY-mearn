import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserApi } from '../../services/allApis'
import { serverURL } from '../../services/serverURL'
import toast, { Toaster } from 'react-hot-toast'

const AdminHeader = ({ preview }) => {


    const [userDetails, setUserDetails] = useState({})

    const nav = useNavigate()


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
            <div className=' py-2 px-2 md:px-5 w-full grid grid-cols-2 items-center '>
                <div className=' flex flex-col items-start'>
                    <img className=' h-16 md:h-20' src="./images/logo.png" alt="" />
                </div>


                <div className=' flex gap-2 items-center justify-end'>
                    <img style={{ height: "60px", width: "60px", borderRadius: "30px" }} src={preview || `${serverURL}/uploads/images/${userDetails?.bio?.pic}`} alt="" />
                    <button onClick={handleLogOut} style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' hover:scale-103 p-1 sm:p-2 sm:px-2 md:px-4 rounded bg-white text-white font-semibold shadow-2xl shadow-black'>Log Out</button>
                </div>
            </div >
        </div>
    )
}

export default AdminHeader