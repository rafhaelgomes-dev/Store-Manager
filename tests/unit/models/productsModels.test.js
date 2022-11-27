
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/database/connection');
const productsModel = require('../../../src/models/products.model');

const { produto } = require('./mocks/products.model.mock');

describe('Testes de unidade do model de produtos', function () {
  it('Realizando uma operação INSERT com o model produtos', async function () {
    sinon.stub(connection, 'execute').resolves([{
      fieldCount: 0,
      affectedRows: 1,
      insertId: 5,
      info: '',
      serverStatus: 2,
      warningStatus: 0
}]);

    const result = await productsModel.insert(produto.name);
    expect(result).to.deep.equal({
      fieldCount: 0,
      affectedRows: 1,
      insertId: 5,
      info: '',
      serverStatus: 2,
      warningStatus: 0
    });
  });

  afterEach(sinon.restore);

  it('Realizando uma operação GetById com o model produtos', async function () {
    sinon.stub(connection, 'execute').resolves([{
      "id": 5,
      "name": "ProdutoX"
    }]);

    const result = await productsModel.getById(5);
    expect(result).to.deep.equal({
      "id": 5,
      "name": "ProdutoX"
    });
  });

  afterEach(sinon.restore);


  it('Realizando uma operação GetAllcom o model produtos', async function () {
    sinon.stub(connection, 'execute').resolves([{
      "id": 5,
      "name": "ProdutoX"
    }]);

    const result = await productsModel.getAll();
    expect(result).to.deep.equal({
      "id": 5,
      "name": "ProdutoX"
    });
  });
});