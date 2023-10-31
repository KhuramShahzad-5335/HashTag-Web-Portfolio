import { createReducer } from "@reduxjs/toolkit";


export const blogReducer = createReducer({}, {


    getAllBlogsRequest: (state) => {
        state.loading = true
    },

    getAllBlogsSuccess: (state, action) => {
        state.loading = false
        state.blogs = action.payload.blogs
        state.featuredBlog = action.payload.featuredBlog
        state.latestBlogs = action.payload.latestBlogs
        state.resultPerPage = action.payload.resultPerPage
        state.relatedBlogs = action.payload.relatedBlogs
        state.blogsCount = action.payload.blogsCount
        state.filterBlogsCount = action.payload.filterBlogsCount
        state.error = null
    },

    getAllBlogsFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    getBlogDetailsRequest: (state) => {
        state.loading = true
    },

    getBlogDetailsSuccess: (state, action) => {
        state.loading = false
        state.singleBlog = action.payload.blogWithImage
        state.error = null
    },

    getBlogDetailsFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },


})