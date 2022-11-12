# JSON
jQuery.getJSON() - загружает JSON, параметры: ссылка на файл, колбэк (если нужен).

Пример JSON-файла:

    {
        "country": {
            "name": "russia",
            "capital": "moscow"
        }
    }

Пример AJAX-запроса:

    $.ajax({
        url: "json.json"
        dataType: "json",
        success: function (data) {
            // обрабатываем данные
        }
    });

## JSONP
JSON с колбэк-функцией.

## Доступ к API flickr
Пример работы с API:

    $.getJSON(
        "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags:    "orange",
            tagmode: "any",
            format:  "json"
        },
        function(data) {
            $.each(data.items, function(i, item){
                $("<img/>")
                    .attr("src", item.media.m)
                    .appendTo("article");
            });
        }
    );

## Разное
Метод jQuery.parseJSON() устарел, переходите на JSON.parse().
