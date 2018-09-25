var fil = $('#filtros'),
    canvas = $();

fil.on('change', function() {
    var tmp = $('<canvas>').insertAfter(fil).hide();
    var filtro = $(this).val();

    Caman(tmp[0], '../assets/img/Katy_Perry.jpg', function() {
        canvas.remove();

        canvas = tmp.show();
        if (filtro in this) {
            this[filtro]().render();
        }

    });
});

fil.trigger('change');