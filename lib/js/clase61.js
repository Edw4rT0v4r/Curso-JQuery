// Propiedad de jQuery para manipular el css
$.cssHooks['rotar'] = {
    set: function(element, value) {
        console.log(value);
        // parseInt(value, 10) para obtener el valor númerico
        $(element).css('transform', 'rotate(' + parseInt(value, 10) + 'deg)');
    }
}

$('#elem').css('rotar', 20);