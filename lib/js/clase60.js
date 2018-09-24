var elem = $('#elem');
console.log('Empienzan los eventos...');

console.log(elem.queue());

elem.animate({
    width: "100px",
    height: "40px"
}, 1000);


elem.queue(function(next) {
    $.get('../assets/data/1.json', function(r) {
        elem.text(r.mensaje);
    });
    next();
});

console.log("Animaciones en cola", elem.queue().length);

elem.animate({
    borderRadius: "20px"
}, 1000);