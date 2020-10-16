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

// create an age and names array 
const names = ["George", "Martha", "Sally"]
const ages = [23, 26, 5]
const tbody = document.querySelector('tbody')
const fillHouse = () => {
    for(let i = 0; i < names.length; i++){
        // names[0] == "George"
        // ages[0] == 23
        tbody.insertAdjacentHTML('afterbegin', `
            <tr>
                <td>${names[i]}</td>
                <td>${ages[i]}</td>
            </tr>
        `)
    }
}