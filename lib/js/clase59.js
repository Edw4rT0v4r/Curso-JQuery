jQuery.easing.rebote = function(x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
};

var ball = $('#football');

$('#btnShow').on('click', function() {
    ball.stop().animate({
        bottom: 0,
        // right: 0,
        opacity: 1
    }, 1500, 'rebote');
});

$('#btnHide').on('click', function() {
    ball.stop().animate({
        opacity: 0,
        bottom: 500
    })
});