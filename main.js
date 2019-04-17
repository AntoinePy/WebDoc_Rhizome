var dialog1;
var dialog2;
var audio = document.getElementById("guitare");
$("#chitarra").click(function(){
    audio.play();
    return false;
});
$("#atelier").mapster(
{
    fillColor: 'ff0000',
    fillOpacity: 0.3
});
setTimeout( function() {
    document.getElementsByTagName( "input" )[0].click();
    document.getElementsByTagName( "input" )[1].click();
    document.getElementsByTagName( "input" )[2].click();
    document.getElementsByTagName( "input" )[3].click();
}, 1000 ); 

//Modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var enfantModal = document.getElementById('enfantModal');
var enfantModal2 = document.getElementById('enfantModal2');
//AREA
var enfant = document.getElementById('enfant');
var femme = document.getElementById('woman');
//Boutons
var btn1 = document.getElementById('val1');
var enfantBtn1 = document.getElementById('enfantBtn');
//Close span
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var spanEnfant1 = document.getElementsByClassName("close")[2];
var spanEnfant2 = document.getElementsByClassName("close")[3];

femme.onclick = function(){
    modal.style.display = "block";
}
enfant.onclick = function(){
    enfantModal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
spanEnfant1.onclick = function() {
    enfantModal.style.display = "none";
}
spanEnfant2.onclick = function() {
    enfantModal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }else if(event.target == modal2){
        modal2.style.display = "none";
    }
}
btn1.onclick = function(){
    modal.style.display = "none";
    modal2.style.display = "block";
}
enfantBtn1.onclick = function(){
    enfantModal.style.display = "none";
    enfantModal2.style.display = "block";
}

$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
});