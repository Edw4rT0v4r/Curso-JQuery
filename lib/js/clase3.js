// Ambas formas hacen la misma operación
// Se diferencia en que la segunda se ejecuta más rapido

// 1.
if ($("h1").length) {
    console.log("El elemento Existe")
}

// 2.
$("h1").length && console.log("El elemento existe nuevamente")