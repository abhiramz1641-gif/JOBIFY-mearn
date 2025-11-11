import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: "#324ED6" }} className=' w-full grid sm:grid-cols-2 md:grid-cols-4 p-5 gap-5'>
                <div>
                    <h1 className=' mb-3 text-2xl font-bold text-white'>About Us</h1>
                    <p id='pa' style={{lineHeight:"2rem"}} className=' text-white'>Jobify is a skills-first job platform that connects talent with opportunities, verified skill assessments, and seamless recruiter tools. We help candidates showcase their best work and help companies find reliable, vetted hires faster — all in one friendly, privacy-first experience.</p>
                </div>
                <div>
                    <h1 className=' mb-3 text-2xl font-bold text-white'>Contact</h1>
                    <p id='pa' style={{lineHeight:"2rem"}} className=' text-white'>Phone: +91 81234 56789 <br />
                        Email: hello@jobify.example.com <br />

                        Support: support@jobify.example.com</p>
                </div>
                <div>
                    <h1 className=' mb-3 text-2xl font-bold text-white'>Follow Us On</h1>
                    <div className=' flex gap-5 text-2xl'>
                        <FontAwesomeIcon style={{ color: "E0E4FF" }} icon={faFacebookF} />
                        <FontAwesomeIcon style={{ color: "E0E4FF" }} icon={faInstagram} />
                        <FontAwesomeIcon style={{ color: "E0E4FF" }} icon={faXTwitter} />
                    </div>
                </div>
                <div>
                    <h1 className=' mb-3 text-2xl font-bold text-white'>Address</h1>
                    <p id='pa' style={{lineHeight:"2rem"}} className=' text-white'>Jobify Pvt. Ltd. <br />
                        Suite 8B, Kosta Towers, 42 Amber Lane, <br />
                        Civic Park, Pune — 411001, India</p>
                </div>

            </div>

        </>
    )
}

export default Footer