import axios from "axios";
import { server } from "../store";


export const jobApplication = (fullname, email, phoneNo, linkedInProfile, city) => async (dispatch) => {
    try {
        dispatch({
            type: "jobApplicationRequest",
        });


        const config = {

            headers: { "Content-Type": "application/json" },

            withCredentials: true,
        };

        console.log("hi");

        const { data } = await axios.post(
            `${server}/application/job`,
            { fullname, email, phoneNo, linkedInProfile, city },
            config
        );


        dispatch({
            type: "jobApplicationSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "jobApplicationFail",
            payload: error.response.data.message,
        });
    }
};


