// Funciona pero se puede hacer mas rapido
/*$('li').css({
    color: 'red',
    fontSize: '20px'
});*/

var estilo = $("<style>");
estilo.text('li { color:red; font-size:20px;}');
estilo.appendTo('body');