import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobApplication } from '../../redux/actions/jobApplicationAction'

const JobApplicationForm = () => {

    const dispatch = useDispatch()

    const { message } = useSelector(state => state.jobApplication)
    const [fullname, setFullname] = useState("")
    const [email, setemail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [linkedInProfile, setlinkedInProfile] = useState("")
    const [city, setCity] = useState("")

    const formSubmit = async (e) => {
        e.preventDefault()
        await dispatch(jobApplication(fullname, email, phoneNo, linkedInProfile, city))
        dispatch({ type: "clearMessage" })
        setFullname("")
        setemail("")
        setPhoneNo("")
        setlinkedInProfile("")
        setCity("")
    }

    useEffect(() => {
        if (message) {
            dispatch({ type: "clearMessage" })
        }
    }, [message])

    return (
        <section className="bg-white">
            <div className="py-2 lg:py-6 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center  pb-2">Apply Now</h2>
                <div className='flex gap-2 items-center py-4'>
                    <span className='text-xl font-bold' >Note : </span>
                    <span className='font-semibold text-red-500'>All Fields Are Required*</span></div>
                <form onSubmit={formSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="fullname" className="block mb-2 text-sm font-medium  ">Full Name</label>
                        <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" id="fullname" className="block p-3 w-full text-sm   rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:placeHolder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium  ">Your email</label>
                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" id="email" className="shadow-sm  border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:placeHolder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="abc@gmail.com" required />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium  ">Phone Number</label>
                        <input value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} type="number" id="phone" className="block p-3 w-full text-sm   rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:placeHolder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+1 00000000000" required />
                    </div>
                    <div>
                        <label htmlFor="linkedIn" className="block mb-2 text-sm font-medium  ">LinkedIn Profile URL</label>
                        <input value={linkedInProfile} onChange={(e) => setlinkedInProfile(e.target.value)} type="text" id="linkedIn" className="block p-3 w-full text-sm   rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:placeHolder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="LinkedIn Profile Link/URL" required />
                    </div>
                    <div>
                        <label htmlFor="citty" className="block mb-2 text-sm font-medium  ">City</label>
                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="city" className="block p-3 w-full text-sm   rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:placeHolder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="City" required />
                    </div>

                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg bg-primary-700 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Submit Application</button>
                </form>
            </div>
        </section>
    )
}

export default JobApplicationForm
