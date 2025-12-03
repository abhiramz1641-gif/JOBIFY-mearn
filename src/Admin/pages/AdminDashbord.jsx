import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import AnimatedHamburgerButton from '../components/AnimatedHamburgerButton';
import { faBars, faBriefcase, faFile, faL, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SidebarAdmin from '../components/SidebarAdmin';
import AdminHeader from '../components/AdminHeader';
import AdminProfileEdit from '../components/AdminProfileEdit';
import { adminJobApprovalApi, jobsApi } from '../../services/allApis';
const AdminDashbord = () => {


    const [edit, setEdit] = useState(false)


    const [application, setApplications] = useState(false)
    const [jobs, setJobs] = useState(true)

    const [menuOpen, setMenuOpen] = useState(false);

    const [medMenyOpen, setMedMenuOpen] = useState(false)

    const [allJobs, setAllJobs] = useState([])


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


    const handleJobs = () => {
        setJobs(true)
        setApplications(false)
    }

    const handleApplication = () => {
        setJobs(false)
        setApplications(true)
    }

    const handleApprove = async (id) => {

        const result = await adminJobApprovalApi({ id })
        setAllJobs(result.data)

    }

    const getjobs = async () => {

        const result = await jobsApi()
        console.log(result.data);
        setAllJobs(result.data)

    }


    useEffect(() => {

        getjobs()

    }, [allJobs])



    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            {/* edit modal */}
            {edit &&
                <div id='modal' className='absolute inset-0  items-center flex justify-center '>

                    <AdminProfileEdit setEdit={setEdit} />

                </div>

            }


            {/* sidebar below md screen */}
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

                        <SidebarAdmin setEdit={setEdit} />
                    </motion.div>
                }
            </AnimatePresence>

            <AdminHeader />

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

                {/* sidebar above md screen */}
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
                                <SidebarAdmin setEdit={setEdit} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className=' bg-white rounded-2xl mt-3 mb-4 pb-10 me-2'>

                    {/* heading */}
                    <div className=' px-3 sm:px-10 pt-5 pb-5'>
                        <div className=' flex gap-5 justify-between items-center'>
                            <div className=' flex justify-center items-center'>
                                <div className=' hidden md:block'><AnimatedHamburgerButton onToggle={handleToggle} /></div>

                                <div>
                                    <h1 id='he' className=' font-bold text-xl md:text-3xl'>Welcome <span className=' text-2xl md:text-4xl'>Admin</span></h1>
                                </div>
                            </div>



                            {
                                !medMenyOpen &&
                                <div className=' md:hidden'>
                                    <FontAwesomeIcon onClick={handleMedSideBarOpen} icon={faBars} className=' text-4xl' />
                                </div>
                            }

                        </div>
                    </div>

                    {/* 2 cards */}
                    <div className=' grid md:grid-cols-2 px-3 sm:px-10 gap-10'>
                        <div className=' mt-3 border bg-blue-50 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Jobs Posted</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>4</h1>
                                <FontAwesomeIcon icon={faBriefcase} className=' text-3xl' />
                            </div>
                        </div>
                        <div className=' mt-3 border bg-amber-50 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Applications</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>54</h1>
                                <FontAwesomeIcon icon={faFile} className=' text-3xl' />
                            </div>
                        </div>
                    </div>


                    <div className=' mt-10 flex justify-center items-center gap-3'>
                        <button onClick={handleJobs} className={jobs ? 'px-3 py-3 border rounded-t-lg border-b-blue-900 bg-blue-900 text-white' : 'px-2 py-3 border rounded-t-lg border-b-white'}>Jobs Posted</button>
                        <button onClick={handleApplication} className={application ? 'px-3 py-3 border rounded-t-lg border-b-blue-900 bg-blue-900 text-white' : 'px-2 py-3 border rounded-t-lg border-b-white'}>Applications</button>
                    </div>




                    {/* jobs posted */}
                    {jobs &&

                        allJobs.length > 0 &&



                        <div className=' bg-blue-900 mx-5 rounded-2xl py-5 md:py-10 grid lg:grid-cols-2 px-5 md:px-10 gap-5'>
                            {
                                allJobs.map((job, index) => (

                                    <div className='border bg-white border-blue-400 rounded-xl h-full p-5'>
                                        <div>
                                            <h1 id='pa' className=' text-lg font-semibold'>{job.jobTitle}</h1>
                                            <h1 id='pa' className=' text-gray-500 mb-2'>{job.company}</h1>
                                        </div>

                                        <div className=' flex gap-2 mb-3 flex-wrap'>
                                            {job.skills.map(item => (

                                                <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>{item}</div>

                                            ))

                                            }
                                        </div>

                                        <div className=' mb-5'>
                                            <p id='pa'>{job.location}</p>
                                            <p id='pa'>${job.salary}</p>
                                        </div>

                                        <div>
                                            <p id='pa' className=' text-gray-500'>{job.jobType}</p>
                                        </div>

                                        <div className=' flex flex-wrap gap-3 items-center mt-5'>
                                            {job.status == "approved" ?
                                                <span className=' px-3 p-1 border  border-green-600 bg-green-600 text-white rounded hover:scale-102'>Approved</span>
                                                :
                                                <button onClick={() => handleApprove(job._id)} className=' px-3 p-1 border border-green-600 text-green-600 rounded hover:scale-102'>Approve</button>
                                            }
                                        </div>
                                    </div>

                                ))
                            }

                        </div>


                    }

                    {/* applications */}
                    {application &&
                        <div className=' bg-blue-900 grid lg:grid-cols-2 mx-5 rounded-2xl px-5 md:px-10 gap-5 py-5 md:py-10'>
                            <div className='border bg-white border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-start'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold mb-2'>Name of applicant</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>Email ID</h1>
                                        <p id='pa' className=' text-gray-500'>Phone Number</p>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-3'>
                                    <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a href="" download="">view resume</a></span>
                                </div>

                                <div className=' flex flex-wrap gap-3 items-center mt-5'>
                                    <button className=' px-3 p-1 border border-red-600 text-red-600 rounded hover:scale-102'>Reject</button>
                                    <button className=' px-3 p-1 border border-green-600 bg-green-600 text-white rounded hover:scale-102'>Approve</button>
                                </div>
                            </div>
                            <div className='border bg-white border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-start'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold mb-2'>Name of applicant</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>Email ID</h1>
                                        <p id='pa' className=' text-gray-500'>Phone Number</p>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-3'>
                                    <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a href="" download="">view resume</a></span>
                                </div>

                                <div className=' flex flex-wrap gap-3 items-center mt-5'>
                                    <button className=' px-3 p-1 border border-red-600 text-red-600 rounded hover:scale-102'>Reject</button>
                                    <button className=' px-3 p-1 border border-green-600 bg-green-600 text-white rounded hover:scale-102'>Approve</button>
                                </div>
                            </div>
                            <div className='border bg-white border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-start'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold mb-2'>Name of applicant</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>Email ID</h1>
                                        <p id='pa' className=' text-gray-500'>Phone Number</p>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-3'>
                                    <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a href="" download="">view resume</a></span>
                                </div>

                                <div className=' flex flex-wrap gap-3 items-center mt-5'>
                                    <button className=' px-3 p-1 border border-red-600 text-red-600 rounded hover:scale-102'>Reject</button>
                                    <button className=' px-3 p-1 border border-green-600 bg-green-600 text-white rounded hover:scale-102'>Approve</button>
                                </div>
                            </div>
                            <div className='border bg-white border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-start'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold mb-2'>Name of applicant</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>Email ID</h1>
                                        <p id='pa' className=' text-gray-500'>Phone Number</p>
                                    </div>
                                </div>
                                <div className=' flex items-center mt-3'>
                                    <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a href="" download="">view resume</a></span>
                                </div>

                                <div className=' flex flex-wrap gap-3 items-center mt-5'>
                                    <button className=' px-3 p-1 border border-red-600 text-red-600 rounded hover:scale-102'>Reject</button>
                                    <button className=' px-3 p-1 border border-green-600 bg-green-600 text-white rounded hover:scale-102'>Approve</button>
                                </div>
                            </div>
                        </div>
                    }

                </div>

            </motion.div>
        </div>
    )
}

export default AdminDashbord