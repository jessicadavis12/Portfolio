let turnedOn = true;
changeColors = () =>{
    if(turnedOn){
        btn.style.backgroundColor = 'red';
        btn.value= "OFF";
    }else {
        btn.style.backgroundColor = 'green';
        btn.value='On';
    }
    turnedOn =!turnedOn;
} 
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

displayTime = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let month = d.getMonth();
    let day = d.getDate();
    let year = d.getFullYear();
    demoDateObject.innerHTML = d;
    demoTime.innerHTML=`${hh}:${mm}:${ss}`
    demoFullDate.innerHTML = `${monthNames[month]} ${day}, ${year}`
};
 
displayInfo = () => {
    let nameVal = myName.value;
    let ageVal = myAge.value;
    let addressVal = myAddress.value;
    let txt = `${nameVal}, you are ${ageVal} years old and live at ${addressVal}.`
    demo.innerHTML = txt;
};

randomRun = (min, max)=>{
    let randomNumber = Math.floor(Math.random()* (max-min+1)+min);
    document.getElementById('randNum').innerHTML = "Your random number is:" + randomNumber
}

compareStrings = () =>{
    var compStr1 = document.getElementById(`compString1`).value;
    var compStr2 = document.getElementById('compString2').value;
    let result = (compStr1===compStr2)? 'is the same as':'is different than';
    compStringDisplay.innerHTML=`The first string you entered:${compStr1}<br>${result}</br>
    the second string you entered:${compStr2}`;

}


// checkSentence=() => {
//     let sentence = document.getElementById('sentence');
//     let text = sentence.value;
//     let newText = text.replace(/a/gi, 'x');
//     let displayText = documtent.getElementByI("displaySentence");
//     displayText.innerHTML = `Your original sentence was: ${text}<br> and your new sentence is: ${newText}`;
//     sentence.value= "";
// };

// clearDisplay = () => {
//     document.getElementById('displaySentence').innerHTML = '';
// }