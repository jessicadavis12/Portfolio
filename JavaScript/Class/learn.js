document.querySelector("button").addEventListener("click", 
function(){
    document.querySelector("h1").style.color = "blue";
});

document.querySelector("h1").addEventListener("mouseout",
function(){
    document.querySelector("p").textContent = "Cheesecake Bikes";

})
