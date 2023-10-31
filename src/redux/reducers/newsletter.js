import { createReducer } from "@reduxjs/toolkit";


export const newsletterReducer = createReducer({}, {

    newsletterRequest: (state) => {
        state.loading = true
    },

    newsletterSuccess: (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.error = null
    },

    newsletterFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },

    clearMessage: (state) => {
        state.message = null
    }


})