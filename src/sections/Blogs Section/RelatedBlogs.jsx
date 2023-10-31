import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../redux/actions/blog'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const RelatedBlogs = () => {

    const dispatch = useDispatch()

    const { relatedBlogs } = useSelector(state => state.blog)


    useEffect(() => {

        dispatch(getAllBlogs())

    }, [dispatch])
    return (

        <>

            {
                relatedBlogs?.map((blog) => (
                    <Link to={`/blog/${blog._id}`} className="p-4 md:w-full max-h-full" key={blog._id}>
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden">
                            <img className="lg:h-72 md:h-72 w-full object-cover object-center" src={blog?.image?.url} alt="blog" />
                            <div className="p-6 ">
                                <div className='flex gap-5 items-center py-2'>
                                    <img src="/kayla.jpg" alt="Author" className='rounded-full h-12 w-12' />
                                    <div className='flex justify-between'>
                                        <span>{blog?.author}  - </span>
                                        <span>&nbsp; {blog?.createdAt.slice(0, 10)}</span>
                                    </div>
                                </div>
                                <div className='text-blue-600 font-semibold py-2'>{blog?.category}</div>
                                <h2 className="title-font max-w-3xl sm:text-2xl text-[20px] mb-4 font-medium text-gray-900 py-2">{blog?.title}
                                </h2>

                                <p className='mb-8 leading-relaxed'><p>{blog?.shortDescription.slice(0,150)}</p>
                                </p>

                                <div className="flex">

                                    <button className=" inline-flex text-black border-0 bg-gray-400 font-semibold py-0.5 rounded-2xl px-8 focus:outline-none hover:bg-blue-600 text-lg hover:text-white transition duration-300 ease-in-out">Read More</button>
                                </div>

                            </div>
                        </div>
                    </Link>
                ))
            }


        </>

    )
}

export default RelatedBlogs
