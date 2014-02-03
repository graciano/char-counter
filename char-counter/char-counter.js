$.fn.charCounter = function (parameters){
    var seletorWarn = parameters.seletorWarn;
    var warnText = parameters.warnText;
    var MAX = parameters.maximum;
    var doWhenMax = parameters.doWhenMax;
    if(!MAX){
        MAX = 140;
    }
    if(!warnText){
        warnText = "";
    }
    $(this).on('keyup keydown change', function(){
        cont = $(this).val().length;
        $(seletorWarn).text(cont);
        $(seletorWarn).css('color',blueToRedSmoothTransition(cont/MAX));
        if(cont>=MAX) {
            $(seletorWarn).text(cont+" "+warnText);
        }

    });
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function blueToRedSmoothTransition(fraction){
    var r = parseInt(255*fraction);
    var b = 255 - r;
    var g = 0;
    return rgbToHex(r, g, b);
}