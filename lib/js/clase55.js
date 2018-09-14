var elemento = $('.cuadrado');
var direccion = 'abajo';

if (direccion == "arriba") {
    // elemento.slideUp();
} else {
    elemento.attr('style', 'display:none');
    // elemento.slideDown();
}

elemento[direccion == 'arriba' ? 'slideUp' : 'slideDown']();