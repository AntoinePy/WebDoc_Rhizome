$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

var dialog1;
var dialog2;
var audio = document.getElementById("guitare");
function eventFire(el, etype){
    console.log("Jacky");
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
$("#chitarra").click(function(){
    audio.play();
    return false;
});
var image = $("atelier");
console.log(image);
image.mapster(
{
        fillOpacity: 0.4,
        fillColor: "d42e16",
        stroke: true,
        strokeColor: "3320FF",
        strokeOpacity: 0.8,
        strokeWidth: 4,
        singleSelect: true,
        mapKey: 'name',
        listKey: 'name'
}   
);
$("#woman").click(function(){
    $("#dialog").dialog({
        classes: {
            "ui-dialog":"highlight"
        },
        modal: true
    });
    dialog1 = $("#dialog").dialog();
});

$("#val1").click(function(){
        dialog2 = $("#dialog2").dialog();
        dialog1.dialog('close');

    }
);

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