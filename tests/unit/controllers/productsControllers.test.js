const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);


const app = require('../../../src/app');

const connection = require('../../../src/database/connection');


describe('Teste de integração de produtos', function () {
  it('Realizando uma operação INSERT', async function () {
    sinon
      .stub(connection, 'execute')
      .onFirstCall()
      .resolves([{
        fieldCount: 0,
        affectedRows: 1,
        insertId: 5,
        info: '',
        serverStatus: 2,
        warningStatus: 0
      }])
      .onSecondCall()
      .resolves([{
        fieldCount: 0,
        affectedRows: 1,
        insertId: 5,
        info: '',
        serverStatus: 2,
        warningStatus: 0
      }])
      .onThirdCall()
      .resolves({
        "id": 5,
        "name": "ProdutoX"
      });

    const response = await chai
      .request(app)
      .post('/products')
      .send({
        "id": 5,
        "name": "ProdutoX"
      });
    
    
    expect(response.status).to.be.equal(201);
    
    expect(response.body).to.be.deep.equal({
      "id": 5,
      "name": "ProdutoX"
    });
  });

  afterEach(sinon.restore);

  it('Realizando uma operação GetAll', async function () {
    sinon
      .stub(connection, 'execute')
      .onFirstCall()
      .resolves([[{
        "id": 5,
        "name": "ProdutoX"
      }]])
      .onSecondCall()
      .resolves([[{
        "id": 5,
        "name": "ProdutoX"
      }]])
      .onThirdCall()
      .resolves([[{
        "id": 5,
        "name": "ProdutoX"
      }]]);

    const response = await chai
      .request(app)
      .get('/products');
    

    expect(response.status).to.be.equal(200);

    expect(response.body).to.be.deep.equal([{
      "id": 5,
      "name": "ProdutoX"
    }]);
  });

  afterEach(sinon.restore);

});
