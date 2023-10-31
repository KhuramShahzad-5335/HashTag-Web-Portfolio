import { configureStore } from '@reduxjs/toolkit'
import { blogReducer } from './reducers/blogReducer'
import { jobApplicationReducers } from './reducers/jobApplicationReducer'
import { contactReducer } from './reducers/contact'

export const server = "https://hashtag-omega.vercel.app/api"

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        jobApplication: jobApplicationReducers,
        contact: contactReducer
    },
})


