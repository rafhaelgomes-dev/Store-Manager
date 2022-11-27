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

const getAll = async () => {
  const [result] = await connection.execute(`
  SELECT 
    sp.sale_id as saleId, s.date, sp.product_id as productId, sp.quantity
  FROM
    StoreManager.sales_products AS sp
        INNER JOIN
    StoreManager.sales AS s ON sp.sale_id = s.id
  ;`);
  return result;
};

const getById = async (data) => {
  const [result] = await connection.execute(
    `
  SELECT 
     s.date, sp.product_id as productId, sp.quantity
  FROM
    StoreManager.sales_products AS sp
        INNER JOIN
    StoreManager.sales AS s ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
  ;`,
    [data],
  );
  return result;
};

module.exports = {
  insertSales,
  insertProducts,
  getAll,
  getById,
};