module.exports = {
  createOrder: async (body) => {
    try {
      //console.log(body)

      let total_price = 0;
      await body.data.forEach((plat) => {
        total_price += plat.price * plat.qte;
      });

      // add fiche technique de fabrication from sauces, jus and accompagnements to plat
      await body.data.forEach((plat) => {
        plat?.choix_accompagnements?.forEach((choix_accompagnement) => {
          if (choix_accompagnement?.attributes?.fiche_technique_de_fabrication)
            plat?.fiche_technique_de_fabrication?.push(
              ...choix_accompagnement?.attributes
                ?.fiche_technique_de_fabrication
            );
        });

        plat?.sauces?.forEach((sauce) => {
          if (sauce?.attributes?.fiche_technique_de_fabrication)
            plat?.fiche_technique_de_fabrication?.push(
              ...sauce?.attributes?.fiche_technique_de_fabrication
            );
        });

        plat?.juses?.forEach((jus) => {
          if (jus?.attributes?.fiche_technique_de_fabrication)
            plat?.fiche_technique_de_fabrication?.push(
              ...jus?.attributes?.fiche_technique_de_fabrication
            );
        });
      });

      // add order to the database in section orders
      const respond = await strapi.entityService.create("api::order.order", {
        data: {
          total_price: total_price,
          order_status: "1",
          place_de_consomation: body?.data[0]?.placeDeConsomation,
          plats: body.data,
          user: body?.data[0].user,
        },
        populate: {
          plats: {
            populate: {
              choix_accompagnements: true,
              sauces: true,
              juses: true,
            },
          },
        },
      });

      return { data: respond };
    } catch (err) {
      return err;
    }
  },
};
