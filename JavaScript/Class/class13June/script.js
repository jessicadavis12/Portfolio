

document.querySelector("#hide").addEventListener("click", 
function(){
    if (document.querySelector("#hide").checked){
        document.querySelector("#soup").style.display="none"
    }else{
        document.querySelector("#soup").style.display = "initial"
    }

})