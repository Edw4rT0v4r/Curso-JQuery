var lista = $('#lista');
var cont = 0;
lista.on('click', 'li', function() {
    cont++;
    $(this).remove();
    lista.append('<li>Nuevo Item ' + cont + '</li>');
});