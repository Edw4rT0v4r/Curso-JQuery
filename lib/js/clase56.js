var img = $("<img>"),
    canvas = $("#can")[0],
    context = canvas.getContext('2d');

img.on('load', function() {
    context.drawImage(this, 0, 0);
});

img.attr('src', '../assets/img/Katy_Perry.jpg');

$('#btn').on('click', function() {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height),
        px = imageData.data,
        gray = 0;

    for (var i = 0; i < px.length; i += 4) {
        gray = (px[i] + px[i + 1] + px[i + 2]) / 3;

        px[i] = gray;
        px[i + 1] = gray;
        px[i + 2] = gray;
    }

    context.putImageData(imageData, 0, 0);
});