# jQuery
Руководство по jQuery.

jQuery - библиотека упрощающая работу с DOM-элементами HTML-страницы, событиями, анимацией, AJAX.  
Девиз jQuery - `пиши меньше, делай больше`.

https://jquery.com/ - официальный сайт  
https://learn.jquery.com/ - учебник  
https://jquery.com/upgrade-guide/ - обновления учебника  
https://api.jquery.com/ - API методов  
https://jqueryui.com/ - UI  
https://plugins.jquery.com/ - плагины

## Оглавление
- Начало (begin):
  - Что такое jQuery
  - О jQuery
  - История jQuery
  - Краткий обзор jQuery
  - Style guide jQuery
  - Style guide JavaScript
- Ядро (core)
  - 
- `Установка и инициализация` - эта страница
- `select` - выборка элементов

## Установка
- переходим на страницу: https://jquery.com/download/
- качаем jQuery по ссылке: *Download the compressed, production jQuery 3...*
- https://code.jquery.com/jquery-3.6.1.min.js
- подключаем jQuery, перед закрывающим тегом body: `<script src="js/jquery-3.6.1.min.js"></script>`
- подключаем свой файл js, после jQuery: `<script src="js/common.js"></script>`

Если используете CDN, то используйте Google.

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

Разница между JavaScript и jQuery:

    window.onload = (e) => {
      let getH1 = document.getElementsByTagName('h1')
      console.log(getH1) // HTMLCollection -> <prototype>: HTMLCollectionPrototype
    }

    jQuery(document).ready( function ($) {
      let getH1 = $('h1')
      console.log(getH1) // Object -> <prototype>: Object { jquery: 
    });

## $(selector)
`$(selector)` данная конструкция возвращает не DOM-элемент(ы), а объект jQuery, поэтому он может работать с API jQuery (можно посмотреть в консоли кликнув по prototype).

## JavaScript
- методы применяются сразу ко всем элементам выборки
- переменные относящиеся к jQuery лучше начинать с `$`
- length массива хранит не количесвто элементов, а индекс последнего элемента + 1
- объекты в js могут иметь одну их двух ролей: хранилище данных, функционал объекта
- функция конструктор `new`, возвращает объект

## Зачем нужен jQuery
- поддержка проектов на CMS
- быстрое создание компонентов
- множество решений для создания компонентов
- быстрая разработка и поддержка
- стабильная работа
- множество готовых решений для текущих задач
- 