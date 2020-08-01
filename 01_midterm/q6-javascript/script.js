//for loop mod function output 

function quest(){
    for(var i=1; i<6; i++){
    let message = (i%2==0)? "even":"odd" //ternary logic using modus to assign odd/even//
   document.getElementById("out").textContent=(i +  ':' + message ) //
   console.log(i+message)
    };
};