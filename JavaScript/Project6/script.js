var i= 1;

function changeColor(){
var backgroundColors=['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];
document.querySelector("body").style.background=(backgroundColors[i]);
i++;
if(i> backgroundColors.length-1){
    i=1;
}
};



setInterval(changeColor, 1000)


function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
   
    if(h==0){
        h = 12;
    }

    if(h > 12){
        h=h-12;
        session = "PM";
    }

   h = (h<10) ? "0"+h : h;
   m = (m<10) ? "0"+m : m;
   s = (s<10) ? "0"+s : s;
    
    var time = h + ":" + m + ":" + s + session;
    document.getElementById("clock").innerHTML = time;
    setTimeout(showTime, 1000);
    
}