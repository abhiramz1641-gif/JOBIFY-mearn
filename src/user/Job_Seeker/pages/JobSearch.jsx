import React, { useEffect, useEffectEvent, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { faArrowRightFromBracket, faArrowUpRightFromSquare, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JobFilter from '../components/JobFilter'
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { getUserApi, jobsApi } from '../../../services/allApis'

const JobSearch = () => {


    const [email, setEmail] = useState('')

    const [userDetails, setUserDetails] = useState({})

    const [allJobs, setAllJobs] = useState([])

    const [jobArray, setJobArray] = useState([])

    const [filter, setFilter] = useState(false)

    const [filterDetails, setFilterDetails] = useState({

        fullTime: 0,
        internship: 0,
        contract: 0,
        freelance: 0,
        design: 0,
        developer: 0,
        marketing: 0,
        sales: 0,
        management: 0,
        finance: 0,
        engineer: 0,
        salary: 50000,
        experience: ''

    })

    console.log(allJobs);

    const handleFilter = () => {

        const keys = Object.keys(filterDetails)

        //console.log(keys);

        let a = []

        for (let key of keys) {

            //console.log(key);

            if (key != 'salary' && key != 'experience') {

                if (filterDetails[key] == 1) {

                    //console.log(key);

                    if (key == 'fullTime') {

                        const array = jobArray.filter(item => item.jobType == 'full-time')
                        a = [...a, ...array]

                    }
                    if (key == 'internship') {

                        const array = jobArray.filter(item => item.jobType == 'internship')
                        a = [...a, ...array]

                    }
                    if (key == 'contract') {

                        const array = jobArray.filter(item => item.jobType == 'contract')
                        a = [...a, ...array]

                    }
                    if (key == 'freelance') {

                        const array = jobArray.filter(item => item.jobType == 'freelance')
                        a = [...a, ...array]

                    }
                    if (key == 'developer') {

                        const array = jobArray.filter(item => item.jobTitle.toLowerCase().includes('developer'))
                        a = [...a, ...array]

                    }
                    if (key == 'marketing') {

                        const array = jobArray.filter(item => item.jobTitle.toLowerCase().includes('marketing'))
                        a = [...a, ...array]

                    }
                    if (key == 'sales') {

                        const array = jobArray.filter(item => item.jobTitle.toLowerCase().includes('sales'))
                        a = [...a, ...array]

                    }
                    if (key == 'management') {

                        const array = jobArray.filter(item => item.jobTitle.toLowerCase().includes('management'))
                        a = [...a, ...array]

                    }
                    if (key == 'finance') {

                        const array = jobArray.filter(item => item.jobTitle.toLowerCase().includes('finance'))
                        a = [...a, ...array]

                    }
                    if (key == 'engineer') {

                        const array = jobArray.filter(item => item.jobTitle.toLowerCase().includes('engineer'))
                        a = [...a, ...array]

                    }
                }

            }
            if (key == 'experience') {

                const e = filterDetails.experience
                console.log(e);
                if (e == 1) {

                    const array = jobArray.filter(item => item.experience <= 1)
                    a = [...a, ...array]

                } else if (e == 2) {

                    const array = jobArray.filter(item => item.experience >= 1 && item.experience <= 2)
                    a = [...a, ...array]
                    console.log(a);

                } else if (e == 3) {

                    const array = jobArray.filter(item => item.experience >= 2 && item.experience <= 5)
                    a = [...a, ...array]
                    console.log(a);

                } else if (e == 5) {

                    const array = jobArray.filter(item => item.experience >= 5)
                    a = [...a, ...array]
                    console.log(a);

                }

            }
            if (key == 'salary') {

                const s = filterDetails.salary

                const array = jobArray.filter(item => item.salary >= s)
                a = [...a, ...array]
                console.log(a);

            }

        }
        if (a.length == 0) {
            setAllJobs(jobArray)
        } else {
            // removing duplicates and assigning to array
            const unique = Array.from(new Map(a.map(item => [item._id, item])).values());
            setAllJobs(unique);
        }

    }

    const getUserData = async (mail) => {

        const mailId = {
            email: mail
        }
        console.log(mailId);


        const result = await getUserApi(mailId)

        console.log(result.data.existingUser);

        setUserDetails(result.data.existingUser)


    }

    const handleScore = (e, s) => {


        const je=e
        const js=s

        const ue=userDetails.bio.experience
        const us=userDetails.bio.skills

        const total=je+js.length
        console.log(total);

        if(ue>=e){
            var es=100
        }else{
            var es=(ue/je)*100
        }

        const ms=js.filter(jss=>us.some(uss=>uss.toLowerCase()==jss.toLowerCase()))
        
        const ss=(ms.length/js.length)*100

        const score=(es*0.4) + (ss*0.6)

        const value=Math.round(score)
            
        return value
    }

    //console.log(filterDetails);

    const getjobs = async () => {

        const result = await jobsApi()
        //console.log(result.data);
        setAllJobs(result.data)
        setJobArray(result.data)

    }

    useEffect(() => {

        handleFilter()

    }, [filterDetails])

    useEffect(() => {

        getjobs()

        const mail = sessionStorage.getItem('email')
        setEmail(mail)
        getUserData(mail)

    }, [])

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
                        <JobFilter filterDetails={filterDetails} setFilterDetails={setFilterDetails} />

                        <button onClick={() => setFilter(false)} className="pt-5">
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </motion.div>
                }
            </AnimatePresence>
            <div className=' w-full h-full grid md:grid-cols-[1fr_3fr] px-5 gap-2'>

                <div className=' hidden md:block' >
                    <JobFilter filterDetails={filterDetails} setFilterDetails={setFilterDetails} />

                </div>
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

                            {/* <div className='border border-blue-400 rounded-xl h-full p-5'>
                                <div className=' flex justify-between items-center'>
                                    <div>
                                        <h1 id='pa' className=' text-lg font-semibold'>Senior Frontend Developer</h1>
                                        <h1 id='pa' className=' text-gray-500 mb-2'>TechCorp Inc</h1>
                                    </div>
                                    <div>
                                        <Link to={'/jobview'}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
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
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%"
                                            }} className=' flex justify-center items-center bg-white'>{value}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {allJobs.length > 0 &&

                                allJobs.map((job, index) => (

                                    job.status == "approved" &&

                                    <div key={index} className='border border-blue-400 rounded-xl h-full p-5'>
                                        <div className=' flex justify-between items-center'>
                                            <div>
                                                <h1 id='pa' className=' text-lg font-semibold'>{job.jobTitle}</h1>
                                                <h1 id='pa' className=' text-gray-500 mb-2'>{job.company}</h1>
                                            </div>
                                            <div>
                                                <Link to={`/jobview/${job._id}`}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
                                            </div>
                                        </div>

                                        <div className=' flex gap-2 mb-3 flex-wrap'>
                                            {job.skills.map((item, index) => (

                                                <div key={index} className=' bg-blue-100 p-1 px-2 rounded-2xl'>{item}</div>

                                            ))

                                            }

                                        </div>

                                        <div className=' mb-5 flex flex-col gap-1.5'>
                                            <p id='pa'>{job.location}</p>
                                            <p id='pa'>₹{job.salary}</p>
                                            <p id='pa'>{job.experience} year</p>
                                        </div>

                                        <div className=' flex justify-between items-center'>
                                            <div>
                                                <p id='pa' className=' text-gray-500'>{job.jobType}</p>
                                            </div>
                                            <div className=' flex justify-center items-center gap-3'>
                                                <p>Profile Compatibility</p>
                                                <div
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                        borderRadius: "50%",
                                                        background: `conic-gradient(#334ed6 ${handleScore(job.experience, job.skills)}%, #A4B3FF ${handleScore(job.experience, job.skills)}% 100%)`,
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
                                                    }} className=' flex justify-center items-center bg-white'>{handleScore(job.experience, job.skills)}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))




                            }



                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default JobSearch