function JSON_Reader(archivo) {
    var d = new $.Deferred();

    $.ajax({
        url: '../assets/data/' + archivo + '.json',
        dataType: 'json',
        success: function(data) {
            d.resolve(data);
        },
        error: function() {
            d.reject();
        }
    });

    return d.promise();
}

var resultado = JSON_Reader('1');

resultado.done(function(data) {
    console.log("data Recibida", data);
});
resultado.fail(function() {
    console.log("El archivo no existe");
})