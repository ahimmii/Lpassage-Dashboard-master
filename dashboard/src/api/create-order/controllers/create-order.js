module.exports = {
	async createOrder(ctx, next) {
		try {
			// gat data from request body
			const { body } = ctx.request;

			const data = await strapi.service("api::create-order.create-order").createOrder(body);

			console.log(data);
			ctx.body = data;

		} catch (err) {
			ctx.badRequest("Post report controller error", { moreDetails: err });
		}
	},
};
