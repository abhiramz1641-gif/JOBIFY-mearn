import React, { useState } from 'react'
import { faArrowRightFromBracket, faMagnifyingGlass, faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import EmployerHeader from '../components/EmployerHeader';


const ViewApplication = () => {



    const value = 93


    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <EmployerHeader />


            <div className=' w-full h-full grid px-5 gap-2'>
                <div className=' bg-white rounded-2xl mt-3 mb-4'>
                    <div className=' pb-5'>
                        <div className='p-5 flex items-center gap-5'>

                            <h1 id='he' className=' font-semibold text-2xl'>Applications</h1>
                        </div>



                        <div className=' grid lg:grid-cols-2 px-5 gap-5'>

                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-start'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold mb-2'>Name of applicant</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>Email ID</h1>
                                        <p id='pa' className=' text-gray-500'>Phone Number</p>
                                    </div>
                                    <div className=' flex flex-wrap justify-center items-center gap-3'>
                                        <p>Profile Compatibility</p>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                background: `conic-gradient(#334ed6 ${value}%, #A4B3FF ${value}% 100%)`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "15px",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            <span style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex mt-5  justify-between items-center'>

                                    <div className=' flex items-center'>
                                        <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a  href="" download="">view resume</a></span>
                                    </div>
                                    <div className=' flex flex-wrap gap-3'>
                                        <button className=' p-1 px-2 border border-blue-900 rounded hover:scale-102'>Reject</button>
                                        <button className=' p-1 px-2 border border-blue-900 bg-blue-900 text-white rounded hover:scale-102'>Accept</button>
                                    </div>

                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-start'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold'>Name of applicant</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>Email ID</h1>
                                        <p id='pa' className=' text-gray-500'>Phone Number</p>
                                    </div>
                                    <div className=' flex flex-wrap justify-center items-center gap-3'>
                                        <p>Profile Compatibility</p>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                background: `conic-gradient(#334ed6 ${value}%, #A4B3FF ${value}% 100%)`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "15px",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            <span style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex mt-5  justify-between items-center'>

                                    <div className=' flex items-center'>
                                        <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a  href="" download="">view resume</a></span>
                                    </div>
                                    <div className=' flex flex-wrap gap-3'>
                                        <button className=' p-1 px-2 border border-blue-900 rounded hover:scale-102'>Reject</button>
                                        <button className=' p-1 px-2 border border-blue-900 bg-blue-900 text-white rounded hover:scale-102'>Accept</button>
                                    </div>

                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-start'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold'>Name of applicant</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>Email ID</h1>
                                        <p id='pa' className=' text-gray-500'>Phone Number</p>
                                    </div>
                                    <div className=' flex flex-wrap justify-center items-center gap-3'>
                                        <p>Profile Compatibility</p>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                background: `conic-gradient(#334ed6 ${value}%, #A4B3FF ${value}% 100%)`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "15px",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            <span style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex mt-5  justify-between items-center'>

                                    <div className=' flex items-center'>
                                        <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a  href="" download="">view resume</a></span>
                                    </div>
                                    <div className=' flex flex-wrap gap-3'>
                                        <button className=' p-1 px-2 border border-blue-900 rounded hover:scale-102'>Reject</button>
                                        <button className=' p-1 px-2 border border-blue-900 bg-blue-900 text-white rounded hover:scale-102'>Accept</button>
                                    </div>

                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-start'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold'>Name of applicant</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>Email ID</h1>
                                        <p id='pa' className=' text-gray-500'>Phone Number</p>
                                    </div>
                                    <div className=' flex flex-wrap justify-center items-center gap-3'>
                                        <p>Profile Compatibility</p>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                background: `conic-gradient(#334ed6 ${value}%, #A4B3FF ${value}% 100%)`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "15px",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            <span style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex mt-5  justify-between items-center'>

                                    <div className=' flex items-center'>
                                        <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a  href="" download="">view resume</a></span>
                                    </div>
                                    <div className=' flex flex-wrap gap-3'>
                                        <button className=' p-1 px-2 border border-blue-900 rounded hover:scale-102'>Reject</button>
                                        <button className=' p-1 px-2 border border-blue-900 bg-blue-900 text-white rounded hover:scale-102'>Accept</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ViewApplication