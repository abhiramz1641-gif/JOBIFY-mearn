import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SidebarUser = () => {
    return (
        <div className="lg:min-w-max">

            <div className='  pt-3 pe-1 flex flex-col pb-4'>
                <div className='border border-blue-400 rounded-xl py-5 bg-white'>
                    <div className=' flex flex-col items-center gap-2'>
                        <img className=' border' style={{ height: "100px", width: "100px", borderRadius: "50px" }} src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt="" />
                        <div className=' flex flex-col items-center mb-2'>
                            <h1 id='he' className=' text-2xl font-semibold'>Abhiram</h1>
                            <h1 id='he' className=' text-xl text-center'>MERN Stack Developer</h1>
                        </div>
                    </div>
                    <div className=' px-2 flex flex-col gap-2 text-center flex-wrap text-wrap'>
                        <p id='pa' className=' text-xs md:text-sm lg:text-base'>abhiram2003@gmail.com</p>
                        <p id='pa' className=' text-xs md:text-sm lg:text-base'>5 years React Developer</p>
                        <p id='pa' className=' text-xs md:text-sm lg:text-base'>Btech Graduate</p>
                    </div>
                    <div className=' flex justify-center'>
                        <button className=' bg-blue-900  hover:scale-103 p-2 mt-2 rounded text-white font-semibold shadow-2xl shadow-gray-400'>Edit Profile</button>
                    </div>
                </div>
                <div className=' mt-3 border border-blue-400 rounded-xl py-5 bg-white'>
                    <div>
                        <h1 id='he' className=' mx-5 font-semibold'>Skills</h1>
                    </div>
                    <div className=' grid grid-cols-2 gap-1 p-3'>
                        <div className=' text-center rounded bg-blue-200 p-2'><p id='pa'>React</p></div>
                        <div className=' text-center rounded bg-blue-200 p-2'><p id='pa'>React</p></div>
                        <div className=' text-center rounded bg-blue-200 p-2'><p id='pa'>React</p></div>
                        <div className=' text-center rounded bg-blue-200 p-2'><p id='pa'>React</p></div>
                    </div>
                </div>
                <div className=' mt-3 border border-blue-400 rounded-xl py-5 bg-white'>

                    <div>
                        <h1 id='he' className=' mx-5 font-semibold'>Resume</h1>
                    </div>
                    <div className=' flex justify-center'>
                        <label htmlFor="resume" className=' flex items-center'><FontAwesomeIcon className=' text-3xl text-blue-900' icon={faFile} /> <button className='  hover:scale-103 p-2 rounded bg-blue-900 text-white font-semibold shadow-2xl shadow-gray-400 ' >Add Resume</button></label></div>
                    <input className=' hidden' id='resume' name='resume' type="file" />

                </div>

            </div>

        </div>
    )
}

export default SidebarUser