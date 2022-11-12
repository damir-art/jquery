# Параметы вызова `options`
Параметы вызова плагина, настройки.

Добавляем возможность использования настроек при работе с плагином.

    (function($) {
        $.fn.pColor = function(params) {
            // по-умолчанию, цвет будет зелёным
            let defaults = { color: 'green' }

            // создаём объект настроек
            let options = $.extend({}, defaults, params)
            
            // console.log(options)
            
            $(this).on('click', function() {
                $(this).css('color', options.color)
            })
            return this
        }
    })(jQuery)

У каждого вызова **pColor()** будет свой `options`:

    $('p').pColor({ color: 'brown' })
    $('li').pColor({ color: 'orange' })
