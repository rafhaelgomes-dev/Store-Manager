
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/database/connection');
const salesModel = require('../../../src/models/sales.model');


describe('Testes de unidade do model de Sales', function () {
  it('Realizando uma operação INSERT com o model Sales', async function () {
    sinon.stub(connection, 'execute').resolves([
       {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: '',
        serverStatus: 2,
        warningStatus: 0
      },
      undefined
    ]);

    const result = await salesModel.insertProducts({
      saleId: 8,
      productId: 10,
      quantity: 1,
    });

    expect(result).to.deep.equal([
      {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: '',
        serverStatus: 2,
        warningStatus: 0
      },
      undefined
    ]);
  });

  afterEach(sinon.restore);

  it('Realizando uma operação GetAll com o model Sales', async function () {
    sinon.stub(connection, 'execute').resolves([[{
      "saleId": 1,
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 1,
      "quantity": 5
    }]]);

    const result = await salesModel.getAll();

    expect(result).to.deep.equal([{
      "saleId": 1,
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 1,
      "quantity": 5
    }]);
  });

  afterEach(sinon.restore);

});