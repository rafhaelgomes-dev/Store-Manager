const connection = require('../database/connection');

const insertSales = async () => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  return result;
};

const insertProducts = async (data) => {
  const result = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [data.saleId, data.productId, data.quantity],
  );
  
  return result;
};

module.exports = {
  insertSales,
  insertProducts,
};