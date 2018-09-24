var divNoti = $('#div-notificaciones');
$('button').on('click', function() {
    var rand = Math.random();
    rand = Math.round(rand * 10);
    var content = '';
    content += '<div class="notificacion" data-numero="' + rand + '">';
    content += '    Número random: ' + rand;
    content += '    <a href="#">X</a>';
    content += '</div>';
    divNoti.append(content);
});

divNoti.on('click', '.notificacion', function() {
    var numero = $(this).data('numero');
    console.log(numero);
});

divNoti.on('click', '.notificacion a', function() {
    $(this).parent().slideUp(500, function() {
        $(this).remove();
    });
});