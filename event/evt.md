# Объект события `eventObject`
Объект события `evt` в jQuery.

    $('button').on('click', function(evt) {
        console.log(evt)
    })

Можно использовать для:
- считывания координат нажатия мыши:
    - `evt.screenX`, `evt.screenY` - от краёв монитора
    - `evt.pageX`, `evt.pageY` - от краёв браузера
- нажата ли клавиша:
    - `evt.altKey`
    - `evt.ctrlKey`
    - `evt.shiftKey`
- отслеживаем объект события, узнаём по какому объекту мы кликнули:
    - `evt.target`
- отмены действия тега по-умолчанию
- отмены всплытия/погружения

Пример:

    console.log(evt.altKey) // нажми Alt и левую кнопку мыши (если событие click)
