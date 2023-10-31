import { useEffect } from 'react'
// import SingleBlogCard from './SingleBlogCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBlogDetails } from '../../redux/actions/blog'
import LatestBlogs from './LatestBlogs'
// import Header from '../Header Section/Header'
import Footer from '../Footer Section/Footer'
import RelatedBlogs from './RelatedBlogs'

const BlogPage = () => {

    const dispatch = useDispatch()

    const params = useParams()

    let id = params.id

    const { singleBlog } = useSelector(state => state.blog)


    useEffect(() => {
        dispatch(getBlogDetails(id))
    }, [dispatch, id])


    return (
        <div className="md:pt-36">
            {/* <Header /> */}
            <div className="flex min-h-full md:mb-[3rem] justify-center md:ml-2.5 ">
                {
                    singleBlog && <div className="flex-grow p-4 ">
                        <div className="grid grid-cols-1 min-h-screen md:pl-16 pt-2">
                            <div>
                                <div className=' flex pl-4 py-12 gap-4 flex-col'>
                                    <div className='font-bold text-lg text-blue-600'>{singleBlog?.category}</div>
                                    <h1 className='font-semibold text-[20px] md:text-3xl'>{singleBlog?.title}</h1>
                                    <div className='flex items-center gap-4'>
                                        <img src="/kayla.jpg" alt="Author" className='rounded-full h-12 w-12' />
                                        <p className='font-semibold'>{singleBlog?.author}</p>
                                        <p>Last Updated on {singleBlog?.createdAt.slice(0, 10)}</p>
                                    </div>
                                </div>


                                <div className='flex mb-4 flex-col'>
                                   {
                                        singleBlog?.image && <img src={singleBlog?.image?.url} className='md:ml-4 ml-0 max-h-[35rem] max-w-[60rem] rounded-xl' alt={singleBlog?.title} />
                                    }

                                </div>
                                <div className='flex px-4 flex-col py-2 gap-4'>
                                    <div dangerouslySetInnerHTML={{ __html: singleBlog?.content }} />
                                </div>


                                <div>
                                    <h4 className='text-3xl pl-4 '>Latest Posts:</h4>
                                    <div className='md:max-h-[900px] overflow-hidden grid md:grid-cols-2 grid-cols-1 '>
                                        <RelatedBlogs />
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                }


                <LatestBlogs />


            </div>

            <div className='min-mt-[53rem] md:mt-0'>
                <Footer />
            </div>
        </div>
    )
}

export default BlogPage
