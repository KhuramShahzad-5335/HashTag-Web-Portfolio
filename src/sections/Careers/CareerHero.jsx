import React from 'react'

const CareerHero = () => {
    return (
        <section className="text-gray-600 body-font md:mt-28">
            <div className=" mx-auto flex px-5 py-0 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h3 className='font-bold text-[20px] md:text-xl py-2'>Careers At HashtagWeb</h3>
                    <h1 className="title-font sm:text-4xl md:text-7xl font-bold text-[30px] mb-4 text-blue-600">Steer Your Career In The Right Direction</h1>
                    <p className="mb-8 leading-relaxed max-w-xl text-[12px] ">Build a career that suits your lifestyle, in a company where your voice matters. Join us on our journey to solve real world problems for the world's leading brands, through technology.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex border-2 border-black rounded-2xl bg-white border-solid px-8 focus:outline-none text-blue-600 font-semibold hover:bg-blue-400 hover:text-white text-lg">Let's Talk</button>

                    </div>
                </div>
                <div className="lg:max-w-xl lg:w-full h-full md:w-1/2 w-[80%]">
                    <img className="object-cover object-center rounded" alt="hero" src="career-hero.svg" />
                </div>
            </div>
        </section>
    )
}

export default CareerHero
