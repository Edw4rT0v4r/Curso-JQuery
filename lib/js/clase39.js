// Tener en cuenta que esto loso funciona si cuentas con un servidor ejemplo (Apache)

var fileInput = $('#inputSubir'),
    btn = $('#btnSubir');

btn.on('click', function() {
    var archivo = fileInput.prop('files');
    if (archivo.length === 0) {
        console.log("Por favor seleccione algún archivo");
        return;
    }

    var fd = new FormData();

    fd.append('file', archivo[0]);

    $.ajax({
        // url: 'xxx/upload.php', colocar la ubicación del archivo php que hace la subida
        data: fd,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(r) {
            console.log(r);
        }
    });
});