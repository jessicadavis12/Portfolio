var theEmail= $("#email");
var thePassword= $("#password")

$("email").mouseover(function(){
    $(this).focus();
})

//$("#container").css("border", "solid black 3px")


// $("#email, #password").keypress(function(event){
//     if(event.which==13){
//         function validateEmail(theEmail) {
//             var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//             return emailReg.test(theEmail);
//             }
//     if( !validateEmail(theEmail)){
//         $("emv").text("Please check entry, valid email not entered.");
//         }
//    // if("#password").length<6{
//    //     $("pwv").text("Please enter a longer password")
//    // };
// });
