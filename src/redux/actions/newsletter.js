import axios from "axios";
import { server } from "../store";


export const newsLetterSubscribe = (email) => async (dispatch) => {
    try {
        dispatch({
            type: "contactRequest",
        });


        const config = {

            headers: { "Content-Type": "application/json" },

            withCredentials: true,
        };


        const { data } = await axios.post(
            `${server}/newsletter/subscribe`,
            { email},
            config
        );


        dispatch({
            type: "contactSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "contactFail",
            payload: error.response.data.message,
        });
    }
};