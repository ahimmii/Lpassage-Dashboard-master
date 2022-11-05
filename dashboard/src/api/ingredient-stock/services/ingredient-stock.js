'use strict';

/**
 * ingredient-stock service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ingredient-stock.ingredient-stock');
