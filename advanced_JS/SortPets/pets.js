const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;





var myPets = [
    {   
        "type": "camel",
        "name": "Wednesday",
        "age": 8,
        "food": "Hay, mostly",
        "daily food quantity": 30
    },
    {
        "type": "cobra",
        "name": "Slitherio",
        "age": 2,
        "food": "Rodents",
        "daily food quantity": 0.05
    },
    {   
        "type": "elephant",
        "name": "Hathi",
        "age": 1,
        "food": "Plant matter, grass, hay, fruit",
        "daily food quantity": 50
    }
]

function dynamicSort(property, order){
    var sort_order = 1;
    if (order === "desc"){
        sort_order = -1;
    }
    return function(a, b){
        if(a[property]< b[property]){
            console.log (sort_order)
            return -1*sort_order;
        } else if (a[property]> b[property]){
            return 1*sort_order;
        } else{
            return 0* sort_order
        }
    }
}



console.log (myPets)
console.log(myPets.sort(dynamicSort(("daily food quantity"), "asc")))

app.listen(PORT , ()=> console.log(`App listening on port ${PORT}`))


