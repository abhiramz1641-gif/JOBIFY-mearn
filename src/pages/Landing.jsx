import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Silk from '../Silk'

const Landing = () => {




  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Silk speed={6}
            scale={1}
            color="#334ed6"
            noiseIntensity={.5}
            rotation={0} />
        </div>

        <div style={{ position: "relative", zIndex: 1, height: "660px" }} className=' w-full p-5 gap-10'>
          <Header />
          <div className=' p-2 sm:p-10 mt-20 flex flex-col items-center justify-center'>
            <h1 id='he' style={{ fontWeight: "800", color: "#FFFFF" }} className='text-3xl sm:text-4xl md:text-6xl text-white text-center'>Change The Way You</h1>
            <h1 id='he' style={{ fontWeight: "800", color: "#FFFFF" }} className='text-3xl sm:text-4xl md:text-6xl text-white text-center'>Find Your Next <span id='j' style={{ color: "" }} className=' text-5xl sm:text-8xl text-center'>Job</span></h1>
            <br />
            <p id='pa' className=' xs:text-lg sm:text-2xl font-medium text-white text-center'>Finding work is no more a work.</p>
            <br />
            <button style={{ backgroundImage: "linear-gradient(135deg, #5771FF, #00C8FF)" }} className=' p-2 px-8 rounded w-fit text-white font-semibold shadow-2xl shadow-black'>Get Started</button>
          </div>
          {/* <div className=' flex items-center justify-center'>
            <img className=' p-5 md:p-10' src="./images/landingg.png" alt="" />
          </div> */}


        </div>
      </div>



      {/* slider */}
      <div className="overflow-hidden border-t border-b border-gray-200">
        <div className="flex animate-scroll whitespace-nowrap py-5">
          <div className="flex items-center justify-evenly gap-8 px-8">
            <img className="h-20 p-2" src="./images/am.png" alt="" />
            <img className="h-20 p-2" src="./images/go.png" alt="" />
            <img className="h-20 p-2" src="./images/mic.png" alt="" />
            <img className="h-20 p-2" src="./images/sf.png" alt="" />
            <img className="h-20 p-2" src="./images/sl.png" alt="" />
          </div>

          <div className="flex items-center justify-evenly gap-8 px-8">
            <img className="h-20 p-2" src="./images/am.png" alt="" />
            <img className="h-20 p-2" src="./images/go.png" alt="" />
            <img className="h-20 p-2" src="./images/mic.png" alt="" />
            <img className="h-20 p-2" src="./images/sf.png" alt="" />
            <img className="h-20 p-2" src="./images/sl.png" alt="" />
          </div>
        </div>
      </div>



      {/* about us */}


      <div>
        <div id='about-us' className=' p-10'>
          <h1 id='he' style={{ color: "#1E1E2F" }} className=' ps-3 md:ps-10 text-3xl font-bold'>About Jobify</h1>
          <div className=' md:grid grid-cols-[2fr_1fr]'>
            <div className=' flex items-center text-xl'>
              <p id='pa' className=' px-10 py-5'>
  
                <span>
                  At Jobify, we’re redefining the way people find and apply for jobs. Our mission is to bridge the gap between talent and opportunity through technology, data-driven insights, and a touch of personalization. Whether you’re a fresh graduate looking for your first job or an experienced professional aiming to level up your career, Jobify ensures that every match counts. <br />
    
                  Unlike traditional job portals, Jobify uses compatibility scoring, skill-based filtering, and real-time recruiter insights to connect you with roles that truly fit your profile. We believe that a great career journey starts with the right opportunity — and we’re here to make that happen faster and smarter.
                </span> <br /><br />
  
                Join us today and be part of the new era of intelligent hiring.
                Because at Jobify, your next opportunity isn’t just a click away — it’s the right one.</p>
            </div>
            <div className=' flex items-center justify-center'>
              <img className=' p-5 md:p-10' src="./images/landingg.png" alt="" />
            </div>
          </div>
        </div>
      </div>













      {/* Featured jobs */}
      <div id='featured-jobs' className='fj'>
        <div className=' p-3 md:p-10'>
          <h1 id='he' style={{ color: "#1E1E2F" }} className=' ps-3 md:ps-10 text-3xl font-bold'>Featured Jobs</h1>
          <div className=' px-2 md:px-8 my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
            <div className='rounded-2xl  p-2 bg-white shadow-xl shadow-blue-400'>

              <div style={{ backgroundColor: "#d6effd" }} className=' rounded-t-xl p-5'>
                <p id='pa' className=' font-bold mb-5'>Full-Time</p>
                <h1 id='he' className=' text-4xl font-bold my-3'>Senior UI Developer</h1>
                <p id='pa' className=' text-xl mb-10'>Bangalore, India (hybrid)</p>
              </div>
              <div className=' flex justify-between items-center px-2 pt-5 pb-2'>
                <div className=' flex items-center'>
                  <img className=' w-12 ' src="./images/amazon.jpg" alt="" />
                  <h1 id='he' className=' ms-3 text-lg sm:text-xl font-semibold'>Senior UI <br /> Developer</h1>
                </div>
                <button className=' h-fit p-2 px-3 bg-blue-950 text-white rounded-4xl'>View</button>

              </div>

            </div>
            <div className='rounded-2xl  p-2 bg-white shadow-xl shadow-blue-400'>

              <div style={{ backgroundColor: "#A4B3FF" }} className=' rounded-t-xl p-5'>
                <p id='pa' className=' font-bold mb-5'>Full-Time</p>
                <h1 id='he' className=' text-4xl font-bold my-3'>Frontend Developer</h1>
                <p id='pa' className=' text-xl mb-10'>Hyderabad, India</p>
              </div>
              <div className=' flex justify-between items-center px-2 pt-5 pb-2'>
                <div className=' flex items-center'>
                  <img className=' w-12 ' src="./images/ytube.png" alt="" />
                  <h1 id='he' className=' ms-3 text-lg sm:text-xl font-semibold'>Frontend <br /> Developer</h1>
                </div>
                <button className=' h-fit p-2 px-3 bg-blue-950 text-white rounded-4xl'>View</button>

              </div>

            </div>
            <div className='rounded-2xl  p-2 bg-white shadow-xl shadow-blue-400'>

              <div style={{ backgroundColor: "#E0E4FF" }} className=' rounded-t-xl p-5'>
                <p id='pa' className=' font-bold mb-5'>Full-Time</p>
                <h1 id='he' className=' text-4xl font-bold my-3'>UI/UX <br /> Designer</h1>
                <p id='pa' className=' text-xl mb-10'>Detroit, USA</p>
              </div>
              <div className=' flex justify-between items-center px-2 pt-5 pb-2'>
                <div className=' flex items-center'>
                  <img className=' w-12 ' src="./images/x.png" alt="" />
                  <h1 id='he' className=' ms-3 text-lg sm:text-xl font-semibold'>UI/UX <br /> Designer</h1>
                </div>
                <button className=' h-fit p-2 px-3 bg-blue-950 text-white rounded-4xl'>View</button>

              </div>

            </div>
            <div className='rounded-2xl  p-2 bg-white shadow-xl shadow-blue-400'>

              <div style={{ backgroundColor: "#A4B3FF" }} className=' rounded-t-xl p-5'>
                <p id='pa' className=' font-bold mb-5'>Full-Time</p>
                <h1 id='he' className=' text-4xl font-bold my-3'>Data <br /> Scientist</h1>
                <p id='pa' className=' text-xl mb-10'>Pune, India</p>
              </div>
              <div className=' flex justify-between items-center px-2 pt-5 pb-2'>
                <div className=' flex items-center'>
                  <img className=' w-12 ' src="./images/google.png" alt="" />
                  <h1 id='he' className=' ms-3 text-lg sm:text-xl font-semibold'>Data <br />  Scientist</h1>
                </div>
                <button className=' h-fit p-2 px-3 bg-blue-950 text-white rounded-4xl'>View</button>

              </div>

            </div>
            <div className='rounded-2xl  p-2 bg-white shadow-xl shadow-blue-400'>

              <div style={{ backgroundColor: "#E0E4FF" }} className=' rounded-t-xl p-5'>
                <p id='pa' className=' font-bold mb-5'>Full-Time</p>
                <h1 id='he' className=' text-4xl font-bold my-3'>DevOps <br /> Engineer</h1>
                <p id='pa' className=' text-xl mb-10'>Mumbai, India</p>
              </div>
              <div className=' flex justify-between items-center px-2 pt-5 pb-2'>
                <div className=' flex items-center'>
                  <img className=' w-12 ' src="./images/net.png" alt="" />
                  <h1 id='he' className=' ms-3 text-lg sm:text-xl font-semibold'>DevOps <br />  Engineer</h1>
                </div>
                <button className=' h-fit p-2 px-3 bg-blue-950 text-white rounded-4xl'>View</button>

              </div>

            </div>
            <div className='rounded-2xl  p-2 bg-white shadow-xl shadow-blue-400'>

              <div style={{ backgroundColor: "#d6effd" }} className=' rounded-t-xl p-5'>
                <p id='pa' className=' font-bold mb-5'>Internship</p>
                <h1 id='he' className=' text-4xl font-bold my-3'>Digital Marketing Intern</h1>
                <p id='pa' className=' text-xl mb-10'>Bangalore, India</p>
              </div>
              <div className=' flex justify-between items-center px-2 pt-5 pb-2'>
                <div className=' flex items-center'>
                  <img className=' w-12 ' src="./images/adobe.png" alt="" />
                  <h1 id='he' className=' ms-3 text-lg sm:text-xl font-semibold'>Digital Marketing  <br /> Intern</h1>
                </div>
                <button className=' h-fit p-2 px-3 bg-blue-950 text-white rounded-4xl'>View</button>

              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing