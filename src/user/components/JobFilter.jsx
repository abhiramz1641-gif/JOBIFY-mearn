import React, { useState } from 'react'
import { IgrSlider, IgrRangeSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const JobFilter = () => {


    const [salary, setSalary] = useState(50000);


    return (
        <div className="lg:min-w-max pt-3">

            <div className=' bg-white p-5 rounded-2xl'>
                <h1 id='he' className=' font-semibold text-2xl'>Filter By</h1>

                <div className=' my-5'>
                    <h1 id='pa' className=' text-xl mb-3'>Job Type</h1>

                    <div className=' grid lg:grid-cols-2 gap-2'>
                        <div className=' flex gap-2'>
                            <input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="fulltime" />
                            <label htmlFor="fulltime">Full time</label>
                        </div>
                        <div className=' flex gap-2'>
                            <input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Internship" />
                            <label htmlFor="Internship">Internship</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Contract" />
                            <label htmlFor="Contract">Contract</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Freelance" />
                            <label htmlFor="Freelance">Freelance</label>
                        </div>
                    </div>
                </div>

                <hr className=' text-blue-300' />

                <div className=' my-5'>
                    <h1 id='pa' className=' text-xl mb-3'>Job Category</h1>

                    <div className=' grid lg:grid-cols-2 gap-2'>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Design" />
                            <label htmlFor="Design">Design</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Developer" />
                            <label htmlFor="Developer">Developer</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Marketing" />
                            <label htmlFor="Marketing">Marketing</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Sales" />
                            <label htmlFor="Sales">Sales</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Management" />
                            <label htmlFor="Management">Management</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Finance" />
                            <label htmlFor="Finance">Finance</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Other" />
                            <label htmlFor="Other">Other</label>
                        </div>
                    </div>
                </div>

                <hr className=' text-blue-300' />

                <div className=' my-5'>
                    <h1 id='pa' className=' text-xl mb-3'>Salary</h1>

                    <div className=' w-full'>
                        < input
                            className='salary-slider w-full bg-blue-300'
                            type="range"
                            min="50000"
                            max="500000"
                            step="10000"
                            value={salary}
                            onChange={(e) => setSalary(Number(e.target.value))}
                            style={{
                                width: "100%",
                                height: "6px",
                                borderRadius: "10px",
                                outline: "none",
                                WebkitAppearance: "none",
                                appearance: "none",
                            }}
                        />
                        <p> <b>₹{salary}{salary == 500000 && '+'}</b></p>
                    </div>
                </div>

                <hr className=' text-blue-300' />

                <div className=' my-5'>
                    <h1 id='pa' className=' text-xl mb-3'>Experience</h1>

                    <div className=' grid lg:grid-cols-2 gap-2'>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="lt1year" />
                            <label htmlFor="lt1year">&lt; 1 year</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="years1to2" />
                            <label htmlFor="years1to2">1-2 Years</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="years3to5" />
                            <label htmlFor="years3to5">3-5 Years</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="gt5years" />
                            <label htmlFor="gt5years">5+ Years</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JobFilter