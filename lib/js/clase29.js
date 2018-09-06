var btn1 = $('#boton1'),
    btn2 = $('#boton2'),
    btn3 = $('#boton3'),
    btn4 = $('#boton4'),
    btn5 = $('#boton5');

btn1.on('click', function() {
    console.log('click');
});

btn2.on('mouseenter mouseleave', function() {
    console.log("Entra / Sale");
});

btn3.on('click', Math.round(Math.random() * 20), function(e) {
    console.log("El número random es: " + e.data);
});

btn4.on('click.temp', function() {
    console.log("Temp disparado");
});

btn5.on('click', function() {
    console.clear();
    $('button').off('.temp');
    console.log("Eventos de los bonotes temp han sido eliminados");
});