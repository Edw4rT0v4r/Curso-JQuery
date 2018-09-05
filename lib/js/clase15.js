var inicio = new Date()

var $elem = $('#elem'),
    arr = []
// Sirve pero no es la mejor forma de optimizar esta manipulación
/*

for (var i = 0; i < 1000; i++) {
    $elem.append('<li>Elemento' + i + '</li>')
}*/

for (var i = 0; i < 1000; i++) {
    arr.push('<li>Elemento' + i + '</li>')
}

$elem.append(arr.join(''))

var fin = new Date()

console.log("Inicio: ", inicio.getTime())
console.log("Fin: ", fin.getTime())
console.log("Diferencia: ", fin.getTime() - inicio.getTime())