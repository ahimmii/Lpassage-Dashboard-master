import axios from "axios";
import { backEndUrl } from "./urls";


let post_data = function (path, data) {
    return new Promise((res, rej) => {
        const config = {
           headers: { Authorization: `Bearer ${localStorage.getItem('lpasSage_token')}` },
           withCredentials: true
        };
        // console.log(data)
        axios
        	.post(`${backEndUrl}${path}`, {data: data}, config)
        	.then(function (response) {
        		// handle success
                res(response);
                // return (response)
                // console.log(response);
        	})
        	.catch(function (error) {
        		// handle error
        		rej(error);
        	});
    });
}

export default post_data;