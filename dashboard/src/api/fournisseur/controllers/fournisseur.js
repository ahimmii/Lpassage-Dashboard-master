module.exports = {

  async findFournisseur(ctx, next) {
    try {
      const { body } = ctx.request;

      const data = await strapi.service("api::fournisseur.fournisseur").findFournisseur(body);
      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },

  async findOneFournisseur(ctx, next) {
    try {

      const data = await strapi.service("api::fournisseur.fournisseur").findOneFournisseur();
      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Get report controller error", { moreDetails: err });
    }
  },

  async updateFournisseur(ctx, next) {
    try {
      
      const { body } = ctx.request;
      const data = await strapi.service("api::fournisseur.fournisseur").updateFournisseur(body);
      if (data == -1) {
        throw new Error('Impossible de mettre à jour le fournisseur');
      }

      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Put report controller error", { moreDetails: err });
    }
  },

  async createFournisseur(ctx, next) {
    try {
      
      const { body } = ctx.request;
      const data = await strapi.service("api::fournisseur.fournisseur").createFournisseur(body);
      if (data == -1) {
        throw new Error('Impossible de mettre à jour le fournisseur');
      }

      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },

  async addFournisseur(ctx, next) {
    try {
      
      const { body } = ctx.request;
      const data = await strapi.service("api::fournisseur.fournisseur").addFournisseur(body);
      if (data == -1) {
        throw new Error('Impossible de mettre à jour le fournisseur');
      }

      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },

  async deleteFournisseur(ctx, next) {
    try {
      
      const { body } = ctx.request;
      const data = await strapi.service("api::fournisseur.fournisseur").deleteFournisseur(body);
      if (data == -1) {
        throw new Error('Impossible de mettre à jour le fournisseur');
      }

      ctx.body = data;

    } catch (err) {
      ctx.badRequest("Put report controller error", { moreDetails: err });
    }
  },


};
