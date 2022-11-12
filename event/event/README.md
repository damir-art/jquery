# События
Работаем с событиями в jQuery.

Создаём обработчик события:

    $('button').on('click', function() {
        console.log(this)    // элемент на котором произошло событие
        console.log($(this)) // DOM-элемент на котором произошло событие
    })

Меняем изображение по клику:

    const button = $('button')
    const img = $('img')

    button.on('click', function(){
        img.attr({
            "src": "img/audi.jpg",
            "alt": "Audi"
        })
    })

Инициализируем событие из скрипта:

    button.trigger('click')

Отключаем событие:

    button.off('click')

Обращаемся к элементу внутри обработчика:

    $(this).css('color', 'green');

## Сокращенная запись события

    $('button').on('click', function() {

    })

Можно заменить на:

    $('button').click(function() {
        
    })

## Разное
- `trigger(event)` - событие инициализируется из скрипта
- `off(event)` - отключение обработчика события
