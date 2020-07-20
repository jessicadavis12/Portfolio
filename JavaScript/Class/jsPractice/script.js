// const button = document.querySelector("input[type='button']")
// button.addEventListener('click', () => {
//     button.style.backgroundColor = 'red'
//     button.value = 'Turn Off'
// })

// const error = document.querySelector('.error')
// let number = 10
// // select the p tag 
// let numDisplay = document.getElementById('numDisplay')
// // dom manipulation to display the number
// numDisplay.innerHTML = number
// // create increment and decrement functions

// // function inc(){
// //     number++;
// //     if (number > 20){
// //         return error.innerText ='Sorry, go the other way'
// //     }
// //         return numDisplay.innerHTML = number
// // }
// // const dec =() => {
// //     number--;
// //     if (number < 0){
// //         return error.innerText = 'Sorry, go the other way'
// //     }
// //         return numDisplay.innerHTML = number
// // }

// const numberHandler = (num) =>{
//     if(number + num > 20||number + num <0){
//             return error.innerText="Sorry Bro"
//     }
//     number += num
//     if(error.innerText){
//         error.innerText =""

//     }

//     return numDisplay.innerText = number
// }
//create a names and age array

const names = ["George", "Martha", "Sally"];
const age = [23, 25, 6]

const tbody = document.querySelector("tbody")
const fillthehouse = (){

    for(let i=0; i<names.length; i++)
    tbody.insertAdjacentHTML('beforeend', `
    <tr>
     <td>${names[i]}</td>
     <td>${ages[i]}</td>
    </tr>
    `)
}

var table = {
   person1:["George", 23],
   person2:["Martha", 26],
   person3:["Sally", 5],
            }

function myFunction() {
    var h = document.getElementById("myH2");
    h.insertAdjacentHTML("afterend", "<p>My new paragraph</p>");
  }