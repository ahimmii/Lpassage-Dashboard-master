module.exports = {
	matierePremiere: async (body) => {
	  try {
		  // get all ingredients in ingredients list
		  const ingredients = (await strapi.entityService.findMany("api::ingredient-list.ingredient-list", {
			  populate: {
				  list: true,
			  },
			  //allow population to natures
			  populate: {
				  list: {
					  populate: "*"
				  }
			  }
		  })).list.map(el => {
			//   console.log(el)
			  return {
				  [el.Name]: {
					  nature: el.natures[0].name,
					  qte_consommee: 0,
					  unite: el.unites,
					  le_cout: 0,
  
					  qte_restante: 0,
					  qte_restante_en_dhs: 0,
					  ratio_matiere: 0,
  
					  stock: {
						  qte: 0,
						  prix: 0,
					  }
				  }
			  }
		  })
		  //console.log(ingredients)
  
		  const orders = await strapi.entityService.findMany("api::order.order", {
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
				  plats: true
			  }
		  });
  
		  await orders.forEach(order => {
			  order?.plats?.forEach(plat => {
				  for (let i = 0; i < plat?.fiche_technique_de_fabrication?.length; i++) {
					  let ingredient = plat?.fiche_technique_de_fabrication[i];
  
					  ingredients?.forEach(ing => {
						  if (ing[ingredient?.Ingredients]) {
							  ing[ingredient?.Ingredients].qte_consommee += Number(ingredient?.Quantites) * Number(plat?.qte);
							  if (ingredient?.Unites == "g" || ingredient?.Unites == "cl")
								  ing[ingredient?.Ingredients].le_cout += Number(ingredient?.prix_par_unit) * (Number(ingredient?.Quantites) / 1000);
							  else
								  ing[ingredient?.Ingredients].le_cout += Number(ingredient?.prix_par_unit) * Number(ingredient?.Quantites);
						  }
					  })
				  }
			  })
		  })
  
		  // get ingredient-stocks
		  const ingredientStocks = await strapi.entityService.findMany("api::ingredient-stock.ingredient-stock", {
			  populate: {
				  Ingredient: true
			  },
			  filters: {
				  createdAt: {
					  $gte: body.data.gte,
					  $lte: body.data.lte
				  },
			  }
		  });
		  
		  await ingredientStocks.forEach((stockDay) => {
			  //console.log(stockDay)
			  stockDay?.Ingredient?.forEach((ingredient) => {
				  ingredients?.forEach((ing) => {
					  if (ing[ingredient?.name]) {
  
						  ing[ingredient.name].stock.qte += Number(ingredient.Quantites);
  
						  if (ingredient.unit == "g" || ingredient.unit == "cl")
							  ing[ingredient.name].stock.prix += (Number(ingredient.prix_par_unit) * (Number(ingredient.Quantites) / 1000));
						  else
							  ing[ingredient.name].stock.prix += (Number(ingredient.prix_par_unit) * Number(ingredient.Quantites));
					  }
				  })
			  })
		  })
  
		  //console.log(ingredientStocks)
  
		  await ingredients?.forEach(ing => {
			  //console.log(ing)
			  for (let key in ing) {
				  	if (ing[key].stock.qte <= 0 && ing[key].qte_restante_en_dhs <= 0 || ing[key].stock.qte == null && ing[key].qte_restante_en_dhs == null)
					{
				  		ing[key].qte_restante = 0;
						ing[key].qte_restante_en_dhs = 0;
					}	
					else
					{
				  		ing[key].qte_restante = ing[key].stock.qte - ing[key].qte_consommee;
				  		ing[key].qte_restante_en_dhs = ing[key].stock.prix - ing[key].le_cout;
					}
  
				  if (ing[key].qte_restante_en_dhs > 0 && ing[key].qte_restante > 0)
				  ing[key].ratio_matiere = (ing[key].qte_restante_en_dhs / ing[key].qte_restante) * 100;
			  }
		  })
  
		  //console.log(ingredientStocks)
		  //console.log(ingredients)
  
		return {
		  data: {
			  ingredients,
			  total_orders: orders.length,
			  revenue: orders.reduce((acc, order) => acc + order.total_price, 0),
		  },
		};
	  } catch (err) {
		return err;
	  }
	},
  };
  