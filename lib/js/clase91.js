Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#my_camera');

$('button').on('click', function() {
    // take snapshot and get image data
    Webcam.snap(function(data_uri) {
        // display results in page
        $('#resultados').html('<h2>Here is your image:</h2>' +
            '<img src="' + data_uri + '"/>');
    });
})