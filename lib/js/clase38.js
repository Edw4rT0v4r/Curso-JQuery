var forma = $('#forma');

console.log(forma.serialize());

console.log("/*/*/*/*/*/*/*/*/*");

var res = {
    tipo: 'perro',
    nombre: 'Kenay'
};

console.log($.param(res));

console.log("/*/*/*/*/*/*/*/*/*");

console.log(forma.serializeArray());