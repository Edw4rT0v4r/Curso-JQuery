// Mala practica para saltar al dom
/*$('#numeros li').eq(2).remove()
$('#numeros li').eq(1).remove()
$('#numeros li').eq(0).remove()*/

var $elemento = $('#numeros li')

/*$elemento.eq(2).remove()
$elemento.eq(1).remove()
$elemento.eq(0).remove()*/

// Alternativa

$elemento.eq(2).remove().end()
    .eq(1).remove().end()
    .eq(0).remove().end()