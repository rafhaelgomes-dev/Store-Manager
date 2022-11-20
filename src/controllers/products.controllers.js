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
      res.status(201).json({
        id: result.message.insertId,
        name,
      });
    }
  } catch (error) {
    res.status(400).send({ message: 'Erro ao cadastrar um produto' });
  }
};

module.exports = {
  getAll,
  getById,
  insert,
};