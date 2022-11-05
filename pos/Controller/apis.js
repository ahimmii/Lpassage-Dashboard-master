import { logIn } from "./logIn";
import Get_Data from "./getData";
import post_data from "./postData";

const getTypes = (path) => {
	return Get_Data(path);
};

const getSideBarLinks = (path) => {
	return new Promise((res, rej) => {
		if (path == "/sidebarLinks") {
			setTimeout(
				() =>
					res([
						{
							name: "Pos",
							href: "/home",
							icon: "/Images/icons/pos.svg",
						},
						{
							name: "historique",
							href: "/history",
							icon: "/Images/icons/history.svg",
						},
					]),
				0
			);
		}
	});
};

const getPlacesDeConsomation = (path) => {
	return new Promise((res, rej) => {
		if (path == "/placesDeConsomation") {
			res([
				{ name: "Livrasion", image: "/Images/orderTypeIcons/livrasion.svg", id: 0 },
				{ name: "Sur table", image: "/Images/orderTypeIcons/surTable.svg", id: 1 },
				{ name: "Importer", image: "/Images/orderTypeIcons/importer.svg", id: 2 },
			]);
		}
	});
};

const getProducts = (path) => {
	return Get_Data(path);
};

const getchoix_accompagnements = (path) => {
	return Get_Data(path);
};

const getsaucess = (path) => {
	return Get_Data(path);
};

const getHistory = (path, size) => {
	return Get_Data(path);
};

const getUser = (path) => {
	return Get_Data(path);
};
const postOrders = (path, orders) => {
	return new Promise(async (res, rej) => {

		await post_data(path, orders)
			.then((Response) => {
				// handle response
				if (Response.status == 200) {
					// handle success
					res(Response.data);
				} else {
					// handle error
					console.error("error!");
				}
			})
			.catch((err) => {
				rej(err);
			});
	});
};

const logout = () => {
	return new Promise((res, rej) => {
		try {
			localStorage.removeItem("lpasSage_token");
			res({ message: "Logout successfully" });
		} catch (e) {
			res({ message: "Error happened when trying to logout!" });
		}
	});
};

export {
	logIn,
	getSideBarLinks,
	getPlacesDeConsomation,
	getTypes,
	getProducts,
	getchoix_accompagnements,
	getsaucess,
	getHistory,
	postOrders,
	logout,
	getUser,
};
