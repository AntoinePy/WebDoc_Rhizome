var dialog1;
var dialog2;
var audio = document.getElementById("guitare");
var chienAudio = document.getElementById("chien");
var chatAudio = document.getElementById("chat");
var modalClass = document.getElementsByClassName('modal');
var titre = document.getElementById("titre");
$(function () {
    $('.text').textillate({ in: { effect: 'fadeIn' } });
});
$("#chitarra").click(function(){
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    audio.play();
    return false;
});
$("#cane").click(function(){
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    chienAudio.play();
    return false;
});
$("#gato").click(function(){
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    chatAudio.play();
    return false;
});

$("#atelier").mapster(
{
    fillColor: 'ff0000',
    fillOpacity: 0.3,
    singleSelect: true
});
setTimeout( function() {
    document.getElementsByTagName( "input" )[0].click();
    document.getElementsByTagName( "input" )[1].click();
    document.getElementsByTagName( "input" )[2].click();
    document.getElementsByTagName( "input" )[3].click();
}, 1000 );

//////////////////////////////////////// Enfant ////////////////////////////////////////////////

// variable enfant
$enfant =  $("#enfant");
$enfantModal = $("#enfantModal");
$reponseEnfant1= $("#reponseEnfant1");
$reponseEnfant2 = $("#reponseEnfant2");
$enfantModalChoix1 = $("#enfantModalChoix1");
$enfantModalChoix2 = $("#enfantModalChoix2");
$spanEnfant = $("#spanEnfant");

//Enfant display modal
enfant.onclick = function(){
    enfantModal.style.display = "block";
    setTimeout( function(){
        enfantModalChoix1.style.display = "block";
        enfantModalChoix2.style.display = "block";
    } , 8000);

};

//Réponse 1 est cliquer
reponseEnfant1.onclick = function(){
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    enfantModalChoix1.style.display = "none";
    enfantModalChoix2.style.display = "none";
    enfantModal.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src="img/Emile_F1.jpg";
    } , 1000);

};

//Réponse 2 est cliqué
reponseEnfant2.onclick = function() {
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    enfantModalChoix1.style.display = "none";
    enfantModalChoix2.style.display = "none";
    enfantModal.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src = "img/Emile_F2.jpg";
    } , 1000);

};

//Tout fermer
spanEnfant.onclick = function () {
    enfantModalChoix1.style.display = "none";
    enfantModalChoix2.style.display = "none";
    enfantModal.style.display = "none";
};


//////////////////////////////////////// Fin Enfant ////////////////////////////////////////////////


//////////////////////////////////////// Napoléon ////////////////////////////////////////////////

//variable Napoléon
$napoleon = $("#napoleon");
$napoleonModal = $("#napoleonModal");
$reponseNapoleon1 = $("#reponseNapoleon1");
$reponseNapoleon2 = $("#reponseNapoleon2");
$napoleonModalChoix1 = $("#napoleonModalChoix1");
$napoleonModalChoix2 = $("#napoleonModalChoix2");
$spanNapoleon = $("#spanNapoleon");

//Napoléon display modal
napoleon.onclick = function(){
    napoleonModal.style.display = "block";

    setTimeout( function(){
        napoleonModalChoix1.style.display = "block";
        napoleonModalChoix2.style.display = "block";
    } , 8000);

};

//Réponse 1 est cliquer
reponseNapoleon1.onclick = function(){
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    napoleonModal.style.display = "none";
    napoleonModalChoix1.style.display = "none";
    napoleonModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src="img/Napoleon_F1.jpg";
    } , 1000);

};

//Réponse 2 est cliqué
reponseNapoleon2.onclick = function() {
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    napoleonModal.style.display = "none";
    napoleonModalChoix1.style.display = "none";
    napoleonModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src = "img/Napoleon_F2.jpg";
    } , 1000);

};

//Tout fermer
spanNapoleon.onclick = function () {
    napoleonModal.style.display = "none";
    napoleonModalChoix1.style.display = "none";
    napoleonModalChoix2.style.display = "none";
};

//////////////////////////////////////// Fin Napoléon ////////////////////////////////////////////////




//IMG
var atelier = document.getElementById('atelier');





var prudhonModal = document.getElementById('prudhonModal');
var prudhonModal2 = document.getElementById('prudhonModal2');

var baudelaireModal = document.getElementById('baudelaireModal');
var baudelaireModal2 = document.getElementById('baudelaireModal2');

var irlandaiseModal  = document.getElementById('irlandaiseModal');
var irlandaiseModal2 = document.getElementById('irlandaiseModal2');

var julietteModal  = document.getElementById('julietteModal');
var julietteModal2 = document.getElementById('julietteModal2');

//AREA

var femme = document.getElementById('woman');

var prudhon = document.getElementById('prudhon');
var baudelaire = document.getElementById('baudelaire');
var irlandaise = document.getElementById('irlandaise');
var juliette = document.getElementById('juliette');
var eastereggs = document.getElementById('eastereggs');
//Boutons
var btn1 = document.getElementById('val1');
var napoleonBtn1 = document.getElementById('napoleonBtn');
var napoleonBtn2 = document.getElementById('napoleonBtn2');
var prudhonBtn1 = document.getElementById('prudhonBtn');
var prudhonBtn2 = document.getElementById('prudhonBtn2');
var baudelaireBtn1 = document.getElementById('baudelaireBtn');
var baudelaireBtn2 = document.getElementById('baudelaireBtn2');
var irlandaiseBtn1 = document.getElementById('irlandaiseBtn');
var irlandaiseBtn2 = document.getElementById('irlandaiseBtn2');
var julietteBtn1 = document.getElementById('julietteBtn');
var julietteBtn2 = document.getElementById('julietteBtn2');

//Close span
/*var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var spanEnfant = document.getElementsByClassName("close")[2];
var spanEnfantChoix1 = document.getElementsByClassName("close")[3];
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
*/
/*
femme.onclick = function(){
    for(var i=0; i<modalClass.length;i++){
        modalClass[i].style.display = 'none';
    }
    modal.style.display = "block";
};

napoleon.onclick = function(){
    for(var i=0; i<modalClass.length;i++){
        modalClass[i].style.display = 'none';
    }
    napoleonModal.style.display = "block";
};
prudhon.onclick = function(){
    for(var i=0; i<modalClass.length;i++){
        modalClass[i].style.display = 'none';
    }
    prudhonModal.style.display = "block";
};
baudelaire.onclick = function(){
    for(var i=0; i<modalClass.length;i++){
        modalClass[i].style.display = 'none';
    }
    baudelaireModal.style.display = "block";
};

irlandaise.onclick = function(){
    for(var i=0; i<modalClass.length;i++){
        modalClass[i].style.display = 'none';
    }
    irlandaiseModal.style.display = "block";
};

juliette.onclick = function(){
    for(var i=0; i<modalClass.length;i++){
        modalClass[i].style.display = 'none';
    }
    julietteModal.style.display = "block";
};
eastereggs.onclick = function(){
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    window.open('https://fr.wikipedia.org/wiki/Gustave_Courbet','_blank');
};
spanEnfant.onclick = function() {
    enfantModal.style.display = "none";
    document.location.reload(true);
}
spanEnfantChoix1.onclick = function() {
    enfantModalChoix1.style.display = "none";
};
spanNapoleon1.onclick = function() {
    napoleonModal.style.display = "none";
};
spanNapoleon2.onclick = function() {
    napoleonModal2.style.display = "none";
};
spanPrudhon1.onclick = function() {
    prudhonModal.style.display = "none";
};
spanPrudhon2.onclick = function() {
    prudhonModal2.style.display = "none";
};
spanBaudelaire1.onclick = function() {
    baudelaireModal.style.display = "none";
};
spanBaudelaire2.onclick = function() {
    baudelaireModal2.style.display = "none";
};
spanIrlandaise1.onclick = function() {
    irlandaiseModal.style.display = "none";
};
spanIrlandaise2.onclick = function() {
    irlandaiseModal2.style.display = "none";
};
spanJuliette1.onclick = function() {
    julietteModal.style.display = "none";
};
spanJuliette2.onclick = function() {
    julietteModal2.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }else if(event.target == modal2){
        modal2.style.display = "none";
    }
};
btn1.onclick = function(){
    modal.style.display = "none";
    modal2.style.display = "block";
};

napoleonBtn1.onclick = function(){
    napoleonModal.style.display = "none";
    napoleonModal2.style.display = "block";
};
napoleonBtn2.onclick = function(){
    napoleonModal2.style.display = "none";
    if(document.getElementById("chk6").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Napoleon_F1.jpg";
    }else if(document.getElementById("chk7").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Napoleon_F2.jpg";
    }
};

prudhonBtn1.onclick = function(){
    prudhonModal.style.display = "none";
    prudhonModal2.style.display = "block";
};

prudhonBtn2.onclick = function(){
    prudhonModal2.style.display = "none";
    if(document.getElementById("chk8").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Proudhon_F1.jpg";
    }else if(document.getElementById("chk9").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Proudhon_F2.jpg";
    }
};
baudelaireBtn1.onclick = function(){
    baudelaireModal.style.display = "none";
    baudelaireModal2.style.display = "block";
};
baudelaireBtn2.onclick = function(){
    baudelaireModal2.style.display = "none";
    if(document.getElementById("chk10").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Baudelaire_F1.jpg";
    }else if(document.getElementById("chk11").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Baudelaire_F2.jpg";
    }
};
irlandaiseBtn1.onclick = function(){
    irlandaiseModal.style.display = "none";
    irlandaiseModal2.style.display = "block";
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
};
irlandaiseBtn2.onclick = function(){
    irlandaiseModal2.style.display = "none";
    if(document.getElementById("chk12").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Irlandaise_F1.jpg";
    }else if(document.getElementById("chk13").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Irlandaise_F2.jpg";
    }
};

julietteBtn1.onclick = function(){
    julietteModal.style.display = "none";
    julietteModal2.style.display = "block";
}
julietteBtn2.onclick = function(){
    julietteModal2.style.display = "none";
    if(document.getElementById("chk14").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Juliette_F1.jpg";
    }else if(document.getElementById("chk15").checked){
        $("#atelier").mapster(
            {
                fillColor: 'ff0000',
                fillOpacity: 0.3
            });
        document.getElementsByTagName("img").item(0).src="img/Juliette_F2.jpg";
    }
};
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
}*/
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