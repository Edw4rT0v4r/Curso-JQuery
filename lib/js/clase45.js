var preloader = $('#preloader'),
    doc = $(document);

doc.ajaxStart(function() {
    preloader.fadeIn();
});

doc.ajaxComplete(() => {
    preloader.delay(800).fadeOut();
});

$.get('../assets/data/1.json', (r) => {
    console.log(r);

    $.get('../assets/data/2.json', (r) => {
        console.log(r);
    });
});