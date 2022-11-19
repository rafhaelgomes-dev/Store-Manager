const productsModel = require('../models/products.model');

const getAll = async (data) => {
  const result = await productsModel.getAll(data);
  return result;
};

const getById = async (data) => {
  const result = await productsModel.getById(data);
  return result;
};

module.exports = {
  getAll,
  getById,
};