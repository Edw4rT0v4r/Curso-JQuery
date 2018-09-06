var ball = $('<div id = "ball"> </div>').appendTo('body');

var startPosition = {};
var elementPosition = {};

ball.on('mousedown touchstart', function(e) {
    e.preventDefault();

    e = (e.originalEvent.touches) ? e.originalEvent.touches[0] : e;

    startPosition = {
        x: e.pageX,
        y: e.pageY
    };
    elementPosition = {
        x: ball.offset().left,
        y: ball.offset().top
    };

    ball.on('mousemove.rem touchmove.rem', function(e) {
        e = (e.originalEvent.touches) ? e.originalEvent.touches[0] : e;
        ball.css({
            top: elementPosition.y + (e.pageY - startPosition.y),
            left: elementPosition.x + (e.pageX - startPosition.x)
        });
    });
});

ball.on('mouseup touched', function() {
    ball.off('.rem');
});