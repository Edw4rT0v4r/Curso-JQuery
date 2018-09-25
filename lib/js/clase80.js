$('#foto').faceDetection({
    complete: function(caras) {
        for (var i = 0; i < caras.length; i++) {
            var rostro = caras[i];
            console.log(rostro);
            $('<div>', {
                'class': 'cara',
                'css': {
                    'left': rostro.x * rostro.scaleX + 'px',
                    'top': rostro.y * rostro.scaleY + 'px',
                    'width': rostro.width * rostro.scaleX + 'px',
                    'height': rostro.height * rostro.scaley + 'px'
                }
            }).insertAfter(this);
        }
    }
});