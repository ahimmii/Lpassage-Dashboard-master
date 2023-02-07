//    *    *    *    *    *    *
//    ┬    ┬    ┬    ┬    ┬    ┬
//    │    │    │    │    │    |
//    │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
//    │    │    │    │    └───── month (1 - 12)
//    │    │    │    └────────── day of month (1 - 31)
//    │    │    └─────────────── hour (0 - 23)
//    │    └──────────────────── minute (0 - 59)
//    └───────────────────────── second (0 - 59, OPTIONAL)

module.exports = {
	"0 3 * * *": async ({ strapi }) => {
		// get time of mid night of today and tomorrow
		const midNightTomorrow = new Date(
			new Date().setHours(0, 0, 0, 0) + 86400000
		);
		const midNightToday = new Date(new Date().setHours(0, 0, 0, 0));

		try {
			// get ingredients that will expire today
			// stock.Ingredient [{
			//	__component: 'ingredients-stock.ingredient',
			//	id: Number,
			//	name: String,
			//	Quantites: Number,
			//	type: String,
			//	prix_par_unit: Number,
			//	unit: Character
			//  }, ...]
			const stock = (
				await strapi?.entityService?.findMany(
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
				)
			)[0].Ingredient;

			// get matire premiers of last 24 hours
			//	matierePremiere : [{
			//	Name: {
			//	  qte_consommee: Number,
			//  }, ...]
			const matierePremiere = (
				await strapi
					.service("api::matiere-premiere.matiere-premiere")
					.matierePremiere({
						data: {
							gte: midNightToday.getTime(),
							lte: midNightTomorrow.getTime(),
						},
					})
			).data.ingredients;

			// remove qte consommee from stock
			await matierePremiere.forEach((ingredient) => {
				stock.forEach((stockIngredient) => {
					if (stockIngredient.name === Object.keys(ingredient)[0]) {
						stockIngredient.Quantites -= Number(ingredient[Object.keys(ingredient)[0]].qte_consommee);
						// set to 0 if negative, to avoid negative stock
						if (stockIngredient.Quantites < 0) {
							stockIngredient.Quantites = 0;
						}
					}
				});
			});

			stock.forEach((element) => {
				if (element.name == "Frites") {
					console.log(element);
				}
			});

			// post stock
			const res = await strapi.entityService.create(
				"api::ingredient-stock.ingredient-stock",
				{
					data: {
						Ingredient: await stock.map((ingredient) => {
							return {
								__component: "ingredients-stock.ingredient",
								name: ingredient.name,
								Quantites: ingredient.Quantites,
								type: ingredient.type,
								prix_par_unit: ingredient.prix_par_unit,
								unit: ingredient.unit,
							};
						}),
					},
				}
			);
			//console.log(res);
		} catch (err) {
			console.log(err);
		}
	},
};
