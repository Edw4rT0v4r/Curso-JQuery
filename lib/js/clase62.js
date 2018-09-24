// var hulk = {
//     nombre: 'Hulk',
//     acciones: {
//         smash: function() {
//             console.log(this.nombre + ' smash!');
//         },
//         golpear: function() {
//             console.log(this.nombre + ' golpear!');
//         }
//     }
// }
//
// hulk.acciones.smash();

// el metodo $.proxy fuerza al this hacer referencia a lo que quiero
$('button').click($.proxy(function() {
    $(this).toggle();
}, $('#imgs')));