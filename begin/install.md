# Установка и инициализация jQuery
- переходим на страницу: https://jquery.com/download/
- качаем jQuery по ссылке: *Download the compressed, production jQuery 3...*
- https://code.jquery.com/jquery-3.6.1.min.js
- подключаем jQuery, перед закрывающим тегом body: `<script src="js/jquery-3.6.1.min.js"></script>`
- подключаем свой файл js, после jQuery: `<script src="js/common.js"></script>`

Если используете CDN, то используйте Google.

## Инициализация
`$` - это переменная  
Дополнительно читай: core/readme - ready  
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
