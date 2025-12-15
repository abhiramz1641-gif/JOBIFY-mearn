import React, { useEffect, useState } from 'react'
import { faMagnifyingGlass, faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import EmployerHeader from '../components/EmployerHeader';
import { deleteJobApi, jobsApi, jobsPostedApi } from '../../../services/allApis';
import toast, { Toaster } from 'react-hot-toast';
const JobPosted = () => {

    const [jobs, setJobs] = useState([])

    const [token, setToken] = useState('')


    const getPostedJobs = async (t) => {

        const email = sessionStorage.getItem("email")
        //console.log(email);
        const mail = {
            email: email
        }
        //console.log(mail);
        const reqHeader = {
            'Authorization': `Bearer ${t}`
        }

        const result = await jobsPostedApi(mail, reqHeader)
        console.log(result);
        if (result.status === 200) {

            const postedJobs = result.data
            setJobs(postedJobs)

        }

    }

    const deleteJob = async (id) => {

        const body = {
            id: id
        }
        //console.log(mail);
        const reqHeader = {
            'Authorization': `Bearer ${token}`
        }

        const result = await deleteJobApi(body, reqHeader)

        if (result.status == 200) {

            toast.success('Job deleted.')
            getPostedJobs(token)

        }else{

            toast.error('Something went wrong.')

        }

    }

    const handleDelete = (id) => {

        toast((t) => (
            <span>
                Confirm <b>Delete</b>
                <button className=' ms-2 bg-red-600 text-white px-2 p-1 rounded hover:scale-102' onClick={()=>{toast.dismiss(t.id);deleteJob(id)}}>
                    Yes
                </button>
            </span>
        ));

    }



    useEffect(() => {

        const token = sessionStorage.getItem('token')
        setToken(token)
        getPostedJobs(token)

    }, [])



    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <EmployerHeader />


            <div className=' w-full h-full grid px-5 gap-2'>
                <div className=' bg-white rounded-2xl mt-3 mb-4'>
                    <div className=' pb-5'>
                        <div className='p-5 flex items-center gap-5'>
                            <h1 id='he' className=' font-semibold text-2xl'>Jobs Posted</h1>
                        </div>

                        {/* <div className=' pb-5 px-5 flex justify-center items-center'>
                            <input type="text" className=' bg-white border border-blue-300 rounded-l-lg p-1 px-2' placeholder='Job Title' />
                            <button className='text-white border border-blue-900 rounded-r-lg px-3 py-1 bg-blue-900 hover:scale-102'>Search <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div> */}

                        <div className=' grid lg:grid-cols-2 px-5 gap-5'>

                            {jobs?.length > 0 &&


                                jobs.map((job, index) => (

                                    <div key={index} className='border border-blue-400 rounded-xl h-full p-3 sm:p-5'>
                                        <div className=' flex justify-between items-center w-full'>
                                            <div>
                                                <h1 id='pa' className=' text-lg font-semibold'>{job.jobTitle}</h1>
                                                <h1 id='pa' className=' text-gray-500 mb-2'>{job.company}</h1>
                                            </div>
                                            <div className=' flex flex-wrap gap-2 justify-end'>
                                                <button onClick={() => handleDelete(job?._id)} className=' border border-red-600 text-red-600 p-2 px-4.5 rounded hover:scale-101 hover:bg-red-600 hover:text-white '>Delete</button>
                                                <Link to={`/JobEdit/${job._id}`} ><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Edit <FontAwesomeIcon icon={faPenToSquare} /></button></Link>
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
                    </div>

                </div>
            </div>

            {/* hot toast */}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </div>
    )
}

export default JobPosted