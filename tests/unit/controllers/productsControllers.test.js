const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productServices = require('../../../src/services/products.service');

const productController = require('../../../src/controllers/products.controllers')


describe('Teste de unidades de produtos', function () {
  it('Realizando uma operação INSERT', async function () {
    
    const res = {};

    const req = {
      body: {
        name: "ProdutoX"
      }
    }


    res.status = sinon.stub().returns(res);

    res.json = sinon.stub().returns();

    sinon
      .stub(productServices, 'insert')
      .resolves({
        type: null,
        message: {
          fieldCount: 0,
          affectedRows: 1,
          insertId: 5,
          info: '',
          serverStatus: 2,
          warningStatus: 0
        }
      });

    await productController.insert(req, res)

    
    
    expect(res.status).to.have.been.calledWith(201);
    
    expect(res.json).to.have.been.calledWith({
      "id": 5,
      "name": "ProdutoX"
    });
  });

  afterEach(sinon.restore);

  it('Realizando uma operação GetAll', async function () {

    const res = {};

    const req = {
    }


    res.status = sinon.stub().returns(res);

    res.json = sinon.stub().returns();

    sinon
      .stub(productServices, 'getAll')
      .resolves([{
        "id": 5,
        "name": "ProdutoX"
      }]);

    await productController.getAll(req, res)

    expect(res.status).to.have.been.calledWith(200);

    expect(res.json).to.have.been.calledWith([{
      "id": 5,
      "name": "ProdutoX"
    }]);
  });

  afterEach(sinon.restore);

});
