var txtmmd = $('#txtmmd');
var resmmd = $('#resmmd');

$('button').on('click', function() {
    var text = txtmmd.val();
    var salida = mmd(text);
    resmmd.html(salida);
});