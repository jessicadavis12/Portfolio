//import the server
var app = require('../server');
// import an assertion library
//assert => say something 
//test => test its validity 
var supertest = require('supertest');


//write the test
describe('3. PUT requests from Todo API. ', function(){
    //invokes our first test
    it('3.1 should accept the change and return HTTP status of 200 and JSON data',function(){
        let newTodo = {description: 'comelete unit test abrea', isComplete:false}
        supertest(app)
        .post('/todos')
        .set('Accept', 'application/json')
        .send(newTodo)
        .expect('201')
        .expect(/abrea/)
        .end(function(err, results){
            supertest(app)
            .put('/todos'+results.body._id)
            .expect(200)
            .expect({
                description: newTodo.description, 
                id: results.body._id, 
                iscomplete:!newTodo.isComplete, 
                user_id: 2
            })
            .end(function(){
                console.log('test complete')
            }, done)
        })
    })
})