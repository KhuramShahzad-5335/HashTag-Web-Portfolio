import { useEffect, useState } from 'react'
// import Header from '../Header Section/Header'
import Footer from '../Footer Section/Footer'
import Hero from './Hero'
import Featured from './Featured'
import BlogCards from './BlogCards'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../redux/actions/blog'
import { useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'

const Blogs = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch()

    const { resultPerPage, blogsCount } = useSelector(state => state.blog)

    const params = useParams();
    const keyword = params.keyword;

    const setTheCurrPage = (e) => {
        setCurrentPage(e);
    };

    useEffect(() => {
        dispatch(getAllBlogs(keyword, currentPage))
    }, [keyword, currentPage, dispatch])
    return (
        <div className="md:pt-24">
            {/* <Header /> */}
            <Hero />
            <Featured />
            <BlogCards />
            <div className='my-4'>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={blogsCount}
                    onChange={setTheCurrPage}
                    prevPageText="Pre"
                    nextPageText="Next"
                    firstPageText="First"
                    lastPageText="Last"
                    activeClass="pageItemActive"
                    linkClass="page-link"
                    itemClass="page-item"
                    activeLinkClass="pageLinkActive"
                />
            </div>

            < Footer />
        </div>
    )
}

export default Blogs