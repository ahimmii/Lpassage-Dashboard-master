module.exports = {
  routes: [
    {
      method: "POST",
      path: "/gestion-des-serveurs",
      handler: "gestion-des-serveurs.gestionDesServeurs",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
