// Son mas lentos que hacerlos por id

$.expr.pseudos.contiene = $.expr.createPseudo(function(texto) {
    return function(elem) {
        return (elem.textContent || elem.innerText || jQuery(elem).text || '')
            .toLowerCase().indexOf(texto.toLowerCase()) >= 0;
    };
});

var elementos = $('.lipsum:contiene(lorem)');

console.log(elementos);