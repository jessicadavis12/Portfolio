### Question 6:

Write a Javascript loop that will iterate from 1 to 5, both included, and log, if the number is ...

... odd or even.

Now wrap the functionality into a function that takes appropriate inputs as arguments (e.g. the smaller number, 5 here; and the larger number 15 here) and returns an object like the following ...

    {
      1: "odd",
      2: "even",
      3: "odd",
      4: "even",
      5: "odd"
    }


### Your Answer: may be provided as a code file with single function within it.

Partial credit - 1 pt
The output is supposed to be an object (see above)
Your code works in that you are logging if the number is even or odd but keep in mind, by trying to 
DOM, it is happening so fast you only see the final result. Try .append() next time to see ALL the 
results. 

We were looking for something like (no HTML needed):

const oddOrEven = input => {
  let obj = {}

  for (let i=1; i <= 5; i++){
    obj[+i] = i%2 ? 'odd' : 'even'
  }
  return obj
} 

console.log(oddOrEven(5))

