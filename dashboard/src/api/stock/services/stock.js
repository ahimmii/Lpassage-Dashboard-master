module.exports = {
	getStock: async (body) => {
		try {
			const stock = await strapi?.entityService?.findMany(
				"api::ingredient-stock.ingredient-stock",
				{
					populate: {
						Ingredient: true,
					},
					// sort be creating time
					sort: "createdAt:desc",
					// get just one element
					limit: 1,
				}
			);

			return {
				data: stock[0].Ingredient,
				createdAt: stock[0].createdAt,
			};
		} catch (err) {
			return err;
		}
	},

	updateStock: async (body) => {
		try {
			// body example:
			//	{ data: [
			//		{ value: String, key: Number, qte: Number, prix_par_unite: Number, unit: String },
			//	]}

			// update last stock in database
			const stock = await strapi?.entityService?.findMany(
				"api::ingredient-stock.ingredient-stock",
				{
					populate: {
						Ingredient: true,
					},
					// sort be creating time
					sort: "createdAt:desc",
					// get just one element
					limit: 1,
				}
			);

			// update stock
			await stock[0].Ingredient.forEach((ingredient) => {
				body.data.forEach((item) => {
					if (
						ingredient.name.toLowerCase() ==
						item.value.toLowerCase()
					) {
						ingredient.Quantites = item.qte;
						ingredient.prix_par_unit = item.prix_par_unite;
						ingredient.unit = item.unit;
					}
				});
			});

			// save stock
			const updatedStock = await strapi?.entityService?.update(
				"api::ingredient-stock.ingredient-stock",
				stock[0].id,
				{
					data: {
						Ingredient: stock[0].Ingredient,
					},
				}
			);

			//console.log(updatedStock);
			////throw (-1);

			return {
				data: updatedStock,
			};
		} catch (err) {
			return err;
		}
	},
};
