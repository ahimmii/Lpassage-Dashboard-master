module.exports = {
	findFournisseur: async (body) => {
		try {
			
			const stock = await strapi?.entityService?.findMany(
				"api::table-fournisseur.table-fournisseur",
				{
					filters: {
						createdAt: {
							$gte: body.data.gte,
							$lte: body.data.lte
						},
					},
					populate: {
						fournisseur: true,
					},
					// sort be creating time
					sort: "createdAt:asc",
					// get just one element
				}
			);
			return {
				data: stock,
			};
		} catch (err) {
			return err;
		}
	},

	findOneFournisseur: async () => {
		try {
			const stock = await strapi?.entityService?.findMany(
				"api::table-fournisseur.table-fournisseur",
				{
					populate: {
						// Dynamic zone name
						fournisseur: true,
					},
					// sort be creating time
					sort: "createdAt:desc",
					// get just one element
					limit: 1
				}
			);

			return {
				data: stock[0].fournisseur,
				createdAt: stock[0].createdAt,
				id: stock[0].id,
			};
		} catch (err) {
			return err;
		}
	},


	updateFournisseur: async (body) => {

			// save stock
			const updatedfournisseur = await strapi?.entityService?.update(
				"api::table-fournisseur.table-fournisseur",
				body.id,
				{
					data: {
						fournisseur: body.data,
					},
				}
			);


	},

	addFournisseur: async (body) => {
		// save stock
		const addfournisseur = await strapi?.entityService?.update(
			"api::table-fournisseur.table-fournisseur",
			body.id,
			{
				data: {
					fournisseur: body.data
				},
			}
		);
	},

	createFournisseur: async () => {
		try {
			c = 0;
			const stock = await strapi?.entityService?.findMany(
				"api::table-fournisseur.table-fournisseur",
				{
					populate: {
						fournisseur: true,
					},
					// sort be creating time
					sort: "createdAt:desc",
					// get just one element
					limit: 1,
				}
			);
			const data = stock[0].fournisseur.map(el => {
				fournisseurs = {
					__component: el.__component,
					Name: el.Name,
					Montant: 0,
					Total: el.Total
				}
				return (fournisseurs)
			});
			// save stock
			const createfournisseur = await strapi?.entityService?.create(
				"api::table-fournisseur.table-fournisseur",
				{
					populate: {
						fournisseur: true,
					},
					data: {
						publishedAt: new Date(),
						fournisseur: data,
					},
				}
			);

			// throw (-1);

			return {
				data: createfournisseur,
			};
		} catch (err) {
			return err;
		}
	},

	deleteFournisseur: async (body) => {
		// try {
			
		// 	// save stock
		// 	const updatedfournisseur = await strapi?.entityService?.update(
		// 		"api::table-fournisseur.table-fournisseur",
		// 		stock[0].id,
		// 		{
		// 			data: {
		// 				fournisseur: stock[0].fournisseur,
		// 			},
		// 		}
		// 	);

		// 	// console.log(updatedfournisseur);
		// 	// throw (-1);

		// 	return {
		// 		data: updatedfournisseur,
		// 	};
		// } catch (err) {
		// 	return err;
		// }
	},
};
