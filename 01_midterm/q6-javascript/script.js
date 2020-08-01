//for loop mod function output 
i=0;
function quest(i){
    for(i=0, i<5, i++){
    let message = (i%2==0)? "even":"odd"
   $("#out").html=(i+" :"+message )
    };
};