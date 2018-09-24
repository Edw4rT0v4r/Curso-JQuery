$('input[type=text]').val(function() {
    return this.id;
});

var p = $('.lipsum');
// Busca entre todos los parrafos el parecido y los esconde
p.filter(function() {
    return $(this).text().match(/ex/i) != null;
}).hide();

// actualizamos la variable de los parrafos solo dejando los visibles
p = p.filter(':visible')

// agregamos un indice a los parrafos visibles
p.prepend(function(index) {
    return (index + 1) + ")";
});

// a los parrafos con indice impar tendran un color y los par otro color
p.css('color', function(index) {
    return index % 2 == 1 ? 'blue' : 'red';
});

// Parrafo muy grande le agregamos puntos suspensivos 
p.html(function() {
    var content = $(this).text();
    if (content.length > 41) {
        return content.slice(0, 40) + "...";
    }
});