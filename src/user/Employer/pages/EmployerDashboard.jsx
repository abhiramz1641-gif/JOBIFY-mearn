import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import AnimatedHamburgerButton from '../../Job_Seeker/components/AnimatedHamburgerButton';
import { faArrowRightFromBracket, faArrowUpRightFromSquare, faBars, faBriefcase, faCalendarWeek, faFile, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SidebarEmployer from '../components/SidebarEmployer';
import EmployerHeader from '../components/EmployerHeader';
import EmployerProfileEdit from '../components/EmployerProfileEdit';
import { getUserApi, jobsPostedApi } from '../../../services/allApis';

const EmployerDashboard = () => {


    const [edit, setEdit] = useState(false)

    const [email, setEmail] = useState('')

    const [userDetails, setUserDetails] = useState({})

    const [menuOpen, setMenuOpen] = useState(false);

    const [medMenyOpen, setMedMenuOpen] = useState(false)

    const [jobs, setJobs] = useState([])


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

    const getUserData = async (mail) => {

        const mailId = {
            email: mail
        }
        console.log(mailId);

        const result = await getUserApi(mailId)

        console.log(result.data.existingUser);

        setUserDetails(result.data.existingUser)

    }



    const getPostedJobs = async () => {

        const email = sessionStorage.getItem("email")
        //console.log(email);
        const mail = {
            email: email
        }
        //console.log(mail);

        const result = await jobsPostedApi(mail)
        console.log(result);
        if (result.status === 200) {

            const postedJobs = result.data
            setJobs(postedJobs)

        }

    }




    useEffect(() => {

        const mail = sessionStorage.getItem('email')
        setEmail(mail)
        getUserData(mail)
        getPostedJobs()

    }, [])



    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            {/* edit modal */}
            {edit &&
                <div id='modal' className='absolute inset-0  items-center flex justify-center '>

                    <EmployerProfileEdit setEdit={setEdit} userDetails={userDetails} setUserDetails={setUserDetails} />

                </div>

            }


            {/* sidebar below md screen size */}
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

                        <SidebarEmployer setEdit={setEdit} userDetails={userDetails} setUserDetails={setUserDetails} />
                    </motion.div>
                }
            </AnimatePresence>

            <EmployerHeader />

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
                                <SidebarEmployer setEdit={setEdit} userDetails={userDetails} setUserDetails={setUserDetails} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className=' bg-white rounded-2xl mt-3 mb-4 me-2'>

                    {/* heading and buttons */}
                    <div className=' px-3 sm:px-10 pt-5 pb-5'>
                        <div className=' flex gap-5 justify-between items-center'>
                            <div className=' flex justify-center items-center'>
                                <div className=' hidden md:block'><AnimatedHamburgerButton onToggle={handleToggle} /></div>

                                <div>
                                    <h1 id='he' className=' font-bold text-xl md:text-3xl'>Welcome <span className=' text-2xl md:text-4xl'>{userDetails.username}</span></h1>
                                    <p id='pa' className=' '>Here's what's happening with your job listing today.</p>
                                </div>
                            </div>

                            <div className=' hidden md:flex gap-5'>
                                <Link to={'/jobApplications'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Applications Received <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                                <Link to={'/jobPost'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Post a new Job <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                            </div>

                            {
                                !medMenyOpen &&
                                <div className=' md:hidden'>
                                    <FontAwesomeIcon onClick={handleMedSideBarOpen} icon={faBars} className=' text-4xl' />
                                </div>
                            }

                        </div>
                        <div className=' flex gap-5 flex-wrap md:hidden justify-center mt-5'>
                            <Link to={'/jobApplications'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Applications Received <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                            <Link to={'/jobPost'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Post a new Job <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                        </div>
                    </div>


                    {/* cards of employer */}
                    <div className=' grid md:grid-cols-3 px-3 sm:px-10 gap-10'>
                        <div className=' mt-3 border bg-blue-50 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Jobs Posted</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>{jobs.length}</h1>
                                <FontAwesomeIcon icon={faBriefcase} className=' text-3xl' />
                            </div>
                        </div>
                        <div className=' mt-3 border bg-amber-50 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Applications Received</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>54</h1>
                                <FontAwesomeIcon icon={faFile} className=' text-3xl' />
                            </div>
                        </div>
                        <div className=' mt-3 border bg-green-100 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Interviews Scheduled</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>2</h1>
                                <FontAwesomeIcon icon={faCalendarWeek} className=' text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className=' px-3 sm:px-10 pt-10 pb-5'>
                        <h1 id='he' className=' font-semibold text-2xl'>Jobs Posted By You</h1>
                    </div>

                    {/* jobs posted */}

                    <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 sm:px-10'>


                        {jobs.length > 0 &&

                            jobs.map((job, index) => (

                                index < 3 &&

                                <div key={index} className='border border-blue-400 rounded-xl h-full p-5'>
                                    <div className=' flex justify-between items-center'>
                                        <div>
                                            <h1 id='pa' className=' text-lg font-semibold'>{job.jobTitle}</h1>
                                            <h1 id='pa' className=' text-gray-500 mb-2'>{job.company}</h1>
                                        </div>
                                    </div>

                                    <div className=' flex gap-2 mb-3 flex-wrap'>
                                        {job.skills.map(item => (

                                            <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>{item}</div>

                                        ))

                                        }
                                    </div>

                                    <div className=' mb-5 flex flex-col gap-1.5'>
                                        <p id='pa'>{job.location}</p>
                                        <p id='pa'>${job.salary}</p>
                                        <p id='pa'>{job.experience} year+</p>
                                    </div>

                                    <div>
                                        <p id='pa' className=' text-gray-500'>{job.jobType}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                    <div className=' py-10 md:py-0  md:my-5 flex justify-center'>
                        <Link to={'/JobPosted'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View All <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                    </div>

                </div>

            </motion.div>
        </div>
    )
}

export default EmployerDashboard