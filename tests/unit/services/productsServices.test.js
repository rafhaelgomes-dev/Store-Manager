
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/database/connection');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');

const { produto } = require('../models/mocks/products.model.mock');

describe('Testes de unidade do Services de produtos', function () {
  it('Realizando uma operação INSERT com o Service produtos', async function () {



    const expectResult = [{
      fieldCount: 0,
      affectedRows: 1,
      insertId: 5,
      info: '',
      serverStatus: 2,
      warningStatus: 0
    }]

    sinon.stub(productsModel, 'insert').resolves(expectResult);
 
    const result = await productsService.insert(produto.name);
 
    expect(result).to.deep.equal({
      type: null,
      message: [{
        fieldCount: 0,
        affectedRows: 1,
        insertId: 5,
        info: '',
        serverStatus: 2,
        warningStatus: 0
      }]
    });
  });


  afterEach(sinon.restore);

  it('Realizando uma operação GetById com o services produtos', async function () {

    sinon.stub(productsModel, 'getById').resolves([{
      "id": 5,
      "name": "ProdutoX"
    }]);

    const result = await productsService.getById(5);
    expect(result).to.deep.equal([{
      "id": 5,
      "name": "ProdutoX"
    }]);
  });

  afterEach(sinon.restore);

  it('Realizando uma operação GetAll com o Services produtos', async function () {
  
    sinon.stub(productsModel, 'getAll').resolves([{
      "id": 5,
      "name": "ProdutoX"
    }]);

    const result = await productsService.getAll();

    expect(result).to.deep.equal([{
      "id": 5,
      "name": "ProdutoX"
    }]);
  });

  afterEach(sinon.restore);
});