const productsModel = require('../models/products.model');

const getAll = async () => {
  const result = await productsModel.getAll();
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

const update = async (id, name) => {
  const productId = await productsModel.getById(id);

  if (!name) {
    return { type: 'INVALID_VALUE', statusCode: 400, message: '"name" is required' };
  }

  if (name.length < 5) {
    return {
      type: 'NAME_LESSA_THAN_5',
      statusCode: 422,
      message: '"name" length must be at least 5 characters long',
    };
  }

  if (productId.length === 0) {
    return { type: 'product_not_found', statusCode: 404, message: 'Product not found' };
  }

  const result = await productsModel.update(id, name);

  return result;
};

const deleteProduct = async (id) => {
  const productId = await productsModel.getById(id);

  if (productId.length === 0) {
    return { type: 'product_not_found', statusCode: 404, message: 'Product not found' };
  }

  const result = await productsModel.deleteProduct(id);
  return result;
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  deleteProduct,
};