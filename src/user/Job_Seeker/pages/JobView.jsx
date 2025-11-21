import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faFileArrowUp, faL } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from "framer-motion";



const JobView = () => {


    const [apply, setApply] = useState(false)




    const value = 70



    return (
        <div className=' min-h-lvh bg-linear-to-r from-[#334ed6] to-[#1E1E2F] '>


            <UserHeader />



            <div className={apply ? ' w-full h-full grid md:grid-cols-[4fr_2fr] gap-3 px-5' : 'w-full h-full grid px-5'}>

                <div className='border border-blue-400 rounded-xl h-full p-5 md:p-10 bg-white'>
                    <div className=' flex justify-between items-center'>
                        <div>
                            <h1 id='pa' className=' text-2xl font-bold'>Senior Frontend Developer</h1>
                            <h1 id='pa' className=' text-gray-500 mb-2 font-bold text-xl'>TechCorp Inc</h1>
                        </div>
                    </div>

                    <div className=' my-3'>
                        <h1 id='pa' className=' text-lg font-semibold'>About The Job</h1>

                        <p className=' text-xs sm:text-sm md:text-base'>
                            Recusandae repellat repellendus rem vel illum ratione magni voluptatibus eaque doloremque. Nisi similique autem aliquam in atque adipisci incidunt debitis consectetur tempora quos at sit, illo assumenda accusantium culpa modi!
                            Recusandae repellat repellendus rem vel illum ratione magni voluptatibus eaque doloremque. Nisi 
                            Recusandae repellat repellendus rem vel illum ratione magni voluptatibus eaque doloremque. Nisi similique autem aliquam in atque adipisci incidunt debitis consectetur tempora quos at sit, illo assumenda accusantium culpa modi!

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tenetur doloremque saepe, delectus ut quo libero vero vel. Placeat, facere dicta! Impedit similique, debitis mollitia eos facilis quidem obcaecati architecto?
                            Ut, libero nemo illo aspernatur provident commodi alias odio? Maiores qui id quis explicabo amet asperiores beatae, nulla tenetur sint sed ducimus temporibus, fuga ea. Reiciendis numquam tempora optio nobis.
                            Saepe ex deserunt dignissimos molestias ipsa nihil voluptatibus aut, alias, ea provident deleniti expedita. Sequi vel ipsa nisi dolor voluptatibus corrupti inventore illum, impedit eaque quis explicabo sunt ducimus hic?
                            Quaerat corporis nam mollitia necessitatibus! Quasi veniam laboriosam repellendus, facilis ipsam numquam reiciendis aut magni assumenda rerum iure placeat, eveniet molestias, accusantium consequatur corporis maxime quis laudantium dolorum nesciunt sequi.
                            Consequuntur, nam neque numquam quas ducimus et voluptatum. Odio esse libero illo incidunt tempore amet fuga, eveniet ipsam ad nulla dolores eligendi magni velit labore voluptate maxime dicta sit iure!
                        </p>
                    </div>

                    <div className=' flex gap-2 mb-3 flex-wrap'>
                        <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>React</div>
                        <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Type Script</div>
                        <div className=' bg-blue-100 p-1 px-2 rounded-2xl'>Tailwind</div>
                    </div>

                    <div className=' mb-5'>
                        <p id='pa'>San Francisco, CA</p>
                        <p id='pa'>$120k - $160k</p>
                    </div>

                    <div>
                        <p id='pa' className=' text-gray-500'>Full-time</p>
                    </div>

                    <div className=' flex justify-center'>
                        <button onClick={() => setApply(true)} className=' hover:scale-101 hover:shadow-2xl hover:shadow-gray-500 p-2 px-4 bg-blue-900 text-white rounded'>Apply <FontAwesomeIcon icon={faFileArrowUp} /></button>
                    </div>

                </div>



                <motion.div
                    layout
                    initial={false}
                    animate={{
                        width: apply ? "auto" : 0,
                        opacity: apply ? 1 : 0,

                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                        layout: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
                    }}
                    className="overflow-hidden"
                >


                    <AnimatePresence mode="wait">

                        {apply && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                // exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className=' border border-blue-400 rounded-xl h-full p-5 bg-white'>

                                <div className=' mb-8'>
                                   <h1 id='he' className=' font-bold text-2xl'>Fill The Form</h1> 
                                </div>    

                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>First Name</h1>
                                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='First Name' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Last Name</h1>
                                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Last Name' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Email</h1>
                                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Email' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-1'>Phone</h1>
                                    <input type="text" className=' border border-blue-300 rounded-md p-1 w-full px-2' placeholder='Phone' />
                                </div>
                                <div className=' mb-5'>
                                    <h1 id='he' className=' font-semibold mb-2'>Upload Resume</h1>
                                    
                                    <div className=' flex flex-wrap items-center mt-1'>
                                        <label htmlFor="fl" className=' bg-blue-900 text-white px-4 p-2 rounded-lg hover:scale-102'>Select File</label>
                                        <input type="file" id='fl' className=' hidden border p-0.5 border-blue-900 rounded-r-lg' placeholder=' file' />
                                    </div>
                                </div>

                                <div className=' flex gap-3 mt-10'>
                                    <button onClick={()=>setApply(false)} className=' px-2 p-1 bg-white text-blue-900 border border-blue-900 rounded-lg hover:scale-102 '>Discard</button>
                                    <button onClick={()=>setApply(false)} className=' px-2 p-1 bg-blue-900 text-white border-blue-900 rounded-lg hover:scale-102'>Submit</button>
                                </div>


                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>

        </div>
    )
}

export default JobView