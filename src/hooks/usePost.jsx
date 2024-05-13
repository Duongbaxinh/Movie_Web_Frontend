import { TroubleshootRounded } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
const usePost = (url, body = {}) => {
    let data;
    const postData = async () => {

        try {
            data = await axios.post(url, { ...body });
        } catch (error) {
            setIsError(error);
        }
    };
    postData();

    return data;
};

export default usePost;
