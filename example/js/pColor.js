(function($) {
    $.fn.pColor = function(params) {
        // по-умолчанию, цвет будет зелёным
        let defaults = { color: 'green' }
        let options = $.extend({}, defaults, params)
        // console.log(optionsLocal)
        $(this).on('click', function() {
            $(this).css('color', options.color)
        })
        return this
    }
})(jQuery)

// У каждого вызова pColor будет свой options
$('p').pColor({ color: 'brown' })
$('li').pColor({ color: 'orange' })
