var arr = $('li')
var iteracion = 100000
console.time('ciclo nativo JavaScript')

for (var i = 0; i < iteracion; i++) {
    var largo = arr.length;
    for (var z = 0; z < largo; z++) {
        arr[z]
    }
}

console.timeEnd('ciclo nativo JavaScript')

console.time('ciclo jQuery')

for (var i = 0; i < iteracion; i++) {

    arr.each(function(z, val) {
        this;
    })
}

console.timeEnd('ciclo jQuery')