const ThreeCards = () => {
    return (
        <>
            <section className="text-gray-600 md:px-16 body-font">
                <div className="   px-6 py-12 mx-auto ">
                    <h3 className='py-8 text-[20px] md:text-3xl font-semibold text-center '>Employment At HashtagWeb Offers Adaptability, Security, And Ongoing Growth
                    </h3>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full flex items-center flex-col border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-[24rem] md:h-36 md:w-full w-[60%]  object-cover object-center" id='thekKaro' src="pehli.svg" alt="card" />
                                <div className="flex gap-1 flex-col py-2">
                                    <h2 className='text-center md:text-xl text-blue-600 font-bold text-[20px]'>Thriving</h2>
                                    <p className="leading-relaxed px-4 mb-3 md:w-[90%] md:ml-4 text-[12px] md:text-[1rem] text-justify md:px-0">A rich platform of opportunities and learning that gives room for creativity and innovation, resulting in fast-tracking your development as a leader.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full flex items-center flex-col border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-[24rem] md:h-36 md:w-full w-[60%] object-cover object-center" id='thekKaro' src="dosri.svg" alt="card" />
                                <div className="flex gap-1 flex-col py-2">
                                    <h2 className='text-center md:text-xl text-blue-600 font-bold text-[20px]'>Empowering</h2>
                                    <p className="leading-relaxed px-4 text-justify mb-3 md:w-[90%] md:ml-4 text-[12px] md:text-[1rem] md:px-0">Driving strength and diversity by empowering women on every step of their career by providing the best healthcare and facilities on the house for the growing female workforce.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 flex items-center flex-col border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-[24rem] w-[60%] md:h-36 md:w-full object-cover object-center" id='thekKaro' src="tesri.svg" alt="card" />
                                <div className="flex gap-1 flex-col py-2">
                                    <h2 className='text-center text-[20px] md:text-xl text-blue-600 font-bold'>Rewarding</h2>
                                    <p className="leading-relaxed text-justify px-4 md:px-0 mb-3 text-[12px] md:w-[90%] md:ml-4 md:text-[1rem]">Equitable rewards by competitive bonuses and increments, along with a considerate approach to work-life balance, stress-free zones, and more.</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
        </>
    )
}

export default ThreeCards