$('button').on('click', function() {
    var numeros = $('#numeros li');

    numeros.sort(function(a, b) {
        return parseInt(a.textContent) > parseInt(b.textContent);
    }).appendTo(numeros.parent());
});