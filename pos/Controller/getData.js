import axios from "axios";
import { backEndUrl } from "./urls";


let Get_Data = function (path) {
    return new Promise((res, rej) => {
        const config = {
           headers: { Authorization: `Bearer ${localStorage.getItem('lpasSage_token')}` },
           withCredentials: true
        };
        
        axios
        	.get(`${backEndUrl}${path}`, config)
        	.then(function (response) {
        		// handle success
        		res(response.data);
        	})
        	.catch(function (error) {
        		// handle error
        		rej(error);
        	});
    });
}

export default Get_Data;