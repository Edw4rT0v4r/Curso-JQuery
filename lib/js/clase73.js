$('button').on('click', function() {
    $('#colores').css('background-color', 'rgb(145, 163, 131)')
        .animate({
            'background-color': 'rgb(29, 43, 163)'
        })
        .animate({
            'background-color': 'rgb(29, 163, 31)'
        })
        .animate({
            'background-color': 'rgba(163, 118, 29, 0.72)'
        })
        .animate({
            'background-color': 'rgba(147, 42, 102, 0.73)'
        })
        .animate({
            'background-color': 'rgb(128, 163, 29)'
        })
});