const productsModel = require('../models/products.model');

const getAll = async (data) => {
  const result = await productsModel.getAll(data);
  return result;
};

const getById = async (data) => {
  const result = await productsModel.getById(data);
  return result;
};

const insert = async (data) => {
  // Será validado que não é possível realizar operações em um produto sem o campo name
  if (!data) {
    return { type: 'INVALID_VALUE', message: '"name" is required' };
  }
  // Será validado que não é possível realizar operações em um produto com o campo name menor que 5 caracteres
  if (data.length < 5) {
    return {
      type: 'NAME_LESSA_THAN_5',
      message: '"name" length must be at least 5 characters long',
    };
  }

  const result = await productsModel.insert(data);

  return { type: null, message: result };
};

module.exports = {
  getAll,
  getById,
  insert,
};