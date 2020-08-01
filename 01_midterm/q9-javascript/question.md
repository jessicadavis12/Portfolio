In JavaScript, how do you append a value to an array?  List 4 ways you can find (you may be able to find more) (25% credit).  

Provide example code showing the use of each of the methods you list. (40% credit)

How do you remove a specified member from the array?  Provide small sample. (35% credit)

unshift- adds an element to the front of the array
push- adds an element to the end of the array
splice- adds elements to specified locaiton in the array
concat- merges two arrays together 

var myArray[];
    myArray.unshift(element0); will add element0 to the index position of 0 (front) of the array
    myArray.push(elementlast); will add elementlast to the end of the array. 
    myArray.splice(2,0 element3); will add element 3 to the index location of 2 without removing an element


var myArray1[];
var myArray2[];
myArray[]= myArray1.concat(myArray2);


myArray.splice(2, 3);  will remove 3 elements starting at index position 2. 
