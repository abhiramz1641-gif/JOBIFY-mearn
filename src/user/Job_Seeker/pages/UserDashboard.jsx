import React, { useState } from 'react'
import Header from '../../../components/Header'
import UserHeader from '../components/UserHeader'
import { faArrowRightFromBracket, faArrowUpRightFromSquare, faBars, faBriefcase, faCalendarWeek, faCross, faFile, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedHamburgerButton from '../components/AnimatedHamburgerButton'
import SidebarUser from '../components/SidebarUser'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'

const UserDashboard = () => {

    const value = 75

    const [menuOpen, setMenuOpen] = useState(false);

    const [medMenyOpen, setMedMenuOpen] = useState(false)

    const handleMedSideBarOpen = () => {

        setMedMenuOpen(true)

    }

    const handleMedSideBarClose = () => {
        setMedMenuOpen(false)
    }

    const handleToggle = (open) => {

        setMenuOpen(open);
        if (open) {
            setMenuOpen(true)
        }
        else {
            setMenuOpen(false)
        }
        console.log("Button is now:", open ? "OPEN" : "CLOSED");

    };

    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>

            <AnimatePresence>
                {
                    medMenyOpen &&
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: "70%", height: "auto", zIndex: 10 }} className=' mt-24 rounded-r-2xl bg-blue-800 p-5 absolute'>

                        <div className=' text-end'>
                            <FontAwesomeIcon onClick={handleMedSideBarClose} icon={faX} className=' text-white text-4xl' />
                        </div>

                        <SidebarUser />
                    </motion.div>
                }
            </AnimatePresence>

            <UserHeader />

            <motion.div layout
                animate={{
                    gridTemplateColumns: menuOpen ? "1fr 3fr" : "0fr 1fr",
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                    layout: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
                }}
                className=' w-full h-full md:grid px-3 sm:px-5'>

                <motion.div
                    layout
                    initial={false}
                    animate={{
                        width: menuOpen ? "auto" : 0,
                        opacity: menuOpen ? 1 : 0,
                        marginRight: menuOpen ? "0.5rem" : 0,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                        layout: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
                    }}
                    className="overflow-hidden hidden md:block"
                >
                    <AnimatePresence mode="wait">
                        {menuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <SidebarUser />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className=' bg-white rounded-2xl mt-3 mb-4 me-2'>

                    <div className=' px-3 sm:px-10 pt-5 pb-5'>
                        <div className=' flex gap-5 justify-between items-center'>
                            <div className=' flex justify-center items-center'>
                                <div className=' hidden md:block'><AnimatedHamburgerButton onToggle={handleToggle} /></div>

                                <div>
                                    <h1 id='he' className=' font-bold text-xl md:text-3xl'>Welcome <span className=' text-2xl md:text-4xl'>Abhiram</span></h1>
                                    <p id='pa' className=' '>Here's what's happening with your job search today.</p>
                                </div>
                            </div>

                            <div className=' hidden md:block'>
                                <Link to={'/jobs'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Apply for Job <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                            </div>

                            {
                                !medMenyOpen &&
                                <div className=' md:hidden'>
                                    <FontAwesomeIcon onClick={handleMedSideBarOpen} icon={faBars} className=' text-4xl' />
                                </div>
                            }

                        </div>
                        <div className=' flex md:hidden justify-center mt-5'>
                            <Link to={'/jobs'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Apply for Job<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                        </div>
                    </div>

                    <div className=' grid md:grid-cols-3 px-3 sm:px-10 gap-10'>
                        <div className=' mt-3 border bg-blue-50 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Application Sent</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>24</h1>
                                <FontAwesomeIcon icon={faFile} className=' text-3xl' />
                            </div>
                        </div>
                        <div className=' mt-3 border bg-amber-50 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Active Jobs</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>159</h1>
                                <FontAwesomeIcon icon={faBriefcase} className=' text-3xl' />
                            </div>
                        </div>
                        <div className=' mt-3 border bg-green-100 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Interviews</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>2</h1>
                                <FontAwesomeIcon icon={faCalendarWeek} className=' text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className=' px-3 sm:px-10 pt-10 pb-5'>
                        <h1 id='he' className=' font-semibold text-2xl'>Recent Job Listing</h1>
                    </div>

                    <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 sm:px-10'>

                        <div className='border border-blue-400 rounded-xl h-full p-5'>
                            <div className=' flex flex-wrap justify-between items-center'>
                                <div>
                                    <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                    <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                </div>
                                <div className=' mb-2'>
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

                            <div className=' flex flex-wrap justify-between items-center'>
                                <div>
                                    <p id='pa' className=' text-gray-500'>Full-time</p>
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
                        </div>
                        <div className='border border-blue-400 rounded-xl h-full p-5'>
                            <div className=' flex flex-wrap justify-between items-center'>
                                <div>
                                    <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                    <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                </div>
                                <div className=' mb-2'>
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

                            <div className=' flex flex-wrap justify-between items-center'>
                                <div>
                                    <p id='pa' className=' text-gray-500'>Full-time</p>
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
                        </div>
                        <div className='border border-blue-400 rounded-xl h-full p-5'>
                            <div className=' flex flex-wrap justify-between items-center'>
                                <div>
                                    <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                    <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                </div>
                                <div className=' mb-2'>
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

                            <div className=' flex flex-wrap justify-between items-center'>
                                <div>
                                    <p id='pa' className=' text-gray-500'>Full-time</p>
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
                        </div>
                        

                    </div>

                    <div className=' py-10 md:py-0  md:my-5 flex justify-center'>
                        <Link to={'/jobs'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View More <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                    </div>

                </div>

            </motion.div>
        </div>

    )

}

export default UserDashboard