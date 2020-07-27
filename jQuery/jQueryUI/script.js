$('#twd').accordion({active:false, collapsible:true});
$("#cast").sortable();

$("#innerDiv1").draggable({containment:"parent", revert:true});
$( function() {
    $("article").resizable({animate:true, 
    aspectratio: true, ghost:true, maxheight:400,maxWidth: 400});
  } );
$("#circleDiv").click(function(){
    $("#bounceCircle").toggle("bounce", {
        times:3, distance:100}, "slow"
)
});
$("#explodeDiv").click(function(){
    $("#explodeCircle").toggle("explode");
});