# AJAX
- load()
- ajax()
- JSON
- события AJAX
- продвинутый AJAX

## Разное
Обычно получать данные в XML - избыточно, поэтому лучше использовать JSON.

## Пример
Загружаем AJAX контент, кликая по ссылкам:

    $(function() {
        // вешаем обработчик на все ссылки в нашем меню navigation
        $("ul.navigation a").click(function(){
            var url = $(this).attr("href");   // возьмем ссылку
            url += "?ajax=true";              // добавим к ней параметр ajax=true
            $("#content").load(url);          // загружаем обновлённое содержимое
            return false; // возвращаем false, дабы не сработал переход по ссылке
        });
    });

Если сервер не понимает `url += "?ajax=true"`, то пишем:

    $(function() {
        // вешаем обработчик на все ссылки в нашем меню navigation
        $("ul.navigation a").click(function(){
            var url = $(this).attr("href"); // возьмем ссылку
            // загружаем страницу целиком, но в наш контейнер вставляем лишь содержимое #content загружаемой страницы
            $("#content").load(url + " #content > *");
            return false; // возвращаем false
        });
    });
