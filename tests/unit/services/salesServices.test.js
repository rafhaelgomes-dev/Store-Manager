
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/database/connection');
const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model');


describe('Testes de unidade do Services de produtos', function () {

  it('Realizando uma operação GetAll com o Services sales', async function () {

    sinon.stub(salesModel, 'getAll').resolves([{
      "saleId": 1,
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 1,
      "quantity": 5
    }]);

    const result = await salesService.getAll();

    expect(result).to.deep.equal([{
      "saleId": 1,
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 1,
      "quantity": 5
    }]);
  });

  afterEach(sinon.restore);

  it('Realizando uma operação GetById com o Services sales', async function () {

    sinon.stub(salesModel, 'getById').resolves([{
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 1,
      "quantity": 5
    }]);

    const result = await salesService.getById(1);

    expect(result).to.deep.equal([{
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 1,
      "quantity": 5
    }]);
  });

  afterEach(sinon.restore);
});