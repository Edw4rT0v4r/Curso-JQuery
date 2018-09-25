var elem = $('#rumble').jrumble({
    x: 10,
    y: 10,
    rotation: 4
});

elem.trigger('startRumble');

setTimeout(function() {
    elem.trigger('stopRumble');
}, 2000);