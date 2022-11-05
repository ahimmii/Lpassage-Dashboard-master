// create socket connection
import { backEndUrl } from "../controller/urls.token";
import io from "socket.io-client";

const socketio = io(backEndUrl);

export default socketio;