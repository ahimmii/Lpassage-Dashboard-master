import axios from "axios";
import { backEndUrl } from "./urls.token";

const confirmReady = (order, data) => {

	if (window)
        var token = localStorage.getItem('lapassage_token_kitchen');

	const config = {
		headers: { Authorization: `Bearer ${token}` },
		withCredentials: true
	};
	
	return new Promise((res, rej) => {
		axios.put(backEndUrl + "/api/orders/" + order.id, {data}, config).then(Response => {
			res(Response.data);
		}).catch(err => {
			rej(err);
		})
	})
}


export default confirmReady;