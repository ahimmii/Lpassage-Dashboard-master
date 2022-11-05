import axios from "axios";
import { backEndUrl } from "./urls";


let Put_Data = function (path, data) {
    return new Promise((res, rej) => {
        
        const config = {
           headers: { Authorization: `Bearer ${localStorage.getItem('lpasSage_token')}` },
           withCredentials: true
        };
        
        axios.put(`${backEndUrl}${path}`, data, config).then(function (response) {
        		// handle success
        		res(response.data);
        	})
        	.catch(function (error) {
        		// handle error
        		rej(error);
        	});
    });
}

export default Put_Data;