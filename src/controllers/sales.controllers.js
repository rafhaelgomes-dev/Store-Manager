const salesService = require('../services/sales.service');

const insert = async (req, res) => {
  try {
    const sales = await salesService.insert(req.body);
    if (sales.type) {
      return res.status(sales.statusCode).json({ message: sales.message });
    }
    return res.status(201).json(sales.message);
  } catch (error) {
    res.status(400).send({ message: 'Não foi possivel cadastrar uma venda' });
  }
};

const get = async (_req, res) => {
  try {
    const result = await salesService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Não foi possivel buscar vendas' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await salesService.getById(Number(id));
    if (result.length === 0) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Não foi possivel buscar a venda' });
  }
};

module.exports = {
  insert,
  getById,
  get,
};