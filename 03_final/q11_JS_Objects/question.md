Consider the following code.  What would be console logged?  Messed up?  Why? (20%)

What would you change to address this issue (where the Apple type is, mis-represented in the last line below)? (80%)

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)


Hint: this question refers to copying of objects.

when an object is saved, it is the objects location that is referenced in the memory. 
With that in mind both orange and apple will point to the same location.  When orange.type is assigned, apple.type is also assigned. 


const orange = Arrray.from(apple); would clone the apple array.  Cloning the apple array as orange array would allow us to modify the type of orange 
without modifying the apple array.  