module.exports = {
  async gestionDesServeurs(ctx, next) {
    try {
      // gat data from request body
      const { body } = ctx.request;

      const data = await strapi
        .service("api::gestion-des-serveurs.gestion-des-serveurs")
        .gestionDesServeurs(body);

		//console.log(data)

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
