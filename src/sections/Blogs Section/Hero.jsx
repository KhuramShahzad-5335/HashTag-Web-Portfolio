/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="mx-8 flex px-5 py-4 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl md:text-7xl font-bold text-3xl mb-4 text-blue-600">Insights and Expertise

                    </h1>
                    <p className="mb-8 leading-relaxed max-w-xl ">Dive into our blog space and explore a wealth of insights, expertise, and the latest happenings in the ever-evolving world of technology. From industry trends and best practices to innovative solutions and expert perspectives, our blogs provide you with valuable knowledge to stay ahead in the digital realm. Join us on this journey of discovery.</p>
                    <div className="flex justify-center">
                    <button className="inline-flex border-2 border-black rounded-2xl bg-white border-solid px-8 focus:outline-none text-blue-600 font-semibold hover:bg-blue-400 hover:text-white text-lg">Let's Talk</button>
                    {/* <h2>osjcposj</h2> */}
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="blog-banner.svg" />
                </div>
            </div>
        </section>
    )
}

export default Hero