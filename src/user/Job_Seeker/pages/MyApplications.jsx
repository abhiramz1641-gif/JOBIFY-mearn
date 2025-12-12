import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { allApplicationsByUserMailApi, jobsByIdApi } from '../../../services/allApis'

const MyApplications = () => {


    const [applications, setApplications] = useState([])

    const [jobModal, setJobModal] = useState(false)

    const [job, setJob] = useState({})


    const getApplications = async (mail,t) => {

        const body = {

            userMail: mail

        }
        const reqHeader={
            'Authorization':`Bearer ${t}`
        }

        const result = await allApplicationsByUserMailApi(body,reqHeader)
        console.log(result.data);
        setApplications(result.data)


    }


    const getJobDetail = async (id) => {

        const body = {

            id

        }

        const result = await jobsByIdApi(body)
        console.log(result);
        if (result.status == 200) {

            setJob(result.data)

            setJobModal(true)

        }


    }



    useEffect(() => {

        const mail = sessionStorage.getItem('email')
        const token = sessionStorage.getItem('token')

        getApplications(mail,token)

    }, [])



    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <UserHeader />


            {jobModal &&
                <div id='modal' className='absolute inset-0  items-center flex justify-center '>

                    <div style={{ overflowX: "hidden", overflowY: "auto", zIndex: "50" }} className=' border h-fit sm:w-1/2 w-6/7 rounded-2xl bg-white'>


                        <div className='border border-blue-400 rounded-xl h-full p-5 md:p-10 bg-white'>

                            <div className=' flex justify-end'>

                                <button onClick={() => setJobModal(false)}>
                                    <FontAwesomeIcon className='font-bold text-2xl' icon={faX} />
                                </button>

                            </div>

                            <div className=' flex justify-between items-center'>
                                <div>
                                    <h1 id='pa' className=' text-2xl font-bold'>{job?.jobTitle}</h1>
                                    <h1 id='pa' className=' text-gray-500 mb-2 font-bold text-xl'>{job?.company}</h1>
                                </div>
                            </div>

                            <div className=' my-3'>
                                <h1 id='pa' className=' text-lg font-semibold'>About The Job</h1>

                                <p className=' text-xs sm:text-sm md:text-base'>
                                    {job?.description}
                                </p>
                            </div>

                            <div className=' flex gap-2 mb-3 flex-wrap'>
                                {job?.skills?.map((item, index) => (

                                    <div key={index} className=' bg-blue-100 p-1 px-2 rounded-2xl'>{item}</div>

                                ))

                                }
                            </div>

                            <div className=' mb-5 flex flex-col gap-1.5'>
                                <p id='pa'>{job.location}</p>
                                <p id='pa'>₹{job.salary}</p>
                                <p id='pa'>{job.experience} year+</p>
                            </div>

                            <div>
                                <p id='pa' className=' text-gray-500'>{job?.jobType}</p>
                            </div>



                        </div>


                    </div>

                </div>
            }


            <div className=' w-full h-full grid px-5 gap-2'>
                <div className=' bg-white rounded-2xl mt-3 mb-4'>
                    <div className=' pb-5'>
                        <div className='p-5 flex items-center gap-5'>

                            <h1 id='he' className=' font-semibold text-2xl'>Applications Received For Jobs</h1>
                        </div>

                        <div className=' grid lg:grid-cols-2 px-5 gap-5'>


                            {applications.length > 0 &&


                                applications.map((app, index) => (

                                    <div key={index} className='border border-blue-400 rounded-xl h-full p-5'>
                                        <div className=' mb-2'>
                                            <h1 id='pa' className=' text-lg font-semibold'>Compatibility score</h1>
                                        </div>

                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                background: `conic-gradient(#334ed6 ${app?.score}%, #A4B3FF ${app?.score}% 100%)`,
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
                                            }} className=' flex justify-center items-center bg-white'>{app?.score}%</span>
                                        </div>

                                        <div className=' mt-5'>
                                            <h1 id='pa' className=' text-lg font-semibold'>Status</h1>

                                            <div className=' mt-2 flex justify-between'>
                                                {app?.status == "approved-accepted" ?

                                                    <span className=' px-3 p-1 border  border-green-600 bg-white text-green-600 rounded hover:scale-102'>Accepted</span>

                                                    : app?.status == "approved-rejected" ?

                                                        <span className=' px-3 p-1 border  border-red-600 bg-white text-red-600 rounded hover:scale-102'>Rejected</span>

                                                        :
                                                        <span className=' px-3 p-1 border  border-blue-600 bg-white text-blue-600 rounded hover:scale-102'>Pending</span>

                                                }
                                                <div>
                                                    <button onClick={() => getJobDetail(app.jobId)} className=' px-3 p-1 border border-blue-900 bg-blue-900 text-white rounded hover:scale-102'>Job Detail</button>
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

export default MyApplications