import React, { useEffect, useState } from 'react'
import { faArrowRightFromBracket, faMagnifyingGlass, faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import EmployerHeader from '../components/EmployerHeader';
import { allApplicationsApi, allApplicationsByJobIdApi, jobsByEmployerApi } from '../../../services/allApis';


const JobApplications = () => {


    const [jobs, setJobs] = useState([])

    const [applications, setApplications] = useState([])



    const getJobs = async (mail) => {

        const body = {
            mail
        }

        const result = await jobsByEmployerApi(body)
        console.log(result);

        setJobs(result.data)


    }

    const getApplications = async (t) => {

        const reqHeader = {
            'Authorization': `Bearer ${t}`
        }

        const result = await allApplicationsApi(reqHeader)
        //console.log(result);
        if (result.status == 200) {

            //const a = result.data.map(item => item.jobId)

            setApplications(result.data)

        }

    }
    console.log(applications);

    const handleCount=(id)=>{

        const a=applications.filter(item=>item.jobId==id && item.status.includes("approved"))
        //console.log(a);
        
        return a.length

    }


    useEffect(() => {

        const mail = sessionStorage.getItem('email')
        const token = sessionStorage.getItem('token')
        getJobs(mail)
        getApplications(token)

    }, [])


    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <EmployerHeader />


            <div className=' w-full h-full grid px-5 gap-2'>
                <div className=' bg-white rounded-2xl mt-3 mb-4'>
                    <div className=' pb-5'>
                        <div className='p-5 flex items-center gap-5'>

                            <h1 id='he' className=' font-semibold text-2xl'>Applications Received For Jobs</h1>
                        </div>

                        {/* <div className=' pb-5 px-5 flex justify-center items-center'>
                            <input type="text" className=' bg-white border border-blue-300 rounded-l-lg p-1 px-2' placeholder='Job Title' />
                            <button className='text-white border border-blue-900 rounded-r-lg px-3 py-1 bg-blue-900 hover:scale-102'>Search <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div> */}

                        <div className=' grid lg:grid-cols-2 px-5 gap-5'>
                            {jobs.length > 0 &&

                                jobs.map((job, index) => (

                                    <div key={index} className='border border-blue-400 rounded-xl h-full p-5'>
                                        <div className=' bg-blue-300 w-fit px-4 p-1 rounded-xl mb-3'>
                                            <h1 id='he' className=' font-semibold'>Applications Received : <span className=' font-bold text-xl'>{handleCount(job?._id)}</span></h1>
                                        </div>
                                        <div>
                                            <h1 id='pa' className=' text-lg font-semibold'>{job?.jobTitle}</h1>
                                            <h1 id='pa' className=' text-gray-500 mb-2'>{job?.company}</h1>
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

                                        <div>
                                            <p id='pa' className=' text-gray-500'>{job?.jobType}</p>
                                        </div>

                                        <div className=' mt-3'>
                                            <Link to={`/ViewApplication/${job._id}`}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>view <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
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

export default JobApplications