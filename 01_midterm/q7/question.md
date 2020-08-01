### I'd like to empty the array below. Please provide any 2 methods with examples and explain in brief how to empty it.

var myArray = [1, 2, 3, 4, 5]      // it may have any number of elements

(
    Hints: 
        Method 1: overwrite the array with empty array (shown below, don't use this as your answer)
        Method 2: by the length property method
        Method 3: using the splice Array method
        Method 4: by popping each member of the array in a loop.
        Method 5: anything you come up with
)

### Sample answer:

    myArray = []    // will replace the original myArray with an empty array

### Your answers:
1.
var index= myArray.length
    for (i=0, i<index, i++)
        myArray.pop()
//cycles through the array length set by index and takes each element of the array out the end of the array 

2.shift 
var index= myArray.length+1
    for (i=index, i<0, i--)
        myArray.shift()
//sets the array length to the number of elemets in the array- the plus one is so we can stop a zero
//removes the front element until the counter reaches 0- at that time the array will be empty 
