var menu=["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];

var i = 0;

document.getElementById("next").addEventListener("click", 
    function nextImage(i){
        if (i<=menu.length-1){
             i++
         }else{
            i = 0;
            }; 
    };
    document.getElementById("cookies")="url('" + menu[i] +"')";
)

document.getElementById("last").addEventListener("click", 
 function prevImage(i){
     if (i=0){
        i=6;
     }else{
         i=i-1
     }
 }
 document.getElementById("cookies")="url('" + menu[i] +"')";
