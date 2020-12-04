## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console
    


    a: the code sorts the number in  the array in (roo, raa) order and returns the array in (roo-raa) order

    b:(function myFn(radius){
    var boundary = Math.pow(radius, 2) * Math.PI
    if(boundary) console.log('boundary is ', boundary);
    }(20))

50% credit for both

A) right, it sorts the array in numerical, ascending order (compare function). But you did not stste how to reverse. The easy way is to use return raa-roo
B) You fixed the code but did not talk about why it did not work originally. The original code did not work because it was trying to reference a variable (pi) that had not been defined.
=======

### Feedback:

a: What do you mean by roo-raa order?  It is looking for ascending or descending order.

Score: 0 / 1.5

b: You have not answered all the questions asked in b. 

Score: 0.8 / 1.5

