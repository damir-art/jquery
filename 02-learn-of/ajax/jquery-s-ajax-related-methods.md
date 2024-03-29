# jQuery's Ajax-Related Methods
Методы jQuery, связанные с Ajax.

Хотя jQuery предлагает множество удобных методов, связанных с Ajax, основной метод `$.ajax()` лежит в основе всех из них, и его понимание необходимо. Сначала мы рассмотрим его, а затем кратко коснемся удобных методов.

Часто считается хорошей практикой использовать метод `$.ajax()` вместо удобных методов, предоставляемых jQuery. Как вы увидите, он предлагает функции, которых нет в удобных методах, а его синтаксис упрощает чтение.

## $.ajax()
Основной метод jQuery `$.ajax()` - это мощный и простой способ создания запросов Ajax. Требуется объект конфигурации, который содержит все инструкции, необходимые jQuery для выполнения запроса. Метод `$.ajax()` особенно ценен, поскольку он предлагает возможность указать как успешные, так и неудачные обратные вызовы. Кроме того, его способность принимать объект конфигурации, который можно определить отдельно, упрощает написание повторно используемого кода. Для получения полной документации по параметрам конфигурации посетите http://api.jquery.com/jQuery.ajax/.

Пример:

    // Использование основного метода $.ajax()
    $.ajax({
      // URL для запроса
      url: "post.php",
      // Данные для отправки (будут преобразованы в строку запроса)
      data: {
        id: 123
      },
      // Является ли это запросом POST или GET
      type: "GET",
      // Тип данных, которые мы ожидаем получить
      dataType : "json",
    })
    // Код для запуска, если запрос выполнен успешно (выполнено)
    // Ответ передается в функцию
    .done(function( json ) {
      $( "<h1>" ).text( json.title ).appendTo( "body" );
      $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
    })
    // Код для запуска в случае сбоя запроса, необработанный запрос и
    // коды состояния передаются в функцию
    .fail(function( xhr, status, errorThrown ) {
      alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    })
    // Код для запуска независимо от успеха или неудачи;
    .always(function( xhr, status ) {
      alert( "Запрос выполнен!" );
    });

**Примечание.** Что касается параметра `dataType`, если сервер отправляет обратно данные в формате, отличном от указанного вами, ваш код может дать сбой, и причина не всегда будет ясна, поскольку код ответа `HTTP` не будет показывать ошибку. При работе с запросами **AJAX** убедитесь, что ваш сервер отправляет обратно тот тип данных, который вы запрашиваете, и убедитесь, что заголовок `Content-type` соответствует типу данных. Например, для данных **JSON** заголовок `Content-type` должен быть `application/json`.

## $.ajax() Options
У метода $.ajax() есть много опций, что является частью его возможностей. Полный список параметров см. на странице http://api.jquery.com/jQuery.ajax/, вот несколько, которые вы будете часто использовать:

- **async** - установите значение `false`, если запрос должен быть отправлен синхронно. По умолчанию истинно. Обратите внимание, что если вы установите для этого параметра значение `false`, ваш запрос заблокирует выполнение другого кода до тех пор, пока не будет получен ответ.
- **cache** - использовать ли кэшированный ответ, если он доступен. По умолчанию `true` для всех `dataType`, кроме `script` и `jsonp`. Если установлено значение false, к URL будет добавлен параметр очистки кеша.
- **done** - функция обратного вызова для запуска в случае успешного выполнения запроса. Функция получает данные ответа (преобразованные в объект JavaScript, если `dataType` был JSON), а также текстовый статус запроса и необработанный объект запроса.
- **fail** - функция обратного вызова для запуска, если запрос приводит к ошибке. Функция получает необработанный объект запроса и текстовый статус запроса.
- **always** - функция обратного вызова для запуска после завершения запроса, независимо от успеха или неудачи. Функция получает необработанный объект запроса и текстовый статус запроса.
- **context** - область, в которой должна выполняться функция (функции) обратного вызова (т.е. что `this` будет означать внутри функции (функций) обратного вызова). По умолчанию `this` внутри функции (функций) обратного вызова относится к объекту, первоначально переданному в `$.ajax()`.
- **data** - данные для отправки на сервер. Это может быть либо объект, либо строка запроса, например: `foo=bar&amp;baz=bim`.
- **dataType** - тип данных, которые вы ожидаете получить от сервера. По умолчанию jQuery просматривает MIME-тип ответа, если не указан тип данных.
- **jsonp** - имя обратного вызова для отправки в строке запроса при выполнении запроса JSONP. По умолчанию "обратный вызов".
- **timeout** - время ожидания в миллисекундах, прежде чем запрос будет считаться неудачным.
- **traditional** - установите значение `true`, чтобы использовать стиль сериализации параметров, использовавшийся до jQuery 1.4. Подробнее см. http://api.jquery.com/jQuery.param/
- **type** - тип запроса "POST" или "GET". По умолчанию "GET". Можно использовать и другие типы запросов, такие как "PUT" и "DELETE", но они могут поддерживаться не всеми браузерами.
- **URL** - URL-адрес запроса.

