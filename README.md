# jQuery
Руководство по jQuery.  
jQuery - библиотека упрощающая работу с DOM-элементами HTML-страницы, событиями, анимацией, AJAX.  
Девиз jQuery - `пиши меньше, делай больше`.

## Оглавление
- `Установка и инициализация` - эта страница
- `select` - выборка элементов

## Установка
- переходим на страницу: https://jquery.com/download/
- качаем jQuery по ссылке: *Download the compressed, production jQuery 3...*
- https://code.jquery.com/jquery-3.6.1.min.js
- подключаем jQuery, перед закрывающим тегом body: `<script src="js/jquery-3.6.1.min.js"></script>`
- подключаем свой файл js, после jQuery: `<script src="js/common.js"></script>`

## Инициализация
Данный код выполнится после загрузки страницы из-за метода `ready()`, который отслеживает событие `load` у `document`:

    jQuery(document).ready(function() {
        jQuery("h1").css("color", "green");
    });

или режим noConflict:

    jQuery(document).ready(function($) {
        $("h1").css("color", "green");
    });

Более короткий способ записи:

    $(function() {
        $('h1').css('color', 'green')
    })

Данных записей `$(function...` может быть сколько угодно в файле. `$` это короткая запись `jQuery`.

Наиболее безопасный способ записи jQuery, исключающий конфликты с другими библиотеками, если они используют `$`:

    ;(function($, undefined){
        $(function(){
            $("h1").css("color", "green");
        });
    })(jQuery);

Здесь `undefined` не переопределен, т.е. `undefined === undefined`.

## $(selector)
`$(selector)` данная конструкция возвращает не DOM-элемент(ы), а объект jQuery, поэтому он может работать с API jQuery (можно посмотреть в консоли кликнув по prototype).

## JavaScript
- методы применяются сразу ко всем элементам выборки
- переменные относящиеся к jQuery лучше начинать с `$`
- length массива хранит не количесвто элементов, а индекс последнего элемента + 1
- объекты в js могут иметь одну их двух ролей: хранилище данных, функционал объекта
- функция конструктор `new`, возвращает объект
