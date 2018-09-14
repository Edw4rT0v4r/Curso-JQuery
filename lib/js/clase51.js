var checkboxes = $('.dia'),
    mensaje = $('#diasLaborales');
// map() recorre todos los elementos
function callback() {
    var dias = checkboxes.filter(':checked').map(function() {
        return $(this).val();
    }).get();
    mensaje.text('He seleccionado: ' + dias.join(', '));
}

checkboxes.on('click', callback);

callback();