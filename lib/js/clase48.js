var c = 1;
(function($) {
    var c = 1;
    $.fn.count = function() {
        console.log(c++);
        return this;
    };

    $('button').on('click', function() {
        $('body').count();
    });
})(jQuery);