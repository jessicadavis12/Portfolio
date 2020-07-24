// $("div").css("background-color", "blue");
// $("#food").css("border", "green solid 8px");
// $(".fun").css("fontSize", "48px");
// $("div:first-of-type").css("color", "orange");
// // $("img").attr("src", "https://i.imgur.com/D9HkrX4.gif");
// $("input").attr("type","color");
// $("input").val("Did you see the");
// $("select").val();
//$("img").addClass("indicator");
//$("img").removeClass("indicator");
//$("img").toggleClass("indicator");

// $("img").click(function(){
//     alert("You clicked the image");
// });

// $("h1").click(function(){
//     $(this).fadeOut();
// });

// $("li").click(function(){
//     var text=$(this).text();
//     alert("you selected" + text);
// });

// $("input").keypress(function(event){
//     // console.log(event.which);
//     if(event.which==13){
//         alert("You hit the enter button!")
//     }
// });

// $("div").on("click", function(){
//     alert("You clicked in a div")
// });
// $("img").on("mouseenter", function(){
//     $(this).toggleClass("indicator");
// });

// $("img").on("click", function(){
//     $(this).remove()
// });

// $("li").on("click", function(){
//     $(this).parent().remove();
// });

$("img").on("click", function(){
    $(this).fadeOut(10000, function(){
        alert("The image is now gone");
    });
});
