import axios from "axios";
import { server } from "../store";


export const contactUs = (name, email, phoneNo, business, content, subject) => async (dispatch) => {
    try {
        dispatch({
            type: "contactRequest",
        });


        const config = {

            headers: { "Content-Type": "application/json" },

            withCredentials: true,
        };


        const { data } = await axios.post(
            `${server}/contact`,
            { name, email, phoneNo, business, content, subject },
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