module.exports = {

  async getStock(ctx, next) {
    try {

      const data = await strapi.service("api::stock.stock").getStock();
      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },

  async findStock(ctx) {
    try {
      
      const { body } = ctx.request;
      const data = await strapi.service("api::stock.stock").findStock(body);
      if (data == -1) {
        throw new Error('Impossible de mettre à jour le stock');
      }

      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },

  async updateStock(ctx, next) {
    try {
      
      const { body } = ctx.request;
      const data = await strapi.service("api::stock.stock").updateStock(body);
      if (data == -1) {
        throw new Error('Impossible de mettre à jour le stock');
      }

      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },

};
