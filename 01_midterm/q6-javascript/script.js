//for loop mod function output 
i=0;
function quest(){
    for(i=0, i<5, i++){
    let message = (i%2==0)? "even":"odd" //ternary logic using modus to assign odd/even//
   $("#out").html=(i + " :" + message ) //
    };
};