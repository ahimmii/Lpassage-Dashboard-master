module.exports = {
  routes: [
    {
      method: "GET",
      path: "/get-stock",
      handler: "stock.getStock",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/find-stock",
      handler: "stock.findStock",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/update-stock",
      handler: "stock.updateStock",
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
