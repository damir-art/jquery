# scroll
- scrollTop()       - значение по вертикали
- scrollTop(value)  - устанавливает значение по вертикали
- scrollLeft()      - расстояние по горизонтали
- scrollLeft(value) - устанавливает значение по горизонтали

Перейти в начало страницы:

    $('body').scrollTop(0)

Анимируем переход:

    $('body').animate({ scrollTop: '-=200px' })

Скролим страницу и в консоли выводим расстояние скрола от верха:

    $(window).on('scroll', function() {
        console.log( $(window).scrollTop() )
    });
