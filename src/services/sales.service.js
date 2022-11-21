const salesModel = require('../models/sales.model');
const productsModel = require('../models/products.model');

const validateFields = async (dados) => {
  const validateQuantityLength = dados.some((e) => e.quantity <= 0);

  const validateQuantity = dados.some((e) => e.quantity === undefined);

  const validateProductId = dados.some((e) => e.productId === undefined);

  if (validateQuantityLength) {
    return {
      type: 'quantity_error_length',
      statusCode: 422,
      message: '"quantity" must be greater than or equal to 1',
    };
  }

  if (validateQuantity) {
    return { type: 'quantity_not_found', statusCode: 400, message: '"quantity" is required' };
  }

  if (validateProductId) {
    return { type: 'product_not_found', statusCode: 400, message: '"productId" is required' };
  }

  return { type: null, message: 'ok' };
};

const validateIfProductExists = async (produto) => {
  const getById = await Promise.all(produto.map((e) => productsModel.getById(e.productId)));
  const checkIfReturnedProducts = getById.some((e) => e.length === 0);
  if (checkIfReturnedProducts) {
    return { type: 'Product_not_found', statusCode: 404 };
  }
  return { type: null, message: 'ok' };
};

const insert = async (data) => {
  const validate = await validateFields(data);
   
  if (validate.type) {
    return validate;
  }

  const returnValidate = await validateIfProductExists(data);

  if (returnValidate.type === 'Product_not_found') {
    return { type: 'Product_not_found', statusCode: 404, message: 'Product not found' };
  }

  const sales = await salesModel.insertSales();
  const { insertId } = sales;
  await Promise.all(data.map(async (products) => salesModel.insertProducts({
    saleId: insertId,
    productId: products.productId,
    quantity: products.quantity,
  })));

  return { type: null, message: { id: insertId, itemsSold: data } };
};

const getAll = async () => {
  const result = await salesModel.getAll();
  return result;
};

const getById = async (data) => {
  const result = await salesModel.getById(data);
  return result;
};

module.exports = {
  insert,
  getAll,
  getById,
};