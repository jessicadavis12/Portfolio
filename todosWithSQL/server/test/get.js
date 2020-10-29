//import the server
var app = require('../server');
// import an assertion library
//assert => say something 
//test => test its validity 
var supertest = require('supertest');


//write the test
describe('1. Get requests from Todos API', function(){
    //invokes our first test
    it('1.1should return HTTP status of 200 and JSON data',function(done){
        supertest(app)
        .get('/todos')
        .expect('Content-Type', /json/i)
        .expect(200, done)
    })
})