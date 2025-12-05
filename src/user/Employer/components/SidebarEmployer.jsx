

const SidebarEmployer = ({setEdit,userDetails, setUserDetails }) => {



    return (
        <div className="lg:min-w-max">

            <div className='  pt-3 pe-1 flex flex-col pb-4'>
                <div className='border border-blue-400 rounded-xl py-5 bg-white'>
                    <div className=' flex flex-col items-center gap-2'>
                        <img className=' border' style={{ height: "100px", width: "100px", borderRadius: "50px" }} src="https://i.pinimg.com/736x/5e/25/38/5e2538b4a02083c430e9006ed6de1629.jpg" alt="" />
                        <div className=' flex flex-col items-center mb-2'>
                            <h1 id='he' className=' text-2xl font-semibold'>{userDetails.username}</h1>
                            <h1 id='he' className=' text-xl text-center'>{userDetails.title}</h1>
                        </div>
                    </div>
                    <div className=' px-2 flex flex-col gap-2 text-center flex-wrap text-wrap'>
                        <p id='pa' className=' text-xs md:text-sm lg:text-base'>{userDetails.bio.email}</p>
                        <p id='pa' className=' text-xs md:text-sm lg:text-base'>{userDetails.bio.experience && `${userDetails.bio.experience} years`}</p>
                    </div>
                    <div className=' flex justify-center'>
                        <button onClick={()=>setEdit(true)} className=' bg-blue-900  hover:scale-103 p-2 mt-2 rounded text-white font-semibold shadow-2xl shadow-gray-400'>Edit Profile</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SidebarEmployer