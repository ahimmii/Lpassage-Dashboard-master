"use strict";
const env = require("dotenv").config();
const axios = require("axios");

module.exports = {
	/**
	 * An asynchronous register function that runs before
	 * your application is initialized.
	 *
	 * This gives you an opportunity to extend code.
	 */
	register(/*{ strapi }*/) {},

	/**
	 * An asynchronous bootstrap function that runs before
	 * your application gets started.
	 *
	 * This gives you an opportunity to set up your data model,
	 * run jobs, or perform some special logic.
	 */
	bootstrap({ strapi }) {
		var io = require("socket.io")(strapi.server.httpServer, {
			cors: {
				// cors setup
				origin: process.env.FRONTEND_URL,
				methods: ["GET", "POST"],
				allowedHeaders: ["my-custom-header"],
				credentials: true,
			},
		});

		io.use((socket, next) => {
			const token = socket.handshake.auth.token;

			// check if user is authenticated using jwt
			axios
				.get(`http://localhost:1337/api/users/me`, {
					headers: {
						Authorization: `Bearer ${token}`,
						withCredentials: true,
					},
				})
				.then((res) => {
					if (res.status === 200 && res.data && res.data.id) {
						// user is authenticated
						//console.log(res.data)
						return next();
					}
				})
				.catch((err) => {
					console.log("@User is not authenticated");
					// respond with error
					return next(new Error("Authentication error"));
				});
		}).on("connection", async function (socket) {
			//console.log(strapi.query("categores", "category").find("", "*"));
			// get all categories from database
			// send categories to client
			console.log("@User is connected");

			socket.on("orderCreated", async (data) => {
				console.log("@order created");
				socket.broadcast.emit("newOrder", data);
				socket.broadcast.emit("orderReceived");
			});

			socket.on("updateOrderStatus", async (data) => {
				socket.broadcast.emit("orderStatusUpdated", data);
			});

			//socket.on("getCategories", async () => {
			//	console.log("getCategories");
			//	const categories = await strapi.db
			//		.query("api::category.category")
			//		.findMany();
			//	socket.emit("categories", categories);
			//});

			socket.on("disconnect", () => {
				console.log("@user disconnected");
			});
		});
	},
};

//Listening for a connection from the frontend
//  socket.on("join", ({ username }) => {
//    // Listening for a join connection
//    console.log("user connected");
//    console.log("username is ", username);
//    if (username) {
//      socket.join("group"); // Adding the user to the group
//      socket.emit("welcome", {
//        // Sending a welcome message to the User
//        user: "bot",
//        text: `${username}, Welcome to the group chat`,
//        userData: username,
//      });
//    } else {
//      console.log("An error occurred");
//    }
//  });
//  socket.on("sendMessage", async (data) => {
//    // Listening for a sendMessage connection
//    let strapiData = {
//      // Generating the message data to be stored in Strapi
//      data: {
//        user: data.user,
//        message: data.message,
//      },
//    };
//    var axios = require("axios");
//    await axios
//      .post("http://localhost:1337/api/messages", strapiData) //Storing the messages in Strapi
//      .then((e) => {
//        socket.broadcast.to("group").emit("message", {
//          //Sending the message to the group
//          user: data.username,
//          text: data.message,
//        });
//      })
//      .catch((e) => console.log("error", e.message));
//  });
