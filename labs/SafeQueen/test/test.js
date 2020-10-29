//the scope of this test of the board with queens generator funcion is
//test tht you receive a 2D array
const assert = require('assert');
const board = require('../boardWithQueens');

//first set of tests
describe('1. Test board generation function', function(){
    //first test (happy)..proper 2d array returned
    it('1.1 should return an array with an arrays inside it', function(){
        let results = board(8,3);
        assert.equal(Array.isArray(result), true)
        assert.equal(result.length, 8)
    })
    //first test (sad)..call too small a board
    it('1.2 should return an error, when small board (<3) is requested', function(){
        assert.throws(function(){
            return board(2, 1)
        })
    })
    //second test (sad)..call too few queens
    it('1.3 should throw if too few queens (<2) are requested', function(){
        let result = board(6, 1);
        assert.throws(function(){
            return board(2, 1)
        })
    })
    
})
