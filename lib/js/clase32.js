var btn1 = $('#btn1'),
    btn2 = $('#btn2'),
    btn3 = $('#btn3');

var div = $('#contenedor');

div.on({
    saltar: function() {
        console.log("Saltar");
    },
    golpear: function(e, data) {
        console.log("Golpeando " + data + "!");
    },
    click: function() {
        console.log("Simulando un click");
    }
});

btn1.click(function() {
    div.trigger('saltar');
});

btn2.click(function() {
    div.trigger('golpear', ['Muy fuerte']);
});

btn3.click(function() {
    div.trigger('click');
});