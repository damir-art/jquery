# stopPropagation()
Отменяем всплытие события.

Добустим у нас есть ссылка, ссылка обернута дивом, на див и ссылке висят обработчики события.

    <div class="wrap-link">
        <a class="link" href="https://ya.ru">Yandex</a>
    </div>

Если кликнуть по ссылке, то обработчик события висящий на диве, тоже сработает. Чтобы этого не происходило используйте в ссылке метод `stopPropagation()`:

    $('.wrap-link').on('click', function(evt){
        alert('hello wrap')
    })

    $('a').on('click', function(evt){
        evt.stopPropagation()
        alert('hello link')

    })

## stopImmediatePropagation()
stopImmediatePropagation() оставляет только один обработчик на элементе, остальные отключает (если они расположены ниже в коде).

## Разное
Без `stopPropagation()` событие сработает при всплытии, сначала на ссылке (дочернем элементе), потом на диве (родительском элементе).
