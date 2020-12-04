let string1 = "This is a string"
let string2 = "There was a string"

let diff=0;

// FEEDBACK:
// The indented lines below should be within the function so that it runs
// for any set of 2 strings, then pass the 2 strings into the function
//  compare as 2 arguments

        //stores the string in an array to compare each character
        const array1 = [...string1];
        const array2 = [...string2];

        //determines the length of the longest array 
        max= array1.length > array2.length ? array1.length : array2.length

function compare(){
    for(i = 0; i>max; i++){
    if (array1[i]===!aray2[i]){
        //if the characters are not exactally the same, diff will be increased by one
        diff=diff +1
    }
    //return the number of difference characters 

    // Feedback: you should return the diff result, not console.log
    //  this is what functions generally do. You may console it outside
    //  where you are executing compare()

    console.log(diff)}
}

compare();

// Score: 2.0/3.0