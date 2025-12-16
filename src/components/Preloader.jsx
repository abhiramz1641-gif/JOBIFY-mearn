import React from 'react'

const Preloader = () => {




  return (
    <div className=' overflow-x-hidden overflow-y-hidden h-screen flex justify-center items-center bg-linear-to-r'style={{ backgroundImage: "linear-gradient(150deg,#f4effd,#329ef8,#0b6df6,#f4effd)" }}>
        <video className=' items-center w-full' autoPlay muted loop playsInline src="./images/loader2.webm"></video>
    </div>
  )
}

export default Preloader