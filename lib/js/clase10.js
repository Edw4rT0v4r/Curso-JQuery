$(function() {
    $(document).on('contextmenu', function(e) {
        // podemos bloquear el menu contextual
        e.preventDefault()
        // mostramos las funciones que me permite el evento e
        console.log(e)

        $('.menu').remove()

        var div = $('<div>', {
            'class': 'menu',
            'css': {
                'top': e.offsetY,
                'left': e.offsetX
            },
            'animate': {
                'width': '100',
                'height': '300'
            }
        })
        div.appendTo('body')
    })
})