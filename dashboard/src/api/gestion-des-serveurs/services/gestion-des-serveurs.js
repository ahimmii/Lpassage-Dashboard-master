module.exports = {
	gestionDesServeurs: async (body) => {
    try {
		
		let all_plats = [];

		// GET ALL ORDERS BETWEEN TWO DATES
		const orders = await strapi?.entityService?.findMany("api::order.order", {
			filters: {
				createdAt: {
					$gte: body.data.gte,
					$lte: body.data.lte
				},
				order_status: {
					$ne: "0"
				}
			},
			populate: {
				plats: true,
				user: true
			},
		});

		// GET ALL USERS
		const users = (await strapi?.entityService?.findMany("plugin::users-permissions.user", {})).map(el => {
			return {
				id: el.id,
				username: el.username,
			}
		})
		// set all plats from orders
		await orders?.forEach(order => {
			order?.plats?.forEach(plat => {
				plat.user = order.user
				all_plats.push(plat)
			})
		})

		//console.log("all_plats: ", all_plats)

		let total_revunue = 0;
		// filter all plats by user
		function filterData(users, orders) {
			let titles = new Set();
	
			for (let x = 0; x < orders?.length; x++) {
				titles.add(orders[x].name);
			}
	
			titles = [...titles].map((e) => {
				return { name: e, /*orders: new Array(),*/ CA: 0, CAT: 0 };
			});
	
			for (let x = 0; x < users.length; x++) {
				users[x].data_orders = JSON.parse(JSON.stringify(titles));
			}

			//return ({users, orders})


			for (let u = 0; u < users.length; u++) {
				//loop users
				for (let o = 0; o < orders.length; o++) {
					//loop orders

					if (users[u].id == orders[o].user[0].id) {
						for (let d_o = 0; d_o < users[u].data_orders.length; d_o++) {
							//loop data_orders
							if (users[u].data_orders[d_o].name == orders[o].name) {
								//users[u].data_orders[d_o].orders.push(orders[o]);
								users[u].data_orders[d_o].CA += orders[o].price * orders[o].qte;
								users[u].data_orders[d_o].CAT += orders[o].qte;
								total_revunue += orders[o].price * orders[o].qte;
								break;
							}
						}
					}
				}
			}
			return users;
		}
		
		return {
		  //all_plats,
		  data: await filterData(users, all_plats),
		  total_revunue
		};
    } catch (err) {
      return err;
    }
  },
};
