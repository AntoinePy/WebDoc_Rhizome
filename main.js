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
}, 1000 );
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var femme = document.getElementById('woman');
var btn1 = document.getElementById('val1');
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
femme.onclick = function(){
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
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