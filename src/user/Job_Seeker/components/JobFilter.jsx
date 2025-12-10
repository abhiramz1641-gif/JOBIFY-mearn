import React, { useEffect, useState } from 'react'
import { IgrSlider, IgrRangeSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const JobFilter = ({ filterDetails, setFilterDetails }) => {

    const [salary, setSalary] = useState(50000);

    //console.log(filterDetails);

    const handleCheck = (key, value) => {
        setFilterDetails({ ...filterDetails, [key]: value });
        //console.log(filterDetails);
        
    };

    useEffect(() => {

        setFilterDetails({...filterDetails,salary:salary})

    }, [salary])

    return (
        <div className="lg:min-w-max pt-3">

            <div className=' bg-white p-5 rounded-2xl'>
                <h1 id='he' className=' font-semibold text-2xl'>Filter By</h1>

                <div className=' my-5'>
                    <h1 id='pa' className=' text-xl mb-3'>Job Type</h1>

                    <div className=' grid lg:grid-cols-2 gap-2'>
                        <div className=' flex gap-2'>
                            <input checked={filterDetails.fullTime === 1} onChange={(e) => handleCheck("fullTime", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="fulltime" />
                            <label htmlFor="fulltime">Full time</label>
                        </div>
                        <div className=' flex gap-2'>
                            <input checked={filterDetails.internship === 1} onChange={(e) => handleCheck("internship", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Internship" />
                            <label htmlFor="Internship">Internship</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.contract === 1} onChange={(e) => handleCheck("contract", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Contract" />
                            <label htmlFor="Contract">Contract</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.freelance === 1} onChange={(e) => handleCheck("freelance", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Freelance" />
                            <label htmlFor="Freelance">Freelance</label>
                        </div>
                    </div>
                </div>

                <hr className=' text-blue-300' />

                <div className=' my-5'>
                    <h1 id='pa' className=' text-xl mb-3'>Job Category</h1>

                    <div className=' grid lg:grid-cols-2 gap-2'>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.design === 1} onChange={(e) => handleCheck("design", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Design" />
                            <label htmlFor="Design">Design</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.developer === 1} onChange={(e) => handleCheck("developer", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Developer" />
                            <label htmlFor="Developer">Developer</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.marketing === 1} onChange={(e) => handleCheck("marketing", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Marketing" />
                            <label htmlFor="Marketing">Marketing</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.sales === 1} onChange={(e) => handleCheck("sales", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Sales" />
                            <label htmlFor="Sales">Sales</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.management === 1} onChange={(e) => handleCheck("management", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Management" />
                            <label htmlFor="Management">Management</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.finance === 1} onChange={(e) => handleCheck("finance", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Finance" />
                            <label htmlFor="Finance">Finance</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.engineer === 1} onChange={(e) => handleCheck("engineer", e.target.checked ? 1 : 0)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="Other" />
                            <label htmlFor="Other">Engineer</label>
                        </div>
                    </div>
                </div>

                <hr className=' text-blue-300' />

                <div className=' my-5'>
                    <h1 id='pa' className=' text-xl mb-3'>Minimum Salary <span className=' text-lg text-gray-500'>(in LPA)</span></h1>

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
                    <h1 id='pa' className=' text-xl mb-3'>Experience required</h1>

                    <div className=' grid lg:grid-cols-2 gap-2'>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.experience === 1} onChange={(e) => handleCheck("experience", e.target.checked && 1)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="lt1year" />
                            <label htmlFor="lt1year">&lt; 1 year</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.experience === 2} onChange={(e) => handleCheck("experience", e.target.checked && 2)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="years1to2" />
                            <label htmlFor="years1to2">1 to 2 Years</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.experience === 3} onChange={(e) => handleCheck("experience", e.target.checked && 3)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="years3to5" />
                            <label htmlFor="years3to5">2 to 5 Years</label>
                        </div>
                        <div className=' flex gap-2'>
                            < input checked={filterDetails.experience === 5} onChange={(e) => handleCheck("experience", e.target.checked && 5)} className=' w-4 md:w-5 accent-blue-200 ' type="checkbox" name="" id="gt5years" />
                            <label htmlFor="gt5years">5+ Years</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JobFilter