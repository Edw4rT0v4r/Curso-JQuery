var cb = $.Callbacks();

cb.add(function(mensaje) {
    console.log(mensaje);
});

cb.add(function() {
    console.log("*-*-*-*-*");
});

$('#btn1').on('click', function() {
    cb.fire('Linea 1');
    cb.fire('Linea 2');
    cb.fire('Linea 3');
});

var cbFlag = $.Callbacks('stopOnFalse');

cbFlag.add(function() {
    return $('#checkbox').is(':checked');
});

cbFlag.add(function() {
    console.log("Esta Seleccionado");
})

$('#btn2').on('click', cbFlag.fire);