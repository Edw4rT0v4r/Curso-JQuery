var btn = $('#btn');

btn.on('click', function() {
    return "hola";
});

btn.on('click', function(e) {
    console.log(e.result + " mundo");
});