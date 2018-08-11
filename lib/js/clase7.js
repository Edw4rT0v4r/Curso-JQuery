$("li", "#1ralista").each(function() {
    console.log($(this).html());
})

var div = $('<div>', {
    'class': 'container',
    'css': {
        'background-color': 'rgb(40, 14, 227)'
    },
    'width': 30,
    'height': 30,
    'animate': {
        'width': 250,
        'height': 50
    }
})

div.appendTo('body')