$('a.fetchSize').each(function() {
    var link = this;

    $.ajax({
        type: 'HEAD',
        url: link.href,
        complete: function(xhr) {
            var size = xhr.getResponseHeader('Content-Length');

            // append a los links
            $(link).append('(' + humanizar(size) + ')');
        }
    });
});

function humanizar(size) {
    var unidades = [
        'bytes',
        'KB',
        'MB',
        'GB',
        'TB'
    ];
    var ord = Math.floor(Math.log(size) / Math.log(1024));
    ord = Math.min(Math.max(0, ord), unidades.length - 1);

    var s = Math.round((size / Math.pow(1024, ord)) * 100) / 100;
    return s + ' ' + unidades[ord];
}