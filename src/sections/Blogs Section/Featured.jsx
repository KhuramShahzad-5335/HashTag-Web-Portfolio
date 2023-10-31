import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../redux/actions/blog'
import { Link } from 'react-router-dom'

const Featured = () => {

    const dispatch = useDispatch()

    const { featuredBlog } = useSelector(state => state.blog)

    useEffect(() => {

        dispatch(getAllBlogs())

    }, [])
    return (
        <>
            {
                featuredBlog && <section className="text-gray-600 body-font">
                    <div className=" mx-auto flex px-5 py-4 md:py-16 md:flex-row flex-col items-center md:pl-12">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">

                            <div className='flex flex-col md:flex-row md:justify-between min-w-[80vw] mb-8 gap-4'>
                                <h2 className='font-bold pr-4 md:pr-0 text-center text-blue-600 md:text-5xl text-2xl'>Featured Blog</h2>
                                <div className="relative flex items-center">
                                    {/* <input
                                        type='text'
                                        placeholder='Search'
                                        className='py-2 px-6 font-semibold bg-gray-100 rounded-lg' 
                                    /> */}

                                    {/* <div
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                                        style={{ backgroundImage: "url('search-icon.svg')" }} // Replace with your search icon image path
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-4.351-4.351a8 8 0 111.414-1.414L22.414 22.42"
                                            />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>

                            <Link to={`/blog/${featuredBlog[0]._id}`}>
                                <img className="object-cover h-full w-full px-0 mx-0 object-center rounded-2xl" alt="hero" src={featuredBlog[0]?.image?.url} />
                            </Link>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-2 mt-4">
                            <div className='flex mt-14 gap-5 items-center'>
                                <img src="/kayla.jpg" alt="Author" className='rounded-full h-8 w-8 md:h-12 md:w-12' />
                                <div className='flex justify-between'>
                                    <span>{featuredBlog[0].author} - </span>
                                    <span>&nbsp; {featuredBlog[0].createdAt.slice(0, 10)}</span>
                                </div>
                            </div>
                            <div className='text-blue-600 font-semibold'>{featuredBlog[0].category}</div>
                            <Link to={`/blog/${featuredBlog[0]._id}`} className="title-font max-w-2xl sm:text-2xl md:text-4xl text-[20px] mb-2 font-medium text-gray-900">{featuredBlog[0].title}
                            </Link>
                            <p className="mb-8 leading-relaxed max-w-xl line-tight">
                                {featuredBlog[0].shortDescription.slice(0.150)}
                            </p>
                            <div className="flex justify-center">

                                <Link to={`/blog/${featuredBlog[0]._id}`} className="inline-flex text-black border-0 bg-gray-400 font-semibold py-0.5 rounded-2xl px-8 focus:outline-none hover:bg-blue-600 text-lg hover:text-white transition duration-300 ease-in-out">Read More</Link>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Featured
