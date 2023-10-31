import axios from "axios";
import { server } from "../store";


export const addBlog = (formData) => async (dispatch) => {

    try {

        dispatch({
            type: "addBlogRequest"
        })

        const config = {

            headers: { "Content-Type": "multipart/form-data" },

            withCredentials: true,
        };




        const { data } = await axios.post(
            `${server}/Blog/new`,
            formData,
            config
        );


        dispatch({
            type: "addBlogSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "addBlogFail",
            payload: error.response.data.message
        })
    }
}


export const editBlog = (formData, id) => async (dispatch) => {

    try {

        dispatch({
            type: "editBlogRequest"
        })

        const config = {

            headers: { "Content-Type": "application/json" },

            withCredentials: true,
        };




        const { data } = await axios.put(
            `${server}/Blog/update/${id}`,
            formData,
            config
        );


        dispatch({
            type: "editBlogSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "editBlogFail",
            payload: error.response.data.message
        })
    }
}


export const deleteBlog = (id) => async (dispatch) => {

    try {

        dispatch({
            type: "deleteBlogRequest"
        })

        const config = {

            headers: { "Content-Type": "application/json" },

            withCredentials: true,
        };


        const { data } = await axios.delete(
            `${server}/Blog/delete/${id}`,
            config
        );


        dispatch({
            type: "deleteBlogSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "deleteBlogFail",
            payload: error.response.data.message
        })
    }
}


export const getAllBlogs = (keyword = "", currentPage = 1) => async (dispatch) => {
    try {
        dispatch({
            type: "getAllBlogsRequest",
        });
        
        let link = `${server}/blogs?keyword=${keyword}&page=${currentPage}`;
        
        const { data } = await axios.get(link, {
            withCredentials: true,
        });
        
        dispatch({
            type: "getAllBlogsSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "getAllBlogsFail",
            payload: error.response.data.message,
        });
    }
};




export const getBlogDetails = (id) => async (dispatch) => {

    try {

        dispatch({
            type: "getBlogDetailsRequest"
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        }

        const { data } = await axios.get(`${server}/blogs/${id}`, config)

        dispatch({
            type: "getBlogDetailsSuccess",
            payload: data
        })


    } catch (error) {
        dispatch({
            type: "getBlogDetailsFail",
            payload: error.response.data.message
        })
    }
}

