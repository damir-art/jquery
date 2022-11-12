# Размеры элементов
Вычисляем размеры элементов `height/width`.

## height/width
height() возвращает высоту элемента без отступов и границ:

    $('p').height()
    $(window).height();   // высота окна
    $(document).height(); // высота HTML документа

Устанавливаем высоту элемента:

    $('p').height(100)

Работаем с шириной width() и width(width).

`height/width` всегда возращает высоту/ширину без отступов и рамок.

- `innerHeight()`, `innerWidth()` - возвращают высоту и ширину элемента, включая padding
- `outerHeight()`, `outerWidth()` - возвращают высоту и ширину элемента, включая padding и border
- `outerHeight(true)` и `outerWidth(true)` - возвращают высоту и ширину элемента, включая padding, border и margin
