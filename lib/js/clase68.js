var arr = [5, 2, 62, 65661, 66, 56, 56, 85, 56, 88, 212];

console.log('Arreglo original', arr);

console.log('Números pares:', _.filter(arr, function(num) {
    return num % 2 == 0;
}));

console.log('Existe num 13:', _.contains(arr, 13));

console.log('Max:', _.max(arr));

console.log('Ordenar:', arr.sort(function(a, b) {
    return a - b;
}));

console.log('Ordenar Random:', _.shuffle(arr));

console.log('Ordenar Random:', _.unique(arr));

console.log('-*-*-*-*-*-*');

var obj = {
    nombre: "Edwar",
    edad: 21,
    peso: "78Kg"
}

console.log('Llaves: ', _.keys(obj));

console.log('Values: ', _.values(obj));

console.log('Pick: ', _.pick(obj, 'edad', 'peso'));

console.log('Cuantos elementos hay: ', _.size(obj));