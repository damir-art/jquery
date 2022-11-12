# DOM
Работаем с DOM в jQuery.

- создание элемента
- манипуляции над DOM-элементов
- размеры элементов
- координаты
- скрол

## Создание элемента

    const $div = $('<div id="div" class="div"></div>')

Более производительный способ:

    const $div = $('<div>', {'id':'div', 'class':'div'})

Аналог:

    const $div = $('<div>').attr({'id':'div', 'class':'div'})

Чистый JavaScript:

    const div = document.createElement('div')

    div.id = 'div'
    div.className = 'somediv'
