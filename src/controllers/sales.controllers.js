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

module.exports = {
  insert,
};