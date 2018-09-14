var dias_mes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

var domingos = $.grep(dias_mes, function(dia, index) {
    var fecha = new Date();
    fecha.setDate(dia);
    return fecha.getDay() == 0;
});

console.log('Domingo: ', domingos.join(', '));