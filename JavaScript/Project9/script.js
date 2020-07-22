var page1={
    title:"Egg Salad",
    serving: 4,
    calories: 300,
    Recipe:"Boil the eggs for 15",
    ul: "ingredients for shoping list",
    pictu: "future img src",
    }
var page2={
    title:"Chicken Salad",
    serving: 2,
    calories: 700,
    Recipe:"Grill the chicken for",
    ul: "ingredients for shoping list",
    pictu: "future img src",
    }
 var page3={
    title:"Garden Salad",
    serving: 8,
    calories: 500,
    Recipe:"Wash and cut",
    ul: "ingredients for shoping list",
    pictu: "future img src",
    }

var recipieBook=["page1", "page2", "page3"]
//create a function that selects the correct array entry
//based on user check box choice
 


function egg(){
    document.getElementById("title").innerHTML= page1.title;
    document.getElementById("servings").innerHTML= page1.serving;
    document.getElementById("calories").innerHTML= page1.calories;
    document.getElementById("rec").innerHTML= page1.Recipe;
    document.getElementById("ing").innerHTML= page1.ul;
    document.getElementById("photo").innerHTML= page1.pictu;
}

function chicken(){
    document.getElementById("title").innerHTML= page2.title;
    document.getElementById("servings").innerHTML= page2.serving;
    document.getElementById("calories").innerHTML= page2.calories;
    document.getElementById("rec").innerHTML= page2.Recipe;
    document.getElementById("ing").innerHTML= page2.ul;
    document.getElementById("photo").innerHTML= page2.pictu;
}

function Garden(){
    document.getElementById("title").innerHTML= page3.title;
    document.getElementById("servings").innerHTML= page3.serving;
    document.getElementById("calories").innerHTML= page3.calories;
    document.getElementById("rec").innerHTML= page3.Recipe;
    document.getElementById("ing").innerHTML= page3.ul;
    document.getElementById("photo").innerHTML= page3.pictu;
}




//function to display recipe stored in array 


// would like to add a new field in the browser
// let title= $("#title").value;
// let ssize=$("#ssize").value;
// let cal=$("#cal").value;
// let recipe=$("#recipe").value;

// var recipePage = [title, ssize, cal, recipe]


// ${"h1"}.value


