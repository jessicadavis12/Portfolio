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
