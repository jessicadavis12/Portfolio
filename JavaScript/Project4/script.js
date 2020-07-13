 var backgroundImages=["img/background1.jpg", "img/background2.jpg", "img/background3.jpg"];

 var index = 1;

function rotateImage(){
document.querySelector("body").style.backgroundImage="url('" + backgroundImages[index] + "')";
    // increase the index
    index++;
    // check to see if the index goes past the end of the array
    //if it does, reset back to 0
if (index > backgroundImages.length-1){
    index=1;
}
}

 setInterval(rotateImage, 3000);