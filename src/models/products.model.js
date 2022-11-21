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

const insert = async (data) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [data],
  );
  return result;
};

const update = async (id, name) => {
  const [result] = await connection.execute(
    `UPDATE StoreManager.products
     SET name = ?
     WHERE id = ?;`,
    [name, id],
  );
  return result;
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
};