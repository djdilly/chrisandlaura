$('.parallax').scroll(function() {
    var heightOfImage2 = $('#blackOverlay2').height()
    var quarterHeightOfImage2 = heightOfImage2 / 4
    var dimPoint2 = ($('#blackOverlay2').offset().top - $('#blackOverlay2').parent().position().top) + quarterHeightOfImage2;
    if (dimPoint2 < 0 && dimPoint2 + heightOfImage2 > 0) {
        $("#blackOverlay2").css("opacity", 0 - dimPoint2 / 700);
    }
});