import React, { useState } from 'react'
import EmployerHeader from '../components/EmployerHeader'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { jobPostApi } from '../../../services/allApis'

const JobPost = () => {

  const nav = useNavigate()

  const [job, setJob] = useState({

    jobTitle: "",
    company: "",
    description: "",
    skills: [],
    location: "",
    salary: null,
    jobType: "",
    employerMail: ""

  })

  const handleskill = (skills) => {

    const s = skills.split(',')
    setJob({ ...job, skills: s })

  }


  const handlePost = async () => {

    const mail = sessionStorage.getItem("email")

    const jobToPost = { ...job, employerMail: mail }

    const { jobTitle, company, description, skills, location, salary, jobType, employerMail } = jobToPost

    if (jobTitle && company && description && skills[0] != '' && location && salary && jobType && employerMail) {

      const result = await jobPostApi(jobToPost)
      console.log(result);

      if (result.status === 200) {

        setJob({

          jobTitle: "",
          company: "",
          description: "",
          skills: [],
          location: "",
          salary: null,
          jobType: "",
          employerMail: ""

        })

        toast.success('Job Posted Successfully.', {
          duration: 1500
        })

        setTimeout(() => {

          nav('/EmployerDashboard')

        }, 1500);

      } else {
        toast.error('API failed.', {
          duration: 1500
        })
      }
    } else {
      toast.error('Please fill all required fields.', {
        duration: 1500
      })
    }

  }

  const handleDiscard = () => {

    setJob({

      jobTitle: "",
      company: "",
      description: "",
      skills: [],
      location: "",
      salary: "",
      jobType: "",
      employerMail: ""

    })

    nav('/EmployerDashboard')

  }





  return (
    <div className=' pb-20 min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


      <EmployerHeader />

      <div className=' mx-2 md:mx-40 mt-5 border border-blue-400 rounded-xl h-full p-5 bg-white'>

        <div className=' mb-8'>
          <h1 id='he' className=' font-bold text-2xl'>Fill The Form</h1>
        </div>

        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Job Title</h1>
          <input type="text" value={job.jobTitle} onChange={(e) => setJob({ ...job, jobTitle: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Title' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Company</h1>
          <input type="text" value={job.company} onChange={(e) => setJob({ ...job, company: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Company' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Job Description</h1>
          <textarea type="text" rows={5} value={job.description} onChange={(e) => setJob({ ...job, description: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='About The Job' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Required Skills ( Seperate by ' , ' )</h1>
          <input
            type="text"
            onChange={(e) => handleskill(e.target.value)}
            className=' border border-blue-300 rounded-md p-1 w-full px-2'
            placeholder='Skills'
          />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Job Location</h1>
          <input type="text" value={job.location} onChange={(e) => setJob({ ...job, location: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Location' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Salary Range</h1>
          <input type="text" value={job.salary} onChange={(e) => setJob({ ...job, salary: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Salary Range' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Job Type</h1>
          <input type="text" value={job.jobType} onChange={(e) => setJob({ ...job, jobType: e.target.value })} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Type' />
        </div>


        <div className=' flex gap-3 mt-10'>
          <button onClick={handleDiscard} className=' px-2 p-1 bg-white text-blue-900 border border-blue-900 rounded-lg hover:scale-102 '>Discard</button>
          <button onClick={handlePost} className=' px-6 p-1 bg-blue-900 text-white border-blue-900 rounded-lg hover:scale-102'>Post</button>
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

export default JobPost