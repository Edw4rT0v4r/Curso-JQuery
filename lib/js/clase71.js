$('#btn1').on('click', function() {
    Caman('#img2', function() {
        this.brightness(10);
        this.contrast(30);
        this.sepia(60);
        this.saturation(-30);
        this.render();
    });
});
$('#btn2').on('click', function() {
    Caman('#img2', function() {
        this.reset();
        this.render();
    });
});