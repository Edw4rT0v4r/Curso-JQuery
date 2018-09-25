var tarjetas = $('.tarjetas'),
    arrElem = [];

for (var i = 0; i <= 50; i++) {
    var random = Math.round((Math.random() * 3) + 1);
    var clase = 'x' + random;

    arrElem.push('<div class="tarjeta ' + clase + '"> </div>');
}

tarjetas.append(arrElem.join(''));

tarjetas.masonry({
    itemSelector: '.tarjeta'
});