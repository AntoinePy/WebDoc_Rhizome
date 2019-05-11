var dialog1;
var dialog2;
var modalClass = document.getElementsByClassName('modal');
var titre = document.getElementById("titre");
var eastereggs = document.getElementById("eastereggs");
var menu = document.getElementById("menu");
//AUDIO

var audio = document.getElementById("guitare");
var chienAudio = document.getElementById("chien");
var chatAudio = document.getElementById("chat");
var baudelaireAudio1 = document.getElementById("conversationBaudelaire1");
var baudelaireAudio2 = document.getElementById("conversationBaudelaire2");
var baudelaireAudio3 = document.getElementById("conversationBaudelaire3");
var baudelaireAudio4 = document.getElementById("conversationBaudelaire4");
var enfantAudio1 = document.getElementById("conversationEnfant1");
var enfantAudio2 = document.getElementById("conversationEnfant2");
var enfantAudio3 = document.getElementById("conversationEnfant3");
var irlandaiseAudio1 = document.getElementById("conversationIrlandaise1");
var irlandaiseAudio2 = document.getElementById("conversationIrlandaise2");
var irlandaiseAudio3 = document.getElementById("conversationIrlandaise3");
var irlandaiseAudio4 = document.getElementById("conversationIrlandaise4");
var julietteAudio1 = document.getElementById("conversationJuliette1");
var julietteAudio2 = document.getElementById("conversationJuliette2");
var julietteAudio3 = document.getElementById("conversationJuliette3");
var julietteAudio4 = document.getElementById("conversationJuliette4");
var napoleonAudio1 = document.getElementById("conversationNapoleon1");
var napoleonAudio2 = document.getElementById("conversationNapoleon2");
var napoleonAudio3 = document.getElementById("conversationNapoleon3");
var napoleonAudio4 = document.getElementById("conversationNapoleon4");
var proudhonAudio1 = document.getElementById("conversationProudhon1");
var proudhonAudio2 = document.getElementById("conversationProudhon2");
var proudhonAudio3 = document.getElementById("conversationProudhon3");
var proudhonAudio4 = document.getElementById("conversationProudhon4");
//FIN AUDIO
menu.onclick = function(){
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
        document.location.reload(true);
}
eastereggs.onclick = function(){
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    window.open('http://lareponseestdansletableau.fr','_blank');
};
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
var enfant = document.getElementById('enfant');
var enfantModal = document.getElementById('enfantModal');
var reponseEnfant1= document.getElementById('reponseEnfant1');
var reponseEnfant2 = document.getElementById('reponseEnfant2');
var enfantModalChoix1 =document.getElementById('enfantModalChoix1');
var enfantModalChoix2 = document.getElementById('enfantModalChoix2');
var spanEnfant = document.getElementById('spanEnfant');

//Enfant display modal
enfant.onclick = function(){
    enfantModal.style.display = "block";
    enfantAudio1.play();
    setTimeout( function(){
        enfantModalChoix1.style.display = "block";
        enfantModalChoix2.style.display = "block";
    } , 8000);

};

//Réponse 1 est cliquer
reponseEnfant1.onclick = function(){
    enfantAudio2.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    enfantModalChoix1.style.display = "none";
    enfantModalChoix2.style.display = "none";
    enfantModal.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src="img/Emile_F2.jpg";
    } , 1000);

};

//Réponse 2 est cliqué
reponseEnfant2.onclick = function() {
    enfantAudio3.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    enfantModalChoix1.style.display = "none";
    enfantModalChoix2.style.display = "none";
    enfantModal.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src = "img/Emile_F1.jpg";
    } , 1000);

};

//Tout fermer
spanEnfant.onclick = function () {
    enfantModalChoix1.style.display = "none";
    enfantModalChoix2.style.display = "none";
    enfantModal.style.display = "none";
    enfantAudio1.pause();
    enfantAudio1.currentTime = 0;
    enfantAudio2.pause();
    enfantAudio2.currentTime = 0;
    enfantAudio3.pause();
    enfantAudio3.currentTime = 0;
    enfantAudio4.pause();
    enfantAudio4.currentTime = 0;
};


//////////////////////////////////////// Fin Enfant ////////////////////////////////////////////////


//////////////////////////////////////// Napoléon ////////////////////////////////////////////////

//variable Napoléon
var napoleon =document.getElementById('napoleon');
var napoleonModal = document.getElementById('napoleonModal');
var reponseNapoleon1 = document.getElementById('reponseNapoleon1');
var reponseNapoleon2 = document.getElementById('reponseNapoleon2');
var napoleonModalChoix1 = document.getElementById('napoleonModalChoix1');
var napoleonModalChoix2 = document.getElementById('napoleonModalChoix2');
var spanNapoleon = document.getElementById('spanNapoleon');

//Napoléon display modal
napoleon.onclick = function(){
    napoleonModal.style.display = "block";
    napoleonAudio1.play();
    setTimeout(function(){
        napoleonAudio2.play();
    }, 9000);
    setTimeout( function(){
        napoleonModalChoix1.style.display = "block";
        napoleonModalChoix2.style.display = "block";
    } , 8000);

};

//Réponse 1 est cliquer
reponseNapoleon1.onclick = function(){
    napoleonAudio3.play();
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
    napoleonAudio4.play();
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
    napoleonAudio1.pause();
    napoleonAudio1.currentTime = 0;
    napoleonAudio2.pause();
    napoleonAudio2.currentTime = 0;
    napoleonAudio3.pause();
    napoleonAudio3.currentTime = 0;
    napoleonAudio4.pause();
    napoleonAudio4.currentTime = 0;
};

//////////////////////////////////////// Fin Napoléon ////////////////////////////////////////////////




//////////////////////////////////////// Proudhon ////////////////////////////////////////////////

//variable Proudhon
var proudhon =document.getElementById('prudhon');
var proudhonModal = document.getElementById('proudhonModal');
var reponseProudhon1 = document.getElementById('reponseProudhon1');
var reponseProudhon2 = document.getElementById('reponseProudhon2');
var proudhonModalChoix1 = document.getElementById('proudhonModalChoix1');
var proudhonModalChoix2 = document.getElementById('proudhonModalChoix2');
var spanProudhon = document.getElementById('spanProudhon');

//Proudhon display modal
proudhon.onclick = function(){
    proudhonModal.style.display = "block";
    proudhonAudio1.play();
    setTimeout(function(){
        proudhonAudio2.play();
    }, 10500);
    setTimeout( function(){
        proudhonModalChoix1.style.display = "block";
        proudhonModalChoix2.style.display = "block";
    } , 8000);

};

//Réponse 1 est cliquer
reponseProudhon1.onclick = function(){
    proudhonAudio3.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    proudhonModal.style.display = "none";
    proudhonModalChoix1.style.display = "none";
    proudhonModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src="img/Proudhon_F1.jpg";
    } , 1000);

};

//Réponse 2 est cliqué
reponseProudhon2.onclick = function() {
    proudhonAudio4.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    proudhonModal.style.display = "none";
    proudhonModalChoix1.style.display = "none";
    proudhonModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src = "img/Proudhon_F2.jpg";
    } , 1000);

};

//Tout fermer
spanProudhon.onclick = function () {
    proudhonModal.style.display = "none";
    proudhonModalChoix1.style.display = "none";
    proudhonModalChoix2.style.display = "none";
    proudhonAudio1.pause();
    proudhonAudio1.currentTime = 0;
    proudhonAudio2.pause();
    proudhonAudio2.currentTime = 0;
    proudhonAudio3.pause();
    proudhonAudio3.currentTime = 0;
    proudhonAudio4.pause();
    proudhonAudio4.currentTime = 0;
};

//////////////////////////////////////// Fin Proudhon ////////////////////////////////////////////////

//////////////////////////////////////// Baudelaire ////////////////////////////////////////////////

//variable Baudelaire
var baudelaire =document.getElementById('baudelaire');
var baudelaireModal = document.getElementById('baudelaireModal');
var reponseBaudelaire1 = document.getElementById('reponseBaudelaire1');
var reponseBaudelaire2 = document.getElementById('reponseBaudelaire2');
var baudelaireModalChoix1 = document.getElementById('baudelaireModalChoix1');
var baudelaireModalChoix2 = document.getElementById('baudelaireModalChoix2');
var spanBaudelaire = document.getElementById('spanBaudelaire');

//baudelaire display modal
baudelaire.onclick = function(){
    baudelaireModal.style.display = "block";
    baudelaireAudio1.play();
    setTimeout(function(){
        baudelaireAudio2.play();
    }, 9000);
    setTimeout( function(){
        baudelaireModalChoix1.style.display = "block";
        baudelaireModalChoix2.style.display = "block";
    } , 8000);

};

//Réponse 1 est cliquer
reponseBaudelaire1.onclick = function(){
    baudelaireAudio3.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    baudelaireModal.style.display = "none";
    baudelaireModalChoix1.style.display = "none";
    baudelaireModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src="img/Baudelaire_F1.jpg";
    } , 1000);

};

//Réponse 2 est cliqué
reponseBaudelaire2.onclick = function() {
    baudelaireAudio4.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    baudelaireModal.style.display = "none";
    baudelaireModalChoix1.style.display = "none";
    baudelaireModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src = "img/Baudelaire_F2.jpg";
    } , 1000);

};

//Tout fermer
spanBaudelaire.onclick = function () {
    baudelaireModal.style.display = "none";
    baudelaireModalChoix1.style.display = "none";
    baudelaireModalChoix2.style.display = "none";
    baudelaireAudio1.pause();
    baudelaireAudio1.currentTime = 0;
    baudelaireAudio2.pause();
    baudelaireAudio2.currentTime = 0;
    baudelaireAudio3.pause();
    baudelaireAudio3.currentTime = 0;
    baudelaireAudio4.pause();
    baudelaireAudio4.currentTime = 0;
};

//////////////////////////////////////// Fin Baudelaire ////////////////////////////////////////////////

//////////////////////////////////////// Irlandaise ////////////////////////////////////////////////

//variable Irlandaise
var irlandaise =document.getElementById('irlandaise');
var irlandaiseModal = document.getElementById('irlandaiseModal');
var reponseIrlandaise1 = document.getElementById('reponseIrlandaise1');
var reponseIrlandaise2 = document.getElementById('reponseIrlandaise2');
var irlandaiseModalChoix1 = document.getElementById('irlandaiseModalChoix1');
var irlandaiseModalChoix2 = document.getElementById('irlandaiseModalChoix2');
var spanIrlandaise = document.getElementById('spanIrlandaise');

//Irlandaise display modal
irlandaise.onclick = function(){
    irlandaiseModal.style.display = "block";
    irlandaiseAudio1.play();
    setTimeout(function(){
        irlandaiseAudio2.play();
    }, 18000);
    setTimeout( function(){
        irlandaiseModalChoix1.style.display = "block";
        irlandaiseModalChoix2.style.display = "block";
    } , 8000);

};

//Réponse 1 est cliquer
reponseIrlandaise1.onclick = function(){
    irlandaiseAudio3.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    irlandaiseModal.style.display = "none";
    irlandaiseModalChoix1.style.display = "none";
    irlandaiseModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src="img/Irlandaise_F1.jpg";
    } , 1000);

};

//Réponse 2 est cliqué
reponseIrlandaise2.onclick = function() {
    irlandaiseAudio4.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    irlandaiseModal.style.display = "none";
    irlandaiseModalChoix1.style.display = "none";
    irlandaiseModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src = "img/Irlandaise_F2.jpg";
    } , 1000);

};

//Tout fermer
spanIrlandaise.onclick = function () {
    irlandaiseModal.style.display = "none";
    irlandaiseModalChoix1.style.display = "none";
    irlandaiseModalChoix2.style.display = "none";
    irlandaiseAudio1.pause();
    irlandaiseAudio1.currentTime = 0;
    irlandaiseAudio2.pause();
    irlandaiseAudio2.currentTime = 0;
    irlandaiseAudio3.pause();
    irlandaiseAudio3.currentTime = 0;
    irlandaiseAudio4.pause();
    irlandaiseAudio4.currentTime = 0;
};

//////////////////////////////////////// Fin Irlandaise ////////////////////////////////////////////////

//////////////////////////////////////// Juliette ////////////////////////////////////////////////

//variable Juliette
var juliette =document.getElementById('juliette');
var julietteModal = document.getElementById('julietteModal');
var reponseJuliette1 = document.getElementById('reponseJuliette1');
var reponseJuliette2 = document.getElementById('reponseJuliette2');
var julietteModalChoix1 = document.getElementById('julietteModalChoix1');
var julietteModalChoix2 = document.getElementById('julietteModalChoix2');
var spanJuliette = document.getElementById('spanJuliette');

//Juliette display modal
juliette.onclick = function(){
    julietteModal.style.display = "block";
    julietteAudio1.play();
    setTimeout(function(){
        julietteAudio2.play();
    }, 10000);
    setTimeout( function(){
        julietteModalChoix1.style.display = "block";
        julietteModalChoix2.style.display = "block";
    } , 8000);

};

//Réponse 1 est cliquer
reponseJuliette1.onclick = function(){
    julietteAudio3.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    julietteModal.style.display = "none";
    julietteModalChoix1.style.display = "none";
    julietteModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src="img/Juliette_F1.jpg";
    } , 1000);

};

//Réponse 2 est cliqué
reponseJuliette2.onclick = function() {
    julietteAudio4.play();
    $("#atelier").mapster(
        {
            fillColor: 'ff0000',
            fillOpacity: 0.3
        });
    julietteModal.style.display = "none";
    julietteModalChoix1.style.display = "none";
    julietteModalChoix2.style.display = "none";
    setTimeout( function(){
        document.getElementsByTagName("img").item(0).src = "img/Juliette_F2.jpg";
    } , 1000);

};

//Tout fermer
spanJuliette.onclick = function () {
    julietteModal.style.display = "none";
    julietteModalChoix1.style.display = "none";
    julietteModalChoix2.style.display = "none";
    julietteAudio1.pause();
    julietteAudio1.currentTime = 0;
    julietteAudio2.pause();
    julietteAudio2.currentTime = 0;
    julietteAudio3.pause();
    julietteAudio3.currentTime = 0;
    julietteAudio4.pause();
    julietteAudio4.currentTime = 0;
};
/* window.onclick = function(event){

    if(event.target == enfantModal){
        enfantModal.style.display = "none";
    }
    else if(event.target == enfantModalChoix1){
        enfantModalChoix1.style.display = "none";
    }
    else if(event.target == enfantModalChoix2){
        enfantModalChoix2.style.display = "none";
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
    } */
//////////////////////////////////////// Fin Juliette ////////////////////////////////////////////////



//IMG
var atelier = document.getElementById('atelier');


/*


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
        document.getElementsByTagName("img").item(0).src="img/baudelaire_F1.jpg";
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