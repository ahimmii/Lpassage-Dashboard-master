module.exports = {
  routes: [
    {
      method: "POST",
      path: "/create-order",
      handler: "create-order.createOrder",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
