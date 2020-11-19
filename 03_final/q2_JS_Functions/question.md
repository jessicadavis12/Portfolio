Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

Hint: Convert the string to an array and then loop over the array.

See example below ...

```
    This is a string
    There was string
      ^^^^^^^          <-- 7 differences
```

In the above example, the function should return 7.

let string1 = "This is a string"
let string2 = "There was a string"

let diff=0;
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
    console.log(diff)}
}

compare();

Good - 3/3