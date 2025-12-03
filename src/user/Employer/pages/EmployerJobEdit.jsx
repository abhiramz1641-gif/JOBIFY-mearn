import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faFileArrowUp, faL, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from "framer-motion";
import EmployerHeader from '../components/EmployerHeader'
import { editJobApi, jobsByIdApi } from '../../../services/allApis';



const EmployerJobEdit = () => {

    const id = useParams()
    console.log(id);

    const [apply, setApply] = useState(false)

    const [job, setJob] = useState({})
    // const [job2, setJob2] = useState({})


    const getJob = async () => {

        const result = await jobsByIdApi(id)
        console.log(result);
        const jobb = result.data
        setJob(jobb)
        // setJob2(jobb)

    }

    const handleSkill = (skills) => {

        const s = skills.split(',')
        setJob({ ...job, skills: s })

    }

    const handleEdit=async()=>{

        setApply(false)
        const result=await editJobApi(job)
        console.log(result);
        
        
    }

    // const handleDiscard = ()=>{

    //     setJob(job2)
    //     setApply(false)

    // }


    useEffect(() => {

        getJob()

    }, [apply])



    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <EmployerHeader />



            <div className={apply ? ' w-full h-full grid md:grid-cols-[4fr_2fr] gap-3 px-5' : 'w-full h-full grid px-5'}>

                {job &&


                    <div className='border border-blue-400 rounded-xl h-full p-5 md:p-10 bg-white'>
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

                        <div className=' mb-5'>
                            <p id='pa'>{job?.location}</p>
                            <p id='pa'>${job?.salary}</p>
                        </div>

                        <div>
                            <p id='pa' className=' text-gray-500'>{job?.jobType}</p>
                        </div>

                        <div className=' flex justify-center'>
                            <button onClick={() => setApply(true)} className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Edit <FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>

                    </div>

                }



                <motion.div
                    layout
                    initial={false}
                    animate={{
                        width: apply ? "auto" : 0,
                        opacity: apply ? 1 : 0,

                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                        layout: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
                    }}
                    className="overflow-hidden"
                >


                    <AnimatePresence mode="wait">

                        {apply && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                // exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className=' border border-blue-400 rounded-xl h-full p-5 bg-white'>

                                <div className=' mb-8'>
                                    <h1 id='he' className=' font-bold text-2xl'>Fill The Form</h1>
                                </div>

                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Job Title</h1>
                                    <input type="text" value={job?.jobTitle} onChange={(e) => setJob({ ...job, jobTitle: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Title' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Company</h1>
                                    <input type="text" value={job?.company} onChange={(e) => setJob({ ...job, company: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Company' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Job Description</h1>
                                    <textarea type="text" rows={5} value={job?.description} onChange={(e) => setJob({ ...job, description: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='About The Job' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Required Skills ( Seperate by ' , ' )</h1>
                                    <input type="text" value={job?.skills} onChange={(e) => handleSkill(e.target.value)} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Skills' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Job Location</h1>
                                    <input type="text" value={job?.location} onChange={(e) => setJob({ ...job, location: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Location' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Salary Range</h1>
                                    <input type="text" value={job?.salary} onChange={(e) => setJob({ ...job, salary: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Salary Range' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Job Type</h1>
                                    <input type="text" value={job?.jobType} onChange={(e) => setJob({ ...job, jobType: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Type' />
                                </div>


                                <div className=' flex gap-3 mt-10'>
                                    <button onClick={()=>setApply(false)} className=' px-2 p-1 bg-white text-blue-900 border border-blue-900 rounded-lg hover:scale-102 '>Discard</button>
                                    <button onClick={handleEdit} className=' px-6 p-1 bg-blue-900 text-white border-blue-900 rounded-lg hover:scale-102'>Edit</button>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>

        </div>
    )
}

export default EmployerJobEdit