import axios from "axios";
import { backEndUrl } from "./urls";

const logIn = (data) => {
	
	return new Promise((res, rej) => {
		axios.post(`${backEndUrl}/api/auth/local`, data)
            .then( (response) => {
		        res(response.data);
                localStorage.setItem('lpasSage_token', response.data.jwt);
				console.log(response.data.jwt)
		    }).catch( (error) => {
		        rej(error);
		    });
	});
};

export { logIn };
