//for loop mod function output 

// function quest(){
//     for(var i=1; i<6; i++){
//     let message = (i%2==0)? "even":"odd" //ternary logic using modus to assign odd/even//
//    document.getElementById("out").textContent=(i +  ':' + message ) //
//    console.log(i+message)  //troubleshooting the display issues//
//     };
// };
const oddOrEven = input => {
    let obj = {}
  
    for (let i=1; i <= 5; i++){
      obj[+i] = i%2 ? 'odd' : 'even'
    }
    return obj
  } 
  
  console.log(oddOrEven(5))