import React from 'react'
import EmployerHeader from '../components/EmployerHeader'

const JobPost = () => {
  return (
    <div className=' pb-20 min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>

      <EmployerHeader/>

      <div className=' mx-40 mt-5 border border-blue-400 rounded-xl h-full p-5 bg-white'>

        <div className=' mb-8'>
          <h1 id='he' className=' font-bold text-2xl'>Fill The Form</h1>
        </div>

        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Job Title</h1>
          <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Title' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Company</h1>
          <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Company' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Job Description</h1>
          <textarea type="text" rows={5} className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='About The Job' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Required Skills ( Seperate by ' , ' )</h1>
          <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Skills' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Job Location</h1>
          <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Location' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Salary Range</h1>
          <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Salary Range' />
        </div>
        <div className=' mb-5'>
          <h1 id='he' className=' font-semibold mb-1'>Job Type</h1>
          <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Job Type' />
        </div>


        <div className=' flex gap-3 mt-10'>
          <button onClick={() => setApply(false)} className=' px-2 p-1 bg-white text-blue-900 border border-blue-900 rounded-lg hover:scale-102 '>Discard</button>
          <button onClick={() => setApply(false)} className=' px-6 p-1 bg-blue-900 text-white border-blue-900 rounded-lg hover:scale-102'>Post</button>
        </div>

      </div>
    </div>
  )
}

export default JobPost