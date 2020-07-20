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

checkSentence=() => {
    let sentence = document.getElementById('sentence');
    let text = sentence.value;
    let newText = text.replace(/a/gi, 'x');
    let displayText = documtent.getElementById('displaySentence');
    displayText.innerHTML = `Your original sentence was: ${text}<br> and your new sentence is: ${newText}`;

};