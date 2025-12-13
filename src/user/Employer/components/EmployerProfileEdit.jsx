import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { editUserApi } from '../../../services/allApis'
import toast, { Toaster } from 'react-hot-toast'

const EmployerProfileEdit = ({ setEdit, setUserDetails, userDetails, setPreview }) => {

    const [profileImage, setProfileImage] = useState(null);

    const [token, setToken] = useState('')

    const handleEdit = async () => {

        const reqHeader = {
            'Authorization': `Bearer ${token}`
        }

        const formData = new FormData()

        formData.append("_id", userDetails._id)
        formData.append("username", userDetails.username)
        formData.append("email", userDetails.email)
        formData.append("password", userDetails.password || "")

        formData.append("bio[type]", userDetails.bio.type || "")
        formData.append("bio[title]", userDetails.bio.title || "")
        formData.append("bio[email]", userDetails.bio.email || "")
        formData.append("bio[experience]", userDetails.bio.experience || "")
        formData.append("bio[education]", userDetails.bio.education || "")
        formData.append("bio[resume]", userDetails.bio.resume || "")

        //image
        if (profileImage) {
            formData.append("pic", profileImage)
        }

        const result = await editUserApi(formData, reqHeader)
        if (result.status == 200) {

            toast.success('Saved Changes.', {
                duration: 1000
            })

        } else {

            toast.error('Failed.', {
                duration: 1000
            })

        }

        setTimeout(() => {
            setEdit(false)
        }, 1000)

    }

    const handleFileChange = (e) => {

        setProfileImage(e.target.files[0]);

        const file = e.target.files[0]

        setUserDetails({ ...userDetails, bio: { ...userDetails.bio, pic: file } })

        if (file) {

            const url = URL.createObjectURL(file)
            setPreview(url)

        }
    };

    useEffect(() => {

        const token = sessionStorage.getItem('token')
        setToken(token)

    }, [])


    return (
        <div style={{ overflowX: "hidden", overflowY: "auto", zIndex: "50" }} className=' border h-fit sm:h-2/3 sm:w-1/2 w-6/7 rounded-2xl bg-white'>
            <div className=' m-3 sm:mx-10 sm:mb-5 sm:mt-5 border border-blue-400 rounded-xl h-fit p-5 bg-white'>

                <div className=' mb-8'>
                    <h1 id='he' className=' font-bold text-2xl'>Edit Profile</h1>
                </div>

                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Profile Photo</h1>
                    <input onChange={(e) => handleFileChange(e)} type="file" id='pic' className=' hidden border border-blue-300 rounded-md p-1 w-full px-2' />
                    <label htmlFor="pic" className=' px-2 p-1 border bg-blue-900 rounded text-white'>Choose <FontAwesomeIcon icon={faFile} /></label>
                </div>

                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Name</h1>
                    <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Name' />
                </div>

                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Company Name</h1>
                    <input value={userDetails.bio.title} onChange={(e) => setUserDetails({ ...userDetails, bio: { ...userDetails.bio, title: e.target.value } })} type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Company' />
                </div>
                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Email</h1>
                    <input value={userDetails.bio.email} onChange={(e) => setUserDetails({ ...userDetails, bio: { ...userDetails.bio, email: e.target.value } })} type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Email' />
                </div>
                <div className=' mb-5'>
                    <h1 id='he' className=' font-semibold mb-1'>Experience</h1>
                    <input value={userDetails.bio.experience} onChange={(e) => setUserDetails({ ...userDetails, bio: { ...userDetails.bio, experience: e.target.value } })} type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Experience' />
                </div>
                <div className=' flex justify-center gap-3 mt-10 pb-5'>
                    {/* <button onClick={() => setEdit(false)} className=' px-2 p-1 bg-white text-blue-900 border border-blue-900 rounded-lg hover:scale-102 '>Discard</button> */}
                    <button onClick={handleEdit} className=' px-6 p-1 bg-blue-900 text-white border-blue-900 rounded-lg hover:scale-102'>Edit</button>
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

export default EmployerProfileEdit