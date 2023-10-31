import React from 'react'
import SingleBlogCard from './SingleBlogCard'
import LatestBlogs from './LatestBlogs'

const BlogCards = () => {

    return (

        <div className="flex min-w-screen justify-center mx-au md:ml-2.5">
            <div className="flex-grow p-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 ">
                    <SingleBlogCard />
                </div>
            </div>


            <LatestBlogs />
        </div>

    )
}

export default BlogCards