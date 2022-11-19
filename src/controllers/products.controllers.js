const productsService = require('../services/products.service');

const getAll = async (req, res) => {
  try {
    const result = await productsService.getAll(req.body);
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).send({ message: 'Nenhum produto encontrado' });
    }
  } catch (error) {
    res.status(400).send({ message: 'Erro ao buscar produtos' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productsService.getById(Number(id));
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).send({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).send({ message: 'Erro ao buscar produto' });
  }
};

module.exports = {
  getAll,
  getById,
};