Параметр `url` является единственным обязательным свойством объекта конфигурации `$.ajax()`, все остальные свойства необязательны. Его также можно передать в качестве первого аргумента функции `$.ajax()`, а объект параметров - в качестве второго аргумента.

## Convenience Methods
Если вам не нужны обширные возможности настройки `$.ajax()`, и вы не заботитесь об обработке ошибок, вспомогательные функции Ajax, предоставляемые jQuery, могут быть полезными, краткими способами выполнения запросов Ajax. Эти методы являются просто "обертками" вокруг основного метода `$.ajax()` и предварительно устанавливают некоторые параметры метода `$.ajax()`.

Удобные методы, предоставляемые jQuery:
- `$.get` - выполнить GET-запрос к указанному URL-адресу.
- `$.post` - выполнить POST-запрос к указанному URL-адресу.
- `$.getScript` - добавить скрипт на страницу.
- `$.getJSON` - выполнить запрос GET и ожидать возврата JSON.

В каждом случае методы принимают следующие аргументы по порядку:
- `url` - URL-адрес для запроса. Обязательный.
- `data` - данные для отправки на сервер. Необязательный. Это может быть либо объект, либо строка запроса, например `foo=bar&amp;baz=bim`. Примечание: этот параметр недействителен для `$.getScript`.
- `success callback` - функция обратного вызова для запуска в случае успешного выполнения запроса. Необязательный. Функция получает данные ответа (преобразованные в объект JavaScript, если тип данных был JSON), а также текстовый статус запроса и необработанный объект запроса.
- `data type` - тип данных, которые вы ожидаете получить от сервера. Необязательный. Примечание: этот параметр применим только к методам, в имени которых еще не указан тип данных.

Пример:

    // Использование удобных методов jQuery Ajax

    // Получить обычный текст или HTML
    $.get( "/users.php", {
      userId: 1234
    }, function( resp ) {
      console.log( resp ); // server response
    });

    // Добавьте скрипт на страницу, затем запустите определенную в нем функцию
    $.getScript( "/static/js/myScript.js", function() {
      functionFromMyScript();
    });

    // Получить данные в формате JSON с сервера
    $.getJSON( "/details.php", function( resp ) {
      // Log each key in the response data
      $.each( resp, function( key, value ) {
        console.log( key + " : " + value );
      });
    });

Пример с API:

    // https://api.opendota.com/api/heroes
    $.getJSON( "https://api.opendota.com/api/heroes", function( resp ) {
      // Log each key in the response data
      // console.log( resp );
      $.each( resp, function( key, obj ) {
        console.log( obj );
        // $.each( obj, function( key, value ) {
        //   if ( key === "localized_name" ) {
        //     console.log( obj.localized_name );
        //   }
        // });
      });
    });

## $.fn.load
Метод `.load()` уникален среди Ajax-методов jQuery тем, что вызывается при выборке. Метод `.load()` извлекает HTML-код из URL-адреса и использует возвращенный HTML-код для заполнения выбранных элементов. В дополнение к предоставлению URL-адреса метода вы можете дополнительно указать селектор; jQuery будет извлекать только соответствующий контент из возвращенного HTML.

Пример:

    // Использование .load() для заполнения элемента
    $( "#newContent" ).load( "/foo.html" );

    // Использование .load() для заполнения элемента на основе селектора
    $( "#newContent" ).load( "/foo.html #myDiv h1:first", function( html ) {
      alert( "Content updated!" );
    });
