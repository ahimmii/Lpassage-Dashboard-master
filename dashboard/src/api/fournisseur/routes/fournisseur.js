module.exports = {
  routes: [
    {
      method: "POST",
      path: "/find-fournisseur",
      handler: "fournisseur.findFournisseur",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/create-fournisseur",
      handler: "fournisseur.createFournisseur",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/findOne-fournisseur",
      handler: "fournisseur.findOneFournisseur",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/update-fournisseur",
      handler: "fournisseur.updateFournisseur",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/add-fournisseur",
      handler: "fournisseur.addFournisseur",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/delete-fournisseur",
      handler: "fournisseur.deleteFournisseur",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
