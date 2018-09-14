$.fn.requerido = function() {
    var input = $(this),
        ayuda = "";

    if (input.attr("required")) {
        mostarError(input)
    }

    input.on('keyup', function() {
        if (input.val().length > 0) {
            input.next().remove();
            input.parent().removeClass('border border-danger');
        } else {
            mostarError(input)
        }
    });

    function mostarError(input) {
        ayuda += '';
        ayuda += '<div class="text-danger">';
        ayuda += '  Este campo es necesario';
        ayuda += '</div>';

        input.after(ayuda);
        input.parent().addClass('border border-danger');
    }
}

$('#txtNombre').requerido();
$('#txtApellido').requerido();