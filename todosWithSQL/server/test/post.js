//import the server
var app = require('../server');
// import an assertion library
//assert => say something 
//test => test its validity 
var supertest = require('supertest');


//write the test
describe('2. Post requests from Todos API', function(){
    //invokes our first test
    it('2.1 should return HTTP status of 201 and JSON data',function(done){
        let newTodo = {description: 'comelete unit test abrea', isComplete:false}
        supertest(app)
        .post('/todos')
        .set('Accept', 'application/json')
        .send(newTodo)
        .expect(201)
        .expect(/abrea/, done)
    })
})