$('#btnsiguiente').on('click', function(e, argumentos) {
    argumentos = argumentos || 'red';
    $('.slideshow').css({
        backgroundColor: argumentos
    });
});

var btn = $('#btnsiguiente');

// btn.trigger('click');
btn.trigger('click', ['green']);