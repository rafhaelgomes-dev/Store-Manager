const productsService = require('../services/products.service');

const getAll = async (req, res) => {
  try {
    const result = await productsService.getAll(req.body);
    if (result.length > 0) {
      return res.status(200).json(result);
    } 
      return res.status(404).send({ message: 'Nenhum produto encontrado' });
  } catch (error) {
    res.status(400).send({ message: 'Erro ao buscar produtos' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productsService.getById(Number(id));
    if (result.length > 0) {
      return res.status(200).json(result[0]);
    } 
      return res.status(404).send({ message: 'Product not found' });
  } catch (error) {
    res.status(400).send({ message: 'Erro ao buscar produto' });
  }
};

const insert = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await productsService.insert(name);

    if (result.type === 'INVALID_VALUE') {
      return res.status(400).json({ message: result.message });
    }

    if (result.type === 'NAME_LESSA_THAN_5') {
      return res.status(422).json({ message: result.message });
    }

    if (result.message.affectedRows === 1) {
      return res.status(201).json({
        id: result.message.insertId,
        name,
      });
    }
  } catch (error) {
    res.status(400).send({ message: 'Erro ao cadastrar um produto' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const result = await productsService.update(Number(id), name);

    if (result.affectedRows > 0) {
      return res.status(200).json({
        id,
        name,
      });
    }

    if (result.type) {
     return res.status(result.statusCode).json({ message: result.message });
    }
  } catch (error) {
    res.status(400).send({ message: 'Erro ao atualizar o produto' });
  } 
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productsService.deleteProduct(id);
    if (result.type) {
      return res.status(result.statusCode).json({ message: result.message });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).send({ message: 'Erro ao tentar deletar um produto' });
  }
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
  deleteProduct,
};