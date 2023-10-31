import { createReducer } from "@reduxjs/toolkit";


export const jobApplicationReducers = createReducer({}, {

    jobApplicationRequest: (state) => {
        state.loading = true
    },

    jobApplicationSuccess: (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.error = null
    },

    jobApplicationFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },

    clearMessage: (state) => {
        state.message = null
    }


})