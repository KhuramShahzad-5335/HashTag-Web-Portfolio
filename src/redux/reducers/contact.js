import { createReducer } from "@reduxjs/toolkit";


export const contactReducer = createReducer({}, {

    contactRequest: (state) => {
        state.loading = true
    },

    contactSuccess: (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.error = null
    },

    contactFail: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    clearMessage: (state) => {
        state.message = null
    }

})