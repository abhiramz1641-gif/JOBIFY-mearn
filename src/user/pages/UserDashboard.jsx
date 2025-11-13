import React from 'react'
import Header from '../../components/Header'
import UserHeader from '../components/UserHeader'

const UserDashboard = () => {
    return (
        <div style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }}>
            <UserHeader />

            <div className=' w-full h-full grid grid-cols-[1fr_3fr]'>

                <div className=' bg-blue-300 h-full py-5'>
                    <div className=' flex flex-col items-center gap-2'>
                        <img style={{ height: "100px", width: "100px", borderRadius: "50px" }} src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt="" />
                        <h1 id='he' className=' text-2xl font-semibold'>Abhiram</h1>
                        <h1 id='he' className=' text-xl'>MERN Stack Developer</h1>
                    </div>
                    <div className=' flex flex-col gap-2 text-center'>
                        <p id='pa'>abhiram2003@gmail.com</p>
                        <p id='pa'>5 years React Developer</p>
                        <p id='pa'>Btech Graduate</p>
                    </div>
                    <div className=' flex justify-center'>
                        <button className=' mt-3 border p-1 bg-white rounded-lg'>Edit Profile</button>
                    </div>                
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}

export default UserDashboard