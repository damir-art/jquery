# each()
Ручной цикл. `each()` - переводится как каждый. Позволяет для каждого элемента выборки применить функцию.

    $(selector).each(function(){
        // код
    })

Пример:

    $('img').each(function(){
        if($(this).attr('src') == 'icon3') {
            $(this).hide()
        }
    })

`$(this)` - текущий элемент в выборке.
