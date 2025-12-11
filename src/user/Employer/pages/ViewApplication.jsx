import React, { useEffect, useState } from 'react'
import { faArrowRightFromBracket, faMagnifyingGlass, faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import EmployerHeader from '../components/EmployerHeader';
import { allApplicationsByJobIdApi, employerApplicationAcceptenceApi, employerApplicationRejectApi } from '../../../services/allApis';
import { serverURL } from '../../../services/serverURL';


const ViewApplication = () => {

    const id = useParams().id

    const [applications, setApplications] = useState([])



    // const value = 93

    const handleNoOfApplications = async (id) => {

        const body = {
            jobId: id
        }

        const result = await allApplicationsByJobIdApi(body)
        console.log(result);

        const a = result.data.sort((a, b) => b.score - a.score);

        setApplications(a)

    }

    const handleAccept = async (id, jobId) => {

        const body = {
            id,
            jobId
        }

        const result = await employerApplicationAcceptenceApi(body)
        console.log(result);

        if (result.status == 200) {

            const a = result.data.sort((a, b) => b.score - a.score);

            setApplications(a)

        }

    }

    const handleReject = async (id, jobId) => {

        const body = {
            id,
            jobId
        }

        const result = await employerApplicationRejectApi(body)
        console.log(result);

        if (result.status == 200) {

            const a = result.data.sort((a, b) => b.score - a.score);

            setApplications(a)


        }

    }

    useEffect(() => {

        handleNoOfApplications(id)

    }, [])




    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <EmployerHeader />


            <div className=' w-full h-full grid px-5 gap-2'>
                <div className=' bg-white rounded-2xl mt-3 mb-4'>
                    <div className=' pb-5'>
                        <div className='p-5 flex items-center gap-5'>

                            <h1 id='he' className=' font-semibold text-2xl'>Applications Count: {applications.filter(item => item.status.includes("approved")).length} </h1>
                        </div>

                        <div className=' px-5 mb-2'>

                            <p id='pa' className=' text-xl'>Sorted Based on Compatibility</p>

                        </div>



                        <div className=' grid lg:grid-cols-2 px-5 gap-5'>
                            {applications?.length > 0 &&

                                applications?.map((app, index) => (

                                    app.status.includes("approved") &&
                                    <div key={index} className='border border-blue-400 rounded-xl h-full p-5'>
                                        <div className=' flex justify-between items-start'>
                                            <div>
                                                <h1 id='pa' className=' text-lg font-semibold mb-2'>{app?.firstName} {app?.lastName}</h1>
                                                <h1 id='pa' className=' text-gray-500 mb-2'>{app?.emailId}</h1>
                                                <p id='pa' className=' text-gray-500'>{app?.phoneNumber}</p>
                                            </div>
                                            <div className=' flex flex-wrap justify-center items-center gap-3'>
                                                <p>Profile Compatibility</p>
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
                                            </div>
                                        </div>
                                        <div className=' flex mt-5  justify-between items-center'>

                                            <div className=' flex items-center'>
                                                <span className=' p-1 px-2 bg-blue-900 text-white rounded'><a href={`${serverURL}/uploads/${app.resume}`}
                                                    target="_blank">view resume</a></span>
                                            </div>

                                            {app.status == "approved-accepted" ?
                                                <div className=' flex flex-wrap gap-1 md:gap-3'>
                                                    <span className=' p-1 px-2 border bg-green-600 text-white border-green-600 rounded '>Accepted</span>
                                                </div>

                                                : app.status == "approved-rejected" ?

                                                    <div className=' flex flex-wrap gap-1 md:gap-3'>
                                                        <span className=' p-1 px-2 border bg-red-600 text-white border-red-600 rounded'>Rejected</span>
                                                    </div>
                                                    :
                                                    <div className=' flex flex-wrap gap-1 md:gap-3'>
                                                        <button onClick={() => handleReject(app?._id, app?.jobId)} className=' p-1 px-2 border border-blue-900 rounded hover:scale-102'>Reject</button>
                                                        <button onClick={() => handleAccept(app?._id, app?.jobId)} className=' p-1 px-2 border border-blue-900 bg-blue-900 text-white rounded hover:scale-102'>Accept</button>
                                                    </div>
                                            }

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

export default ViewApplication