import axios from "axios";
import { backEndUrl, store } from "./urls.token";


let getOrders = function (path) {
    return new Promise((res, rej) => {
        
        if (window)
            var token = localStorage.getItem('lapassage_token_kitchen');
		
        const config = {
        //   headers: { Authorization: `Bearer ${localStorage.getItem('lpasSage_token')}` },
           headers: { Authorization: `Bearer ${token}` },
           withCredentials: true
        };
        
        axios.get(`${backEndUrl}${path}`, config)
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

export default getOrders;