# Объект события `eventObject`
Объект события `evt` в jQuery.

    $('button').on('click', function(evt) {
        console.log(evt)
    })

Можно использовать для:
- считывания координат нажатия мыши:
    - `evt.screenX`, `evt.screenY`
    - `evt.pageX`, `evt.pageY`
- нажата ли клавиша:
    - `evt.altKey`
    - `evt.ctrlKey`
    - `evt.shiftKey`
- отслеживаем объект события:
    - `evt.target`
- отмены действия тега по-умолчанию
- отмены всплытия/погружения
