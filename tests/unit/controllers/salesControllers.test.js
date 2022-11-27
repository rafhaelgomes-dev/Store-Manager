const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);



const connection = require('../../../src/database/connection');

const salesServices = require('../../../src/services/sales.service');

const salesController = require('../../../src/controllers/sales.controllers');


describe('Teste de unidade de Sales controller', function () {

  it('Realizando uma operação GetAll', async function () {
  
    const res = {};

    const req = {
    }


    sinon
      .stub(salesServices, 'getAll')
      .resolves([
        {
          "saleId": 1,
          "date": "2022-11-27T02:41:13.000Z",
          "productId": 1,
          "quantity": 5
        }]);

    res.status = sinon.stub().returns(res);

    res.json = sinon.stub().returns();

    await salesController.get(req, res)

    expect(res.status).to.have.been.calledWith(200);

    expect(res.json).to.have.been.calledWith([
      {
        "saleId": 1,
        "date": "2022-11-27T02:41:13.000Z",
        "productId": 1,
        "quantity": 5
      }]);
  });

  afterEach(sinon.restore);

  it('Realizando uma operação getById', async function () {

    const res = {};

    const req = {
      params: { id: 2 }
    }

    
    
    res.status = sinon.stub().returns(res);
    
    res.json = sinon.stub().returns();
    
    sinon
      .stub(salesServices, 'getById')
      .resolves([{
        "date": "2022-11-21T03:05:49.000Z",
        "productId": 2,
        "quantity": 5
      }]);

    await salesController.getById(req, res)

    expect(res.status).to.have.been.calledWith(200);

    expect(res.json).to.have.been.calledWith([{
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 2,
      "quantity": 5
    }]);
  });

  afterEach(sinon.restore);

});
