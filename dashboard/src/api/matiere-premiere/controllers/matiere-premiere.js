module.exports = {
  async matierePremiere(ctx, next) {
    try {
      // gat data from request body
      const { body } = ctx.request;

      const data = await strapi.service("api::matiere-premiere.matiere-premiere").matierePremiere(body);
      
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
