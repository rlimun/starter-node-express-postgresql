const knex = require("../db/connection");

function list(req, res, next) {
    productsService
      .list()
      .then((data) => res.json({ data }))
      .catch(next);
  }

function read(productId) {
    return knex("products").select("*").where({ product_id: productId }).first();
  }

module.exports = {
  list,
};