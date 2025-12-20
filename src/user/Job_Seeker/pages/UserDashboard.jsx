import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import UserHeader from '../components/UserHeader'
import { faArrowRightFromBracket, faArrowUpRightFromSquare, faBars, faBriefcase, faCalendarWeek, faCross, faFile, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedHamburgerButton from '../components/AnimatedHamburgerButton'
import SidebarUser from '../components/SidebarUser'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'
import ProfileEdit from '../components/ProfileEdit'
import { allApplicationsByUserMailApi, getUserApi, jobsApi } from '../../../services/allApis'
import ResumeScanner from '../../../components/ResumeScanner'

const UserDashboard = () => {



    const value = 75

    const [email, setEmail] = useState('')

    const [token, setToken] = useState('')

    const [preview, setPreview] = useState('')

    const [userDetails, setUserDetails] = useState({})


    const [edit, setEdit] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false);

    const [resumeParsss, setResumeParsss] = useState(false);

    const [medMenyOpen, setMedMenuOpen] = useState(false)

    const [jobArray, setJobArray] = useState([])

    const [applications, setApplications] = useState([])

    const [applicationsAcceptedCount, setApplicationsAccepted] = useState('')





    const handleMedSideBarOpen = () => {

        setMedMenuOpen(true)

    }

    const handleMedSideBarClose = () => {
        setMedMenuOpen(false)
    }

    const handleToggle = (open) => {

        setMenuOpen(open);
        // if (open) {
        //     setMenuOpen(true)
        // }
        // else {
        //     setMenuOpen(false)
        // }
        //console.log("Button is now:", open ? "OPEN" : "CLOSED");

    };

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
            const u = result.data.existingUser

            //console.log(u);

            if (u.bio.title == '' && u.bio.email == '' && u.bio.experience == '' && u.bio.education == '') {
                setResumeParsss(true)
            }
        }

    }

    const getjobs = async (t) => {

        const reqHeader = {
            'Authorization': `Bearer ${t}`
        }

        const result = await jobsApi(reqHeader)
        console.log(result.data);
        setJobArray(result.data)

    }

    const getApplications = async (mail, t) => {

        const body = {

            userMail: mail

        }
        const reqHeader = {
            'Authorization': `Bearer ${t}`
        }

        const result = await allApplicationsByUserMailApi(body, reqHeader)
        console.log(result.data);
        setApplications(result.data)

        const arr = result.data

        const a = arr.filter(item => item.status == "approved-accepted")

        setApplicationsAccepted(a.length)

    }

    const handleScore = (e, s) => {


        const je = e
        const js = s

        const ue = userDetails?.bio?.experience || 0
        const us = userDetails?.bio?.skills

        const total = je + js.length
        //console.log(total);

        if (ue >= e) {
            var es = 100
        } else {
            var es = (ue / je) * 100
        }

        const ms = js?.filter(jss => us?.some(uss => uss?.toLowerCase() == jss?.toLowerCase()))

        const ss = (ms?.length / js?.length) * 100

        const score = (es * 0.4) + (ss * 0.6)

        const value = Math.round(score)

        return value
    }




    useEffect(() => {

        const mail = sessionStorage.getItem('email')
        const token = sessionStorage.getItem('token')
        setToken(token)
        setEmail(mail)
        getUserData(mail, token)
        getjobs(token)
        getApplications(mail, token)

    }, [])





    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            {/* edit modal */}
            {edit &&
                <div id='modal' className='absolute inset-0  items-center flex justify-center '>

                    <ProfileEdit setPreview={setPreview} setEdit={setEdit} userDetails={userDetails} setUserDetails={setUserDetails} />

                </div>

            }


            {/* sidebar in below md size screen */}
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

                        <SidebarUser preview={preview} setEdit={setEdit} userDetails={userDetails} setUserDetails={setUserDetails} />
                    </motion.div>
                }
            </AnimatePresence>

            {/* header componentr */}
            <UserHeader preview={preview} />


            {/* full part under header  */}
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

                {/* sidebar above md size */}
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
                                <SidebarUser preview={preview} setEdit={setEdit} userDetails={userDetails} setUserDetails={setUserDetails} />
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
                                    <h1 id='he' className=' font-bold text-xl md:text-3xl'>Welcome <span className=' text-2xl md:text-4xl'>{userDetails.username}</span></h1>
                                    <p id='pa' className=' '>Here's what's happening with your job search today.</p>
                                </div>
                            </div>

                            <div className=' hidden md:flex justify-center gap-3'>
                                <Link to={'/my-applications'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>My Applications <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                                <Link to={'/jobs'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Apply for Job <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                            </div>

                            {
                                !medMenyOpen &&
                                <div className=' md:hidden'>
                                    <FontAwesomeIcon onClick={handleMedSideBarOpen} icon={faBars} className=' text-4xl' />
                                </div>
                            }

                        </div>
                        <div className=' flex md:hidden justify-center gap-3 mt-5'>
                            <Link to={'/my-applications'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>My Applications<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                            <Link to={'/jobs'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Apply for Job<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                        </div>
                    </div>

                    {/* cards section dashboard */}
                    <div className=' grid md:grid-cols-3 px-3 sm:px-10 gap-10'>
                        <div className=' mt-3 border bg-blue-50 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Application Sent</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>{applications.length}</h1>
                                <FontAwesomeIcon icon={faFile} className=' text-3xl' />
                            </div>
                        </div>
                        <div className=' mt-3 border bg-amber-50 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Active Jobs</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>{jobArray.length}</h1>
                                <FontAwesomeIcon icon={faBriefcase} className=' text-3xl' />
                            </div>
                        </div>
                        <div className=' mt-3 border bg-green-100 border-blue-400 rounded-xl h-full p-5'>
                            <p id='pa' className=' text-xl text-gray-500'>Interviews</p>
                            <div className=' flex justify-between items-center'>
                                <h1 id='he' className=' mt-2 text-2xl font-bold'>{applicationsAcceptedCount}</h1>
                                <FontAwesomeIcon icon={faCalendarWeek} className=' text-3xl' />
                            </div>
                        </div>
                    </div>

                    <div className=' px-3 sm:px-10 pt-10 pb-5'>
                        <h1 id='he' className=' font-semibold text-2xl'>Recent Job Listing</h1>
                    </div>


                    {/* recent 3 jobs posted */}
                    <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 sm:px-10'>
                        {jobArray.length > 0 &&

                            jobArray.map((job, index) => (

                                index < 3 &&

                                <div key={index} className='border border-blue-400 rounded-xl h-full p-5'>
                                    <div className=' flex flex-wrap justify-between items-center'>
                                        <div>
                                            <h1 id='pa' className=' text-lg font-semibold'>{job?.jobTitle}</h1>
                                            <h1 id='pa' className=' text-gray-500 mb-2'>{job?.company}</h1>
                                        </div>
                                        <div className=' mb-2'>
                                            <Link to={`/jobview/${job?._id},${handleScore(job?.experience, job?.skills)}`}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
                                        </div>
                                    </div>

                                    <div className=' flex gap-2 mb-3 flex-wrap'>
                                        {job?.skills?.map((item, index) => (

                                            <div key={index} className=' bg-blue-100 p-1 px-2 rounded-2xl'>{item}</div>

                                        ))

                                        }
                                    </div>

                                    <div className=' mb-5'>
                                        <p id='pa'>{job?.location}</p>
                                        <p id='pa'>₹{job?.salary}</p>
                                        <p id='pa'>{job?.experience} year</p>
                                    </div>

                                    <div className='items-center'>
                                        <div>
                                            <p id='pa' className=' text-gray-500'>{job?.jobType}</p>
                                        </div>
                                    </div>
                                </div>

                            ))

                        }

                    </div>

                    <div className=' py-10 md:py-0  md:my-5 flex justify-center'>
                        <Link to={'/jobs'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View More <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link>
                    </div>

                </div>

            </motion.div>


            {resumeParsss &&
                <div id='modal' className='absolute inset-0  items-center flex justify-center '>

                    <ResumeScanner userDetails={userDetails} setUserDetails={setUserDetails} setResumeParsss={setResumeParsss} />

                </div>
            }


        </div>

    )

}

export default UserDashboard