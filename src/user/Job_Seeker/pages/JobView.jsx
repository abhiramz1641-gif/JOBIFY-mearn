import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faFileArrowUp, faL } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from "framer-motion";
import { appliedStatusApi, applyApplicationApi, jobsByIdApi } from '../../../services/allApis'
import toast, { Toaster } from 'react-hot-toast'



const JobView = () => {

    const i = useParams().id.split(',')[0]
    const score = useParams().id.split(',')[1]
    //console.log(idd)

    const idd = {
        id: i
    }

    //const [id,setId]=useState('')
    const [email, setEmail] = useState('')

    const nav = useNavigate()

    const [apply, setApply] = useState(false)

    const [applied, setApplied] = useState(false)

    const [job, setJob] = useState({})

    const [resume, setResume] = useState(null)

    const [application, setApplication] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
        phoneNumber: "",
        resume: "",
        jobId: "",
        userMail: "",
        status: "pending",
        score
    })

    const getAppliedStatus = async (e) => {

        const obj = {

            jobId: idd.id,
            userMail: e
        }

        const result = await appliedStatusApi(obj)
        console.log(result);
        if (result.status == 500) {
            setApplied(true)
        }
    }


    const handleDiscard = () => {

        setApply(false)
        setApplication({
            firstName: "",
            lastName: "",
            emailId: "",
            phoneNumber: "",
            resume: "",
            jobId: "",
            userMail: "",
            status: "pending",
            score
        })

    }

    const handleUpload = (e) => {

        console.log(e.target.files[0]);

        const file = e.target.files[0]

        const url = URL.createObjectURL(file)
        console.log(url);
        setResume(file)

    }

    // const handleApply = async () => {

    //     //const email = sessionStorage.getItem('email')

    //     //console.log(email, i);

    //     setApplication({ ...application, jobId: idd.id, userMail: email })

    //     const finalData = {
    //         ...application,
    //         jobId: idd.id,
    //         userMail: email
    //     };

    //     const { firstName, lastName, emailId, phoneNumber, resume, jobId, userMail, score } = finalData

    //     //.................................reumeeee................not.......added......
    //     if (firstName && lastName && emailId && phoneNumber && jobId && userMail) {

    //         const result = await applyApplicationApi(finalData)
    //         console.log(result);

    //         if (result.status == 500) {
    //             toast.error('Something went wrong.', {
    //                 duration: 1500
    //             })
    //         } else if (result.status == 200) {
    //             toast.success('Application send.', {
    //                 duration: 1500
    //             })
    //             setApply(false)
    //             setApplication({
    //                 firstName: "",
    //                 lastName: "",
    //                 emailId: "",
    //                 phoneNumber: "",
    //                 resume: "",
    //                 jobId: "",
    //                 userMail: "",
    //                 status:"pending",
    //                 score
    //             })
    //         }

    //     } else {

    //         toast.error("Please fill all the fields", {
    //             duration: 1500
    //         })

    //     }

    //     setTimeout(() => {

    //         nav('/jobs')

    //     }, 1500);

    // }

    const handleApply = async () => {

        if (!resume) {
            toast.error("Please upload your resume", { duration: 1500 });
            return;
        }

        const email = sessionStorage.getItem('email');

        const finalData = {
            ...application,
            jobId: idd.id,
            userMail: email
        };

        const { firstName, lastName, emailId, phoneNumber, jobId, userMail } = finalData;

        if (!firstName || !lastName || !emailId || !phoneNumber || !jobId || !userMail) {
            toast.error("Please fill all the fields", { duration: 1500 });
            return;
        }

        
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("emailId", emailId);
        formData.append("phoneNumber", phoneNumber);
        formData.append("jobId", jobId);
        formData.append("userMail", userMail);
        formData.append("status", "pending");
        formData.append("score", score);
        formData.append("resume", resume);   

        const result = await applyApplicationApi(formData);

        if (result?.status === 200) {
            toast.success("Application sent.", { duration: 1500 });

            setApply(false);
            setApplication({
                firstName: "",
                lastName: "",
                emailId: "",
                phoneNumber: "",
                resume: "",
                jobId: "",
                userMail: "",
                status: "pending",
                score
            });
        } else {
            toast.error("Something went wrong.", { duration: 1500 });
        }

        setTimeout(() => {
            nav('/jobs');
        }, 1500);
    };



    const getJob = async () => {

        const result = await jobsByIdApi(idd)
        console.log(result);
        const jobb = result.data
        setJob(jobb)
        // setJob2(jobb)

    }


    useEffect(() => {

        getJob()
        setEmail(sessionStorage.getItem('email'))
        const mail = sessionStorage.getItem('email')
        getAppliedStatus(mail)

    }, [])



    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <UserHeader />



            <div className={apply ? ' w-full h-full grid md:grid-cols-[4fr_2fr] gap-3 px-5' : 'w-full h-full grid px-5'}>

                {/* <div className='border border-blue-400 rounded-xl h-full p-5 md:p-10 bg-white'>
                    <div className=' flex justify-between items-center'>
                        <div>
                            <h1 id='pa' className=' text-2xl font-bold'>Senior Frontend Developer</h1>
                            <h1 id='pa' className=' text-gray-500 mb-2 font-bold text-xl'>TechCorp Inc</h1>
                        </div>
                    </div>

                    <div className=' my-3'>
                        <h1 id='pa' className=' text-lg font-semibold'>About The Job</h1>

                        <p className=' text-xs sm:text-sm md:text-base'>
                            Recusandae repellat repellendus rem vel illum ratione magni voluptatibus eaque doloremque. Nisi similique autem aliquam in atque adipisci incidunt debitis consectetur tempora quos at sit, illo assumenda accusantium culpa modi!
                            Recusandae repellat repellendus rem vel illum ratione magni voluptatibus eaque doloremque. Nisi
                            Recusandae repellat repellendus rem vel illum ratione magni voluptatibus eaque doloremque. Nisi similique autem aliquam in atque adipisci incidunt debitis consectetur tempora quos at sit, illo assumenda accusantium culpa modi!

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tenetur doloremque saepe, delectus ut quo libero vero vel. Placeat, facere dicta! Impedit similique, debitis mollitia eos facilis quidem obcaecati architecto?
                            Ut, libero nemo illo aspernatur provident commodi alias odio? Maiores qui id quis explicabo amet asperiores beatae, nulla tenetur sint sed ducimus temporibus, fuga ea. Reiciendis numquam tempora optio nobis.
                            Saepe ex deserunt dignissimos molestias ipsa nihil voluptatibus aut, alias, ea provident deleniti expedita. Sequi vel ipsa nisi dolor voluptatibus corrupti inventore illum, impedit eaque quis explicabo sunt ducimus hic?
                            Quaerat corporis nam mollitia necessitatibus! Quasi veniam laboriosam repellendus, facilis ipsam numquam reiciendis aut magni assumenda rerum iure placeat, eveniet molestias, accusantium consequatur corporis maxime quis laudantium dolorum nesciunt sequi.
                            Consequuntur, nam neque numquam quas ducimus et voluptatum. Odio esse libero illo incidunt tempore amet fuga, eveniet ipsam ad nulla dolores eligendi magni velit labore voluptate maxime dicta sit iure!
                        </p>
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

                    <div>
                        <p id='pa' className=' text-gray-500'>Full-time</p>
                    </div>

                    <div className=' flex justify-center'>
                        <button onClick={() => setApply(true)} className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Apply <FontAwesomeIcon icon={faFileArrowUp} /></button>
                    </div>

                </div> */}

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

                        <div className=' mb-5 flex flex-col gap-1.5'>
                            <p id='pa'>{job.location}</p>
                            <p id='pa'>₹{job.salary}</p>
                            <p id='pa'>{job.experience} year+</p>
                        </div>

                        <div>
                            <p id='pa' className=' text-gray-500'>{job?.jobType}</p>
                        </div>

                        <div className=' flex justify-center'>
                            {applied ?
                                <button onClick={() => setApply(true)} className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Apply <FontAwesomeIcon icon={faFileArrowUp} /></button>
                                :
                                <span className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-white text-blue-900
                                 border border-blue-900 rounded'>You have already applied</span>

                            }
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
                                    <h1 id='he' className=' font-semibold mb-1'>First Name</h1>
                                    <input type="text" value={application.firstName} onChange={(e) => setApplication({ ...application, firstName: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='First Name' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Last Name</h1>
                                    <input type="text" value={application.lastName} onChange={(e) => setApplication({ ...application, lastName: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Last Name' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Email</h1>
                                    <input type="text" value={application.emailId} onChange={(e) => setApplication({ ...application, emailId: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Email' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Phone</h1>
                                    <input type="text" value={application.phoneNumber} onChange={(e) => setApplication({ ...application, phoneNumber: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Phone' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-2'>Upload Resume</h1>

                                    <div className=' flex flex-wrap items-center mt-1'>
                                        <label htmlFor="fl" className=' bg-blue-900 text-white px-4 p-2 rounded-lg hover:scale-102'>Select File</label>
                                        <input onChange={(e) => handleUpload(e)} type="file" id='fl' className=' hidden border p-0.5 border-blue-900 rounded-r-lg' placeholder=' file' />
                                        <button
                                            onClick={() => {
                                                if (resume) {
                                                    const url = URL.createObjectURL(resume);
                                                    window.open(url, "_blank");
                                                }
                                            }}
                                            className=" ms-1 border border-blue-900 text-blue-900 px-4 p-2 rounded-lg hover:scale-102"
                                        >
                                            Preview Resume
                                        </button>
                                    </div>
                                </div>

                                <div className=' flex gap-3 mt-10'>
                                    <button onClick={handleDiscard} className=' px-2 p-1 bg-white text-blue-900 border border-blue-900 rounded-lg hover:scale-102 '>Discard</button>
                                    <button onClick={handleApply} className=' px-2 p-1 bg-blue-900 text-white border-blue-900 rounded-lg hover:scale-102'>Submit</button>
                                </div>


                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>

            {/* hot toast */}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </div>
    )
}

export default JobView