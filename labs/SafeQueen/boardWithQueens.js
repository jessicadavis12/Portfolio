// function to create a board as a 2-D array and returns it
//    piyush: I have added default values
module.exports = (length = 8, queens = 3) => {
    //Make sure both arguments passed are numbers
    if(typeof(queens) != "number"|| typeof(length) != "number"){
        throw "Both arguments must be numbers!"
    //Make sure the number of queens does not exceed the number of spots on the board
    } else if (queens>length**2 || queens < 2){
        throw "Wrong number of queens!"
    } else if (length < 3) {
        throw "Too small board"
    }
    
    //Defining the board
    let board = []
    
    //Initializing a two dimensional array and populating it with undefineds
    for(let i = 0; i<length; i++){
        //Making rowns
        board.push([])
        for(let j = 0; j<length; j++){
            //Populating columns
            board[i].push(undefined)
        }
    }

    //Randomly generating a set of coordinates
    for(let i = 0; i<queens; i++){
        //Generating a random number for the row that fits our array
        let row = Math.floor(Math.random()*length)

        //Generating a random number for the column that fits our array
        let column = Math.floor(Math.random()*length)

        //Checking to make sure that a position assigned doesn't already hold a queen object
        if(board[row][column]){
            //If the position does hold a queen, then redo that loop to find a new spot
            i--
        }

        //Once an unoccupied spot is chosen, assign a queen object to it
        board[row][column] = {order: i+1, name:`Queen${i+1}`}
    }

    //Once the board has been populated with the set number of queens, return the finished board
    return board
}