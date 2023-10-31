import React from 'react'

const JobBanner = () => {
    return (
        <div className='bg-blue-600 text-white'>
            <div className='flex flex-col py-4 justify-center items-center gap-5'>
                <div className='text-[14px] md:text-xl text-white'>Careers at Hashtag Web</div>
                <h3 className='font-bold text-2xl'>Frontend Web Developer</h3>
                <div className='text-[14px] md:text-xl text-white'>Multan, Pakistan | Internship | Entry Level </div>
            </div>
        </div>
    )
}

export default JobBanner
