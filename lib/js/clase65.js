console.log('Media queries', Modernizr.mq);

var w = $(window);

w.on('resize', function() {
    if (Modernizr.mq('(max-width: 640px) and (orientation: portrait)')) {
        console.log('Celular en modo portrait');
    } else if (Modernizr.mq('(max-width: 960px)')) {
        console.log('Es una pantalla poco estrecha');
    } else {
        console.log('Pantalla normal');
    }
})