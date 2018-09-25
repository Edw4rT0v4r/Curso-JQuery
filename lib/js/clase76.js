var titulo = $('title');

var contador = 0;
var favicon = new Favico({
    animation:'slide'
});

setInterval(function() {
    contador++;
    titulo.text('(' + contador + ') jQuery');
    favicon.badge(contador);
}, 2000);
