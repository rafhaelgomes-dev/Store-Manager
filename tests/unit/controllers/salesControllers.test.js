const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);


const app = require('../../../src/app');

const connection = require('../../../src/database/connection');


describe('Teste de integração de Sales', function () {

  it('Realizando uma operação GetAll', async function () {
    sinon
      .stub(connection, 'execute')
      .onFirstCall()
      .resolves([[{
        "saleId": 1,
        "date": "2022-11-21T03:05:49.000Z",
        "productId": 1,
        "quantity": 5
      }]])
      .onSecondCall()
      .resolves([[{
        "saleId": 1,
        "date": "2022-11-21T03:05:49.000Z",
        "productId": 1,
        "quantity": 5
      }]])
      .onThirdCall()
      .resolves([[{
        "saleId": 1,
        "date": "2022-11-21T03:05:49.000Z",
        "productId": 1,
        "quantity": 5
      }]]);

    const response = await chai
      .request(app)
      .get('/sales');

    expect(response.status).to.be.equal(200);

    expect(response.body).to.be.deep.equal([{
      "saleId": 1,
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 1,
      "quantity": 5
    }]);
  });

  afterEach(sinon.restore);

  it('Realizando uma operação getById', async function () {
    sinon
      .stub(connection, 'execute')
      .onFirstCall()
      .resolves([[{
        "date": "2022-11-21T03:05:49.000Z",
        "productId": 1,
        "quantity": 5
      }]])
      .onSecondCall()
      .resolves([[{
        "date": "2022-11-21T03:05:49.000Z",
        "productId": 1,
        "quantity": 5
      }]])
      .onThirdCall()
      .resolves([[{
        "date": "2022-11-21T03:05:49.000Z",
        "productId": 1,
        "quantity": 5
      }]]);

    const response = await chai
      .request(app)
      .get('/sales/1');

    expect(response.status).to.be.equal(200);

    expect(response.body).to.be.deep.equal([{
      "date": "2022-11-21T03:05:49.000Z",
      "productId": 1,
      "quantity": 5
    }]);
  });

  afterEach(sinon.restore);

});
