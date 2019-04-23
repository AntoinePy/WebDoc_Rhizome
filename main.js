var dialog1;
var dialog2;
var audio = document.getElementById("guitare");
var chienAudio = document.getElementById("chien");
var chatAudio = document.getElementById("chat");

$("#chitarra").click(function(){
    audio.play();
    return false;
});
$("#cane").click(function(){
    chienAudio.play();
    return false;
});
$("#gato").click(function(){
    chatAudio.play();
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

var napoleonModal = document.getElementById('napoleonModal');
var napoleonModal2 = document.getElementById('napoleonModal2');

var prudhonModal = document.getElementById('prudhonModal');
var prudhonModal2 = document.getElementById('prudhonModal2');

var baudelaireModal = document.getElementById('baudelaireModal');
var baudelaireModal2 = document.getElementById('baudelaireModal2');

var irlandaiseModal  = document.getElementById('irlandaiseModal');
var irlandaiseModal2 = document.getElementById('irlandaiseModal2');

var julietteModal  = document.getElementById('julietteModal');
var julietteModal2 = document.getElementById('julietteModal2');
//AREA
var enfant = document.getElementById('enfant');
var femme = document.getElementById('woman');
var napoleon = document.getElementById('napoleon');
var prudhon = document.getElementById('prudhon');
var baudelaire = document.getElementById('baudelaire');
var irlandaise = document.getElementById('irlandaise');
var juliette = document.getElementById('juliette');


//Boutons
var btn1 = document.getElementById('val1');
var enfantBtn1 = document.getElementById('enfantBtn');
var napoleonBtn1 = document.getElementById('napoleonBtn');
var prudhonBtn1 = document.getElementById('prudhonBtn');
var baudelaireBtn1 = document.getElementById('baudelaireBtn');
var irlandaiseBtn1 = document.getElementById('irlandaiseBtn');
var julietteBtn1 = document.getElementById('julietteBtn');


//Close span
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var spanEnfant1 = document.getElementsByClassName("close")[2];
var spanEnfant2 = document.getElementsByClassName("close")[3];
var spanNapoleon1 = document.getElementsByClassName("close")[4];
var spanNapoleon2 = document.getElementsByClassName("close")[5];
var spanPrudhon1 = document.getElementsByClassName("close")[6];
var spanPrudhon2 = document.getElementsByClassName("close")[7];
var spanBaudelaire1 = document.getElementsByClassName("close")[8];
var spanBaudelaire2 = document.getElementsByClassName("close")[9];
var spanIrlandaise1 = document.getElementsByClassName("close")[10];
var spanIrlandaise2 = document.getElementsByClassName("close")[11];
var spanJuliette1 = document.getElementsByClassName("close")[12];
var spanJuliette2 = document.getElementsByClassName("close")[13];
femme.onclick = function(){
    modal.style.display = "block";
}
enfant.onclick = function(){
    enfantModal.style.display = "block";
}
napoleon.onclick = function(){
    napoleonModal.style.display = "block";
}
prudhon.onclick = function(){
    prudhonModal.style.display = "block";
}
baudelaire.onclick = function(){
    baudelaireModal.style.display = "block";
}
irlandaise.onclick = function(){
    irlandaiseModal.style.display = "block";
}
juliette.onclick = function(){
    julietteModal.style.display = "block";
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
spanNapoleon1.onclick = function() {
    napoleonModal.style.display = "none";
}
spanNapoleon2.onclick = function() {
    napoleonModal2.style.display = "none";
}
spanPrudhon1.onclick = function() {
    prudhonModal.style.display = "none";
}
spanPrudhon2.onclick = function() {
    prudhonModal2.style.display = "none";
}
spanBaudelaire1.onclick = function() {
    baudelaireModal.style.display = "none";
}
spanBaudelaire2.onclick = function() {
    baudelaireModal2.style.display = "none";
}
spanIrlandaise1.onclick = function() {
    irlandaiseModal.style.display = "none";
}
spanIrlandaise2.onclick = function() {
    irlandaiseModal2.style.display = "none";
}
spanJuliette1.onclick = function() {
    julietteModal.style.display = "none";
}
spanJuliette2.onclick = function() {
    julietteModal2.style.display = "none";
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
napoleonBtn1.onclick = function(){
    napoleonModal.style.display = "none";
    napoleonModal2.style.display = "block";
}
prudhonBtn1.onclick = function(){
    prudhonModal.style.display = "none";
    prudhonModal2.style.display = "block";
}
baudelaireBtn1.onclick = function(){
    baudelaireModal.style.display = "none";
    baudelaireModal2.style.display = "block";
}
irlandaiseBtn1.onclick = function(){
    irlandaiseModal.style.display = "none";
    irlandaiseModal2.style.display = "block";
}
julietteBtn1.onclick = function(){
    julietteModal.style.display = "none";
    julietteModal2.style.display = "block";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
    else if(event.target == modal2){
        modal2.style.display = "none";
    }
    else if(event.target == enfantModal){
        enfantModal.style.display = "none";
    }
    else if(event.target == enfantModal2){
        enfantModal2.style.display = "none";
    }
    else if(event.target == napoleonModal){
        napoleonModal.style.display = "none";
    }
    else if(event.target == napoleonModal2){
        napoleonModal2.style.display = "none";
    }
    else if(event.target == prudhonModal){
        prudhonModal.style.display = "none";
    }
    else if(event.target == prudhonModal2){
        prudhonModal2.style.display = "none";
    }
    else if(event.target == baudelaireModal){
        baudelaireModal.style.display = "none";
    }
    else if(event.target == baudelaireModal2){
        baudelaireModal2.style.display = "none";
    }
    else if(event.target == irlandaiseModal){
        irlandaiseModal.style.display = "none";
    }
    else if(event.target == irlandaiseModal2){
        irlandaiseModal2.style.display = "none";
    }
    else if(event.target == julietteModal){
        julietteModal.style.display = "none";
    }
    else if(event.target == julietteModal2){
        julietteModal2.style.display = "none";
    }

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