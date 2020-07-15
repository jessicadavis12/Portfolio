var menuArray=["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];

var i = 0;

 
function nextImage(){
    if (i<menuArray.length-1){
         i++
    }else{
        i = 0;
        }; 
    document.querySelector("img").setAttribute("src", menuArray[i]);
    };
    


 function prevImage(){
    if (i=0){
        i=menuArray.length-1
    }else{
         i=i-1
     }
    document.querySelector("img").setAttribute("src", menuArray[i]);
 }
 
