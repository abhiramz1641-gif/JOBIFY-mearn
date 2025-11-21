import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProfileEdit = ({ setEdit }) => {
    return (
        <div style={{ overflowX: "hidden", overflowY: "auto", zIndex: "50" }} className=' border h-fit sm:h-2/3 sm:w-1/2 w-6/7 rounded-2xl bg-white'>
            <div className=' m-3 sm:mx-10 sm:mb-5 sm:mt-5 border border-blue-400 rounded-xl h-fit p-5 bg-white'>

                <div className=' mb-8'>
                    <h1 id='he' className=' font-bold text-2xl'>Edit Profile</h1>
                </div>

                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Profile Photo</h1>
                    <input type="file" id='pic' className=' hidden border border-blue-300 rounded-md p-1 w-full px-2' />
                    <label htmlFor="pic" className=' px-2 p-1 border bg-blue-900 rounded text-white'>Choose <FontAwesomeIcon icon={faFile} /></label>
                </div>

                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Name</h1>
                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Name' />
                </div>

                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Title</h1>
                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Title' />
                </div>
                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Email</h1>
                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Email' />
                </div>
                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Experience</h1>
                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Experience' />
                </div>
                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Highest Education</h1>
                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Education' />
                </div>
                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Skills ( Seperate by ' , ' )</h1>
                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Skills' />
                </div>

                <div>
                    <h1 id='he' className='font-semibold'>Resume</h1>
                </div>
                <div className=' flex'>
                    <label htmlFor="resume" className=' flex items-center'><FontAwesomeIcon className=' text-3xl text-blue-900' icon={faFile} /> <span className='hover:scale-103 p-2 rounded bg-blue-900 text-white font-semibold shadow-2xl shadow-gray-400'>Add Resume</span></label></div>
                <input className=' hidden' id='resume' name='resume' type="file" />

                <div className=' flex justify-center gap-3 mt-10 pb-5'>
                    <button onClick={() => setEdit(false)} className=' px-2 p-1 bg-white text-blue-900 border border-blue-900 rounded-lg hover:scale-102 '>Discard</button>
                    <button onClick={() => setEdit(false)} className=' px-6 p-1 bg-blue-900 text-white border-blue-900 rounded-lg hover:scale-102'>Edit</button>
                </div>

            </div>
        </div>
    )
}

export default ProfileEdit