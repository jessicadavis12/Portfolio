function intro(){
    person = prompt("Please enter your name: ", "");
    snack = prompt("What is your favorite snack?" , "");
    drink = prompt ("What is your favorite drink" , "");
    str = new String("Hello " + person + "I see you enjoy eating a " + snack + 
    "and drinking " + drink + "!");

    document.write(str.fomtsize(96));

}