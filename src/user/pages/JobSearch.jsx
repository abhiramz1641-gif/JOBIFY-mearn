import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import { faArrowRightFromBracket, faArrowUpRightFromSquare, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JobFilter from '../components/JobFilter'
import { AnimatePresence, motion } from "framer-motion";

const JobSearch = () => {

    const value=90


    const [filter, setFilter] = useState(false)

    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <UserHeader />


            <AnimatePresence>
                {filter &&

                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute flex bg-white px-5 items-start border border-blue-900 rounded-r-2xl"
                    >
                        <JobFilter />
                        <button onClick={() => setFilter(false)} className="pt-5">
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </motion.div>
                }
            </AnimatePresence>
            <div className=' w-full h-full grid md:grid-cols-[1fr_3fr] px-5 gap-2'>

                <div className=' hidden md:block' ><JobFilter /></div>
                <div className=' bg-white rounded-2xl mt-3 mb-4'>
                    <div className=' pb-5'>
                        <div className='p-5 flex items-center gap-5'>
                            <div className=' md:hidden'><button onClick={() => setFilter(true)} className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Filters</button></div>
                            <h1 id='he' className=' font-semibold text-2xl'>Recent Job Listing</h1>
                        </div>

                        <div className=' pb-5 px-5 flex justify-center items-center'>
                            <input type="text" className=' bg-white border border-blue-300 rounded-l-lg p-1 px-2' placeholder='Job Title' />
                            <button className='text-white border border-blue-900 rounded-r-lg px-3 py-1 bg-blue-900 hover:scale-102'>Search <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>

                        <div className=' grid lg:grid-cols-2 px-5 gap-5'>

                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                    </div>
                                    <div>
                                        <button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View <FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                                    </div>
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

                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <p id='pa' className=' text-gray-500'>Full-time</p>
                                    </div>
                                    <div className=' flex justify-center items-center gap-3'>
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
                                                width:"40px",
                                                height:"40px",
                                                borderRadius:"50%"
                                                }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                    </div>
                                    <div>
                                        <button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View <FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                                    </div>
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

                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <p id='pa' className=' text-gray-500'>Full-time</p>
                                    </div>
                                    <div className=' flex justify-center items-center gap-3'>
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
                                                width:"40px",
                                                height:"40px",
                                                borderRadius:"50%"
                                                }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                    </div>
                                    <div>
                                        <button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View <FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                                    </div>
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

                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <p id='pa' className=' text-gray-500'>Full-time</p>
                                    </div>
                                    <div className=' flex justify-center items-center gap-3'>
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
                                                width:"40px",
                                                height:"40px",
                                                borderRadius:"50%"
                                                }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                    </div>
                                    <div>
                                        <button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View <FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                                    </div>
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

                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <p id='pa' className=' text-gray-500'>Full-time</p>
                                    </div>
                                    <div className=' flex justify-center items-center gap-3'>
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
                                                width:"40px",
                                                height:"40px",
                                                borderRadius:"50%"
                                                }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
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

export default JobSearch