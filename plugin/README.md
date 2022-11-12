# Плагин (plugin)
Создание плагина в jQuery.

Плагины нужны для создания повторно используемого кода, с удобным интерфейсом.

## Код на JavaScript
Кликаем по параграфу, текст окрашивается:

    var loader = function () {
        // находим все параграфы
        var para = document.getElementsByTagName('P');
        // перебираем всё и вешаем обработчик
        for (var i=0,size=para.length;i<size;i++) {
            // обработчик
            para[i].onclick = function() {
                this.style.color = "#FF0000";
            }
        }
    }

    // код должен работать после загрузки всей страницы
    document.addEventListener("DOMContentLoaded", loader, false);

## Код на jQuery
Пишем тоже самое, но на jQuery.

    $(function(){
        $('p').click(function(){
            $(this).css('color', '#ff0000');
        })
    });

## jQuery плагин `$.fn`
Чтобы превратить jQuery код в jQuery плагин, нужно расширить объект `$.fn`:

    $.fn.mySimplePlugin = function() {
        $(this).click(function(){
            $(this).css('color', '#ff0000');
        })
    }

где `mySimplePlugin` имя нашего плагина.

## Разное
- https://www.smashingmagazine.com/2011/10/essential-jquery-plugin-patterns/
