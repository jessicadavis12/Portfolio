let boardWithQueens = require('./boardWithQueens')

// creating a board 8x8 with 3 queens
let board2DArray = boardWithQueens();

//First we are determining the location of the queens, outputs an array of objects
function queenMap(arr){
  let queenLoc = []
  // so that we can show where the random queens got placed, I'm generating a string of positions:
  let queenLocations = '';
  let size = arr.length;
  for (let i=0; i<size; i++){
    for(let j=0; j<size; j++){
      if(arr[i][j]){
        queenLoc.push({name:arr[i][j].name, row:i , col:j})
        queenLocations += `${arr[i][j].name} at (${i+1},${j+1}); `
      }
    }
  }
  //run the queen safety checking algorithm below
  // console.log(queenLoc)
  let isSafe = queenSafe(queenLoc)
  return {
    status: isSafe, 
    message1: `The board is ${size} by ${size}, with ${queenLoc.length} queens`,
    message2: `The queens are safe : ${isSafe}`,
    queenLocations
  }
}

// check if queens are safe from one another
function queenSafe(queenLocations){
  //if row1 = row2, col1 = col2, |row1-row2| = |col1-col2| then not safe
  //once again nested loops to iterate through each pairing of queens
  //if any are unsafe the group is unsafe
  for(let i=0; i<queenLocations.length; i++){
      for(let j=i+1; j<queenLocations.length; j++){
          if(queenLocations[i].row === queenLocations[j].row) return false;
          if(queenLocations[i].col === queenLocations[j].col) return false;
          if(Math.abs(queenLocations[i].row-queenLocations[j].row) === Math.abs(queenLocations[i].col-queenLocations[j].col)) return false;
      }
  }
  // if we have not yet returned false then the must be safe
  return true;
}

console.log(
  queenMap(board2DArray)
)