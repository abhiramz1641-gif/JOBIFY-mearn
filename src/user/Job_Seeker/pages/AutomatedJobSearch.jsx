import React, { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import { allApplicationsByUserMailApi, applyApplicationApi, getUserApi, jobsApi } from '../../../services/allApis'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import toast, { Toaster } from 'react-hot-toast'

const AutomatedJobSearch = () => {


    const [email, setEmail] = useState('')

    const [scoreRange, setScoreRange] = useState(0);

    const [userDetails, setUserDetails] = useState({})

    const [allJobs, setAllJobs] = useState([])

    const [applications, setApplications] = useState([])

    const [jobIds, setJobIds] = useState([])

    const [select, setSelect] = useState(false)

    const [selectedJobs, setSelectedJobs] = useState([])

    const [resume, setResume] = useState(null)

    const [applyModal, setApplyModal] = useState(false)

    const [application, setApplication] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
        phoneNumber: "",
        resume: "",
        jobId: "",
        userMail: "",
        status: "pending",
        score: ""
    })

    console.log(application);



    const handleApply = async () => {

        if (select) {

            if (selectedJobs.length > 0) {

                for (let item of selectedJobs) {

                    const job = allJobs.find(j => j._id === item);
                    if (!job) continue;

                    const jobScore = handleScore(job.experience, job.skills);

                    if (!resume) {
                        toast.error("Please upload your resume", { duration: 1500 });
                        return;
                    }

                    const finalData = {
                        ...application,
                        jobId: item,
                        userMail: email,
                        score: jobScore
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
                    formData.append("score", jobScore);
                    formData.append("resume", resume);

                    const result = await applyApplicationApi(formData);

                    if (result?.status === 200) {
                        toast.success(`Applied for ${job.jobTitle}`, { duration: 1500 });

                    } else {
                        toast.error("Something went wrong.", { duration: 1500 });
                    }

                    setTimeout(() => {
                        //nav('/automated-job-search');
                    }, 1500);

                }

                setSelect(false)

                setApplication({
                    firstName: "",
                    lastName: "",
                    emailId: "",
                    phoneNumber: "",
                    resume: "",
                    jobId: "",
                    userMail: "",
                    status: "pending",
                    score: ""
                })

                setApplyModal(false)

            } else {

                toast.error('Please Select jobs to apply', {
                    duration: 1500
                })

            }
        } else {

            handleApplyAllByScore()
            //const compatibleJobs=allJobs.filter(item=>item.)
        }

    }

    const handleApplyAllByScore = async () => {

        const filteredJobs = allJobs.filter(job => {
            const score = handleScore(job.experience, job.skills);
            return score >= scoreRange;
        });

        if (filteredJobs.length === 0) {
            toast.error("No jobs match your score range.", { duration: 1500 });
            return;
        }

        if (!resume) {
            toast.error("Please upload your resume", { duration: 1500 });
            return;
        }

        for (let job of filteredJobs) {

            // if (jobIds.includes(job._id)) continue;

            const jobScore = handleScore(job.experience, job.skills);

            const finalData = {
                ...application,
                jobId: job._id,
                userMail: email,
                score: jobScore
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
            formData.append("score", jobScore);
            formData.append("resume", resume);

            const result = await applyApplicationApi(formData);

            if (result?.status === 200) {
                toast.success(`Applied for ${job.jobTitle}`, { duration: 1200 });
            }
        }

        setApplyModal(false);

        setApplication({
            firstName: "",
            lastName: "",
            emailId: "",
            phoneNumber: "",
            resume: "",
            jobId: "",
            userMail: "",
            status: "pending",
            score: ""
        });

    };


    const handleUpload = (e) => {

        console.log(e.target.files[0]);

        const file = e.target.files[0]

        const url = URL.createObjectURL(file)
        console.log(url);
        setResume(file)

    }

    const handleDiscard = () => {

        setApplication({
            firstName: "",
            lastName: "",
            emailId: "",
            phoneNumber: "",
            resume: "",
            jobId: "",
            userMail: "",
            status: "pending",
            score: ""
        })

        setApplyModal(false)

    }



    const handleJobSelect = (id, checked, score) => {

        if (checked) {
            setSelectedJobs(prev => [...prev, id]);

        } else {
            setSelectedJobs(prev => prev.filter(item => item !== id));
        }

    }
    //console.log(selectedJobs);

    const getUserData = async (mail) => {

        const mailId = {
            email: mail
        }
        //console.log(mailId);


        const result = await getUserApi(mailId)

        //console.log(result.data.existingUser);

        setUserDetails(result.data.existingUser)


    }

    const getApplications = async (mail) => {

        const body = {

            userMail: mail

        }

        const result = await allApplicationsByUserMailApi(body)
        console.log(result.data);
        setApplications(result.data)

    }

    const getjobs = async () => {

        const result = await jobsApi()
        //console.log(result.data);
        setAllJobs(result.data)

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

        const arr = applications
        setJobIds(arr.map(item => item.jobId))

    }, [applications])

    //console.log(jobIds);

    useEffect(() => {

        getjobs()

        const mail = sessionStorage.getItem('email')
        setEmail(mail)
        getUserData(mail)
        getApplications(mail)


    }, [])



    return (
        <div className=' min-h-lvh pb-5 bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>
            <UserHeader />

            <div className=' bg-white rounded-2xl mt-3 mb-4 mx-1 md:mx-5 p-2 sm:p-5'>
                <div className=' pb-5'>


                    <div className=' px-5 mb-3'>
                        <h1 id='he' className=' text-2xl font-bold mb-2'>Automated Job hunt</h1>
                        <p id='pa' className='text-lg mb-2'>This gives you the option to Apply for all the job you are intrested in just <span className=' text-blue-600  font-bold'>1 Click!</span></p>

                        <p id='pa' className=' mt-5 mb-2'>Select the minimum Compatibility Score required or you can also manually select Jobs you need to apply for and hit <span className=' font-bold'>APPLY ALL</span>.</p>
                    </div>

                    <div className=' ps-5 pb-5 flex items-center gap-5'>
                        <div className=' w-40 '>
                            < input
                                className='salary-slider w-full bg-blue-300'
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                value={scoreRange}
                                onChange={(e) => setScoreRange(Number(e.target.value))}
                                style={{
                                    width: "100%",
                                    height: "6px",
                                    borderRadius: "10px",
                                    outline: "none",
                                    WebkitAppearance: "none",
                                    appearance: "none",
                                }}
                            />
                            <p> <b>{scoreRange}</b></p>
                        </div>
                        OR
                        <button onClick={() => setSelect(!select)} className=' px-2 p-1 hover:scale-101 bg-blue-900 text-white rounded-md'>Select Jobs</button>
                    </div>

                    <div className=' ps-5 mb-5'>
                        <button onClick={() => setApplyModal(true)} style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' hover:scale-101 p-2 px-8 rounded text-white font-semibold '>APPLY ALL <FontAwesomeIcon icon={faCaretRight} /></button>
                    </div>



                    <div className=' grid lg:grid-cols-2 px-5 gap-5'>


                        {allJobs?.length > 0 &&

                            allJobs?.map((job, index) => (

                                job?.status == "approved" &&

                                <div key={index} className='border border-blue-400 rounded-xl h-full p-5'>
                                    {select ?

                                        !jobIds.includes(job?._id) ?

                                            <div className=' flex gap-2 mb-3'>
                                                <input onChange={(e) => handleJobSelect(job?._id, e.target.checked)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="select" />
                                                <label htmlFor="select">Select</label>
                                            </div>

                                            : <h1>Already applied</h1>
                                        :
                                        ""
                                    }
                                    <div className=' flex justify-between items-center'>
                                        <div>
                                            <h1 id='pa' className=' text-lg font-semibold'>{job?.jobTitle}</h1>
                                            <h1 id='pa' className=' text-gray-500 mb-2'>{job?.company}</h1>
                                        </div>
                                        <div>
                                            <Link to={`/jobview/${job?._id},${handleScore(job?.experience, job?.skills)}`}><button className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>View <FontAwesomeIcon icon={faArrowRightFromBracket} /></button></Link>
                                        </div>
                                    </div>

                                    <div className=' flex gap-2 mb-3 flex-wrap'>
                                        {job?.skills?.map((item, index) => (

                                            <div key={index} className=' bg-blue-100 p-1 px-2 rounded-2xl'>{item}</div>

                                        ))

                                        }

                                    </div>

                                    <div className=' mb-5 flex flex-col gap-1.5'>
                                        <p id='pa'>{job?.location}</p>
                                        <p id='pa'>₹{job?.salary}</p>
                                        <p id='pa'>{job?.experience} year</p>
                                    </div>

                                    <div className=' flex justify-between items-center'>
                                        <div>
                                            <p id='pa' className=' text-gray-500'>{job?.jobType}</p>
                                        </div>
                                        <div className=' flex justify-center flex-wrap items-center gap-3'>
                                            <p>Profile Compatibility</p>
                                            <div
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    borderRadius: "50%",
                                                    background: `conic-gradient(#334ed6 ${handleScore(job?.experience, job?.skills)}%, #A4B3FF ${handleScore(job?.experience, job?.skills)}% 100%)`,
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
                                                }} className=' flex justify-center items-center bg-white'>{handleScore(job?.experience, job?.skills)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))




                        }



                    </div>
                </div>

            </div>

            {applyModal &&
                <div id='modal' className='absolute inset-0  items-center flex justify-center '>
                    <div className=' bg-white rounded-2xl mt-3 mb-4 mx-1 p-5 w-full md:mx-40'>
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
                    </div>
                </div>
            }

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </div>
    )
}

export default AutomatedJobSearch