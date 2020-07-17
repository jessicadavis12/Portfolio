


 function val(){
    var theEmail=document.getElementById("email");
    var theName=document.getElementById("name");
    
    if (theEmail.value == "" || theEmail.value == null) { 
        alert("If you enter your Email, you could win big.");
    } else if (theName.value == "" || theName == null) { 
        alert("If you give us your name, we know who to give the prize to.");
    } else {
        alert("Best of Luck!  May the odds be in your favor!"); 
    }
 }