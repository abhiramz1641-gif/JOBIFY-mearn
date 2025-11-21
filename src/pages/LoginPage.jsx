import React, { useEffect, useState } from 'react'
import DarkVeil from '../components/DarkVeil'
import { FluidTabs } from '../components/FluidTabs'
import { Link } from 'react-router-dom'

const LoginPage = () => {


    const [register, setregister] = useState(false)
    const [user, setUser] = useState(1)


    const handleTab = (tab) => {

        if (tab == "Job Seeker") {
            setUser(1)
        }
        else if (tab == "Employer") {
            setUser(2)
        }
        else
            setUser(3)

    }






    return (
        <div>
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <DarkVeil />
            </div>
            <div className=' px-5 w-full sm:w-2/3 md:w-2/3 lg:w-2/5' style={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)', }}>
                <div className=' w-full glass-card border border-white p-7 sm:p-10 text-white flex flex-col flex-wrap'>
                    <h1 id='he' className=' text-3xl font-bold mb-8'>Welcome to <span className='font-extrabold'>JOBIFY</span></h1>

                    <h1 id='pa' className=' font-semibold mb-2'>How do you plan to use jobify?</h1>
                    <div className=' mb-5'>
                        <FluidTabs
                            tabs={["Job Seeker", "Employer", "Admin"]}
                            onTabChange={(tab, index) => handleTab(tab)}
                        />
                    </div>


                    <h1 id='pa' className=' font-semibold mb-2'>Email</h1>
                    <input type="text" className=' mb-5 bg-white p-2 rounded placeholder-gray-500 text-black' placeholder=' Email Id' />

                    <h1 id='pa' className=' font-semibold mb-2'>Password</h1>
                    <input type='password' className=' mb-2 bg-white p-2 rounded placeholder-gray-500 text-black' placeholder='Password' />

                    {
                        register == true && user != 3 &&
                        <div className=' w-full'>
                            <h1 id='pa' className=' font-semibold mb-2 mt-3'>Confirm Password</h1>
                            <input type='password' className=' w-full mb-5 bg-white p-2 rounded placeholder-gray-500 text-black' placeholder='Confirm Password' />
                        </div>
                    }

                    {!register && <h1 className=' text-end cursor-pointer hover:underline'>Forgot Password?</h1>}


                    {
                        user == 1 ?
                            <div>
                                {
                                    register ?
                                        <Link to={'/userDashboard'}><button style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' mt-6 hover:scale-101 p-2 px-8 rounded w-full text-white font-semibold shadow-2xl shadow-black'>Create Job Seeker Account</button></Link>

                                        :

                                        <Link to={'/userDashboard'}><button style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' mt-6 hover:scale-101 p-2 px-8 rounded w-full text-white font-semibold shadow-2xl shadow-black'>Sign In as Job Seeker</button></Link>

                                }
                            </div>

                            : user == 2 ?
                                <div>
                                    {
                                        register ?
                                            <Link to={'/EmployerDashboard'}><button style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' mt-6 hover:scale-101 p-2 px-8 rounded w-full text-white font-semibold shadow-2xl shadow-black'>Create Employer Account</button></Link>

                                            :

                                            <Link to={'/EmployerDashboard'}><button style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' mt-6 hover:scale-101 p-2 px-8 rounded w-full text-white font-semibold shadow-2xl shadow-black'>Sign In as Employer</button></Link>

                                    }
                                </div>

                                :

                                <div>

                                    <Link to={'/AdminDashboard'}><button style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' mt-6 hover:scale-101 p-2 px-8 rounded w-full text-white font-semibold shadow-2xl shadow-black'>Sign In as Admin</button></Link>

                                </div>
                    }




                    {user != 3 &&

                        (
                            register ?

                                <h1 className=' mt-5 text-center'>Already have an account? <span onClick={() => setregister(false)} className=' text-blue-400 cursor-pointer hover:underline'>Sign In</span></h1>
                                :
                                <h1 className=' mt-5 text-center'>Dont have an account? <span onClick={() => setregister(true)} className=' text-blue-400 cursor-pointer hover:underline'>Sign Up</span></h1>
                        )

                    }

                </div>
            </div>


        </div>
    )
}

export default LoginPage