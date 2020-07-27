$("#container").css("border", "solid black 3px");
$("#email, #password").hover(function(){
    $(this).focus();
            });

$(document).ready(function(){
$('form').submit(function(event){
    event.preventDefault()
    var theEmail= $("#email").val();
    var thePassword= $("#password").val();

    function validateEmail(theEmail) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test(theEmail);
    };
            
    if(!validateEmail(theEmail)){
        $("#emv").text("Please check entry, valid email not entered.");
        };

    if (thePassword.length < 6){
      $("#pwv").text("Please enter a longer password")
    };
});
});
