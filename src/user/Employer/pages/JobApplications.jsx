import React, { useState } from 'react'
import { faArrowRightFromBracket, faMagnifyingGlass, faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import EmployerHeader from '../components/EmployerHeader';


const JobApplications = () => {
    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <EmployerHeader />


            <div className=' w-full h-full grid px-5 gap-2'>
                <div className=' bg-white rounded-2xl mt-3 mb-4'>
                    <div className=' pb-5'>
                        <div className='p-5 flex items-center gap-5'>

                            <h1 id='he' className=' font-semibold text-2xl'>Applications Received For Jobs</h1>
                        </div>

                        <div className=' pb-5 px-5 flex justify-center items-center'>
                            <input type="text" className=' bg-white border border-blue-300 rounded-l-lg p-1 px-2' placeholder='Job Title' />
                            <button className='text-white border border-blue-900 rounded-r-lg px-3 py-1 bg-blue-900 hover:scale-102'>Search <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>

                        <div className=' grid lg:grid-cols-2 px-5 gap-5'>

                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div>
                                    <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                    <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                </div>

                                <div className=' flex gap-2 mb-3 flex-wrap'>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>React</div>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Type Script</div>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Tailwind</div>
                                </div>

                                <div className=' mb-5'>
                                    <p id='pa'>San Francisco, CA</p>
                                    <p id='pa'>$120k - $160k</p>
                                </div>

                                <div>
                                    <p id='pa' className=' text-gray-500'>Full-time</p>
                                </div>

                                <div className=' flex flex-wrap justify-between items-center'>
                                    <h1 id='pa' className=' font-bold text-lg'>Applicants : 24</h1>
                                    <Link to={'/ViewApplication'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>view <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div>
                                    <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                    <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                </div>

                                <div className=' flex gap-2 mb-3 flex-wrap'>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>React</div>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Type Script</div>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Tailwind</div>
                                </div>

                                <div className=' mb-5'>
                                    <p id='pa'>San Francisco, CA</p>
                                    <p id='pa'>$120k - $160k</p>
                                </div>

                                <div>
                                    <p id='pa' className=' text-gray-500'>Full-time</p>
                                </div>

                                <div className=' flex flex-wrap justify-between items-center'>
                                    <h1 id='pa' className=' font-bold text-lg'>Applicants : 24</h1>
                                    <Link to={'/ViewApplication'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>view <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div>
                                    <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                    <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                </div>

                                <div className=' flex gap-2 mb-3 flex-wrap'>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>React</div>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Type Script</div>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Tailwind</div>
                                </div>

                                <div className=' mb-5'>
                                    <p id='pa'>San Francisco, CA</p>
                                    <p id='pa'>$120k - $160k</p>
                                </div>

                                <div>
                                    <p id='pa' className=' text-gray-500'>Full-time</p>
                                </div>

                                <div className=' flex flex-wrap justify-between items-center'>
                                    <h1 id='pa' className=' font-bold text-lg'>Applicants : 24</h1>
                                    <Link to={'/ViewApplication'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>view <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div>
                                    <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                    <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                </div>

                                <div className=' flex gap-2 mb-3 flex-wrap'>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>React</div>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Type Script</div>
                                    <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Tailwind</div>
                                </div>

                                <div className=' mb-5'>
                                    <p id='pa'>San Francisco, CA</p>
                                    <p id='pa'>$120k - $160k</p>
                                </div>

                                <div>
                                    <p id='pa' className=' text-gray-500'>Full-time</p>
                                </div>

                                <div className=' flex flex-wrap justify-between items-center'>
                                    <h1 id='pa' className=' font-bold text-lg'>Applicants : 24</h1>
                                    <Link to={'/ViewApplication'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>view <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
                                </div>
                            </div>
                            

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default JobApplications