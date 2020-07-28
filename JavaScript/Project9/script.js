//untill we learn the backend I just need some variable entries 
//array of objects for selection and addition 
//buttons need to ids that a function can sort through to find the match 
//to display 

var recipieBook=[
    {
    title:"Egg Salad",
    serving: 4,
    calories: 300,
    Recipe:"Boil the eggs for 15",
    ul: "ingredients for shoping list",
    pictu: "future img src",
    },
    {
    title:"Chicken Salad",
    serving: 2,
    calories: 700,
    Recipe:"Grill the chicken for",
    ul: "ingredients for shoping list",
    pictu: "future img src",
    },
    {
    title:"Garden Salad",
    serving: 8,
    calories: 500,
    Recipe:"Wash and cut",
    ul: "ingredients for shoping list",
    pictu: "future img src",
    }
]

//create a function that selects the correct array entry
//based on user check box choice


 
//the website is flasing the choice - on project 2 I used event to solve 
//object constructor for new recipe/ want to add a list component with
//another object constructor- ie website will render a shopping list


//to solve the display issue, and DRY this up- I need to create a function that will display one selected object- and that i can change based on user input.  Need to connect the drop down selection with displaying the selected- also I don't think that the var i syntex is ok  re
 
var i = $("recipe").val("option value")

function displaySelected(){
    var displayTitle= recipeBook[i].title;
    var displayServing= recipeBook[i].serving;
    var displayCalories= recipeBook[i].calories;
    var displayRecipe= recipeBook[i].Recipe;
    var displayUL=recipeBook[i].ul;
    var displayPictu=recipeBook[i].pictu;
    $("title").text(displayTitle);
    $("servings").text(displayTitle);
    $("calories").text(displayCalories);
    $("rec").text(displayRecipe);
    $("ing").text(displayUL);
    $("photo").img(displayPictu);
}

//this doesn't work with the field entry from home page - will link by id 


function newRecipe($("title","ssize", "cal", "recipeent", 'ul', "Picture" ).val()){
    this.newTitle = title;
    this.newServing = serving;
    this.newCalories = calories;
    this.newRecipe = Recipe;
    this.newUl = ul;
    this.newPictu = pictu;

}
//now how do I add a button to select a newly added recipe?
//to solve after I fix the display and maybe add some style
//both add and remove class 
 

//function to display recipe stored in array 
//need a function to display all of the titles that calls the rest of the 
//object-  Recipe Book is an object of recipe objects  


// would like to add a new field in the browser
// let title= $("#title").value;
// let ssize=$("#ssize").value;
// let cal=$("#cal").value;
// let recipe=$("#recipe").value;

// var recipePage = [title, ssize, cal, recipe]


// ${"h1"}.value


