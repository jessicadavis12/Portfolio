

function populatearray(){
    var num=[];
    num[0]= parseFloat(prompt("Enter a number: "));
    num[1]= parseFloat(prompt("Enter a number: "));
    num[2]= parseFloat(prompt("Enter a number: "));
  //  console.log(num)
    additup(num);
}

var displayResults = document.querySelector("#results")

function additup(n){
    
    var arraysum = 0;
    for (var i=0; i<n.length; i++){
        arraysum = arraysum +n[i]
    }
    // console.log(arraysum)
    if (arraysum){
        displayResults.innerHTML=  arraysum;  
    } else{
        displayResults.innerHTML=  "User did not enter all numbers";
    }
}
