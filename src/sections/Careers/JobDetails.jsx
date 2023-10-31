/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import JobBanner from './JobBanner'
import ContactUsComponent from '../../components/Contact Us/ContactUsComponent'
import Footer from '../Footer Section/Footer'
// import Header from '../Header Section/Header'
import JobApplicationForm from './JobApplicationForm'

const JobDetails = () => {
    return (
        <div className="md:pt-24">
            {/* <Header /> */}
            <JobBanner />
            <div className='px-8 md:px-52 py-16'>
                <div className='flex flex-col gap-4'>
                    <h4 className='font-bold '>Job Brief</h4>
                    <div className='text-[16px]'>The HR Intern will support the HR team in various administrative and operational tasks to gain hands-on experience in human resources functions and contribute to the smooth operation of the HR department.</div>
                   
                </div>


                <div className='flex py-4 md:py-16 flex-col gap-4'>
                    <h4 className='font-bold'>Responsibilities:</h4>
                    <ul className='flex flex-col list-disc md:pl-16'>
                        <li className='text-[16px]'>Assist the TA team in initial screening of the candidates for technical and non technical positions </li>
                        <li className='text-[16px]'>Convert resumes of shortlisted candidates to VentureDive's profile format for further processing
                        </li>
                        <li className='text-[16px]'>Assist in scheduling interviews of the shortlisted candidates
                        </li>
                    </ul>

                </div>
                <div className='flex py-4 md:py-0 flex-col gap-4'>
                    <h4 className='font-bold'>Requirements:</h4>
                    <ul className='flex flex-col list-disc md:pl-16'>
                        <li className='text-[16px]'>Bachelor's in Human Resource Management or similar field, or students in their last semester</li>
                        <li className='text-[16px]'>Should be hands on in the microsoft suite (powerpoint, word, excel, etc.)
                        </li>
                        <li className='text-[16px]'>Excellent verbal and written communication skills.
                        </li>
                        <li className='text-[16px]'>Ability to work independently
                        </li>
                        <li className='text-[16px]'>Ability to manage and handle multiple tasks
                        </li>
                    </ul>

                </div>
                <div className='flex flex-col py-6 gap-4'>
                    <div className='font-bold text-[16px]'>Are you ready to put your ideas into products and solutions that will be used by millions?
                    </div>
                    <div className='text-[16px]'>You will find VentureDive to be a quick pace, high standards, fun and a rewarding place to work at. Not only will your work reach millions of users world-wide, you will also be rewarded with competitive salaries and benefits. If you think you have what it takes to be a VenDian, come join us ... we're having a ball!
                    </div>
                </div>
            </div>

            <JobApplicationForm />
            <ContactUsComponent />
            <Footer />
        </div>
    )
}

export default JobDetails
