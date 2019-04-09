
$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});


var dialog1;
var dialog2;
var audio = document.getElementById("guitare");


$("#chitarra").click(function(){
    audio.play();
    return false;
});
$("#woman").hover(function() {
    var pos = $(this).position();
    console.log(pos);
    $(this).css(" outline", "solid 10px red");
});
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