module.exports = {
  routes: [
    {
      method: "POST",
      path: "/matiere-premiere",
      handler: "matiere-premiere.matierePremiere",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
