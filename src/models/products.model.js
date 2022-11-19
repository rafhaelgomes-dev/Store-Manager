const connection = require('../database/connection');

const getAll = async (_data) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getById = async (data) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ORDER BY id asc',
    [data],
  );
  return result;
};

module.exports = {
  getAll,
  getById,
};