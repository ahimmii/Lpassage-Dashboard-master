'use strict';

/**
 * ingredient-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ingredient-list.ingredient-list');
