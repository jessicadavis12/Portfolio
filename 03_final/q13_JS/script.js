// Faulty Solution
function isIsogram(str){
    //assigning str the value of the modified the str with the methods split and lowercase.
    // the str is modified in to an array of substrings all in lowercase letters
    str = str.toLowerCase().split('')
    // assigns the unique values of the array str using the spread function to strArr
    let strArr = [...new Set(str)]
    //compares the length of the str array to the length of the strArr and returns true of false
    //a shorter strArr is indicative of at least one character in the original string was not unique.  
    //true means all letters are unique: false means atleast one letter was duplicated. 
    return strArr.join('').length === str.join('').length
  }

var test = "Hello"

console.log(`test: ${isIsogram(test)}`)

