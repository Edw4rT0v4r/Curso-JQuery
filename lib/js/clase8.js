$("#links a").each(function() {
    // this.hostname selecciona los links que contengan http
    if (this.hostname != location.hostname) {
        $(this).append(' <i class="fas fa-external-link-alt"></i>').attr('target', '_blank')
    }
})