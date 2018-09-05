$('#diveditabel').attr('contentEditable', true)
// con este boton podemos mantener lo que han editado
$('button').on('click', function() {
    let contenido = $('#diveditabel').text()
    console.log(contenido);
})
// $('#styles').css({
//     'display': 'block',
//     'white-space': 'pre'
// }).attr('contentEditable', true)