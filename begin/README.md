# Начало
Оглавление:
- Что такое jQuery. Актуален ли он в 2023м году.
- Подключение jQuery.
- Инициализация jQuery.
- Первый скрипт на jQuery (клик по кнопке, сокрытие заголовка).

## Как работает jQuery
Подготовка файлов к работае с jQuery.

Это базовое руководство, предназначенное для того, чтобы помочь вам начать работу с jQuery. Если у вас еще нет тестовой страницы, начните с создания следующей HTML-страницы:

    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Demo</title>
    </head>
    <body>
        <a href="http://jquery.com/">jQuery</a>

        <script src="jquery.js"></script>
        <script>
          // Your code goes here.
        </script>
    </body>
    </html>

Атрибут src в элементе `script` должен указывать на копию jQuery. Загрузите копию jQuery со страницы https://jquery.com/download/ и сохраните файл `jquery.js` в том же каталоге, что и ваш HTML-файл.

**Примечание**: при загрузке файла jQuery имя файла может содержать номер версии, например, `jquery-x.y.z.js`. Обязательно либо переименуйте этот файл в `jquery.js`, либо обновите значение атрибута `src`.

## Краткий обзор jQuery
Краткий обзор синтаксиса jQuery.

### Обход и манипулирование DOM:
Получаем элемент `button` меняем его текст на `Привет`.

    <button>Отправить</button>

    $( 'button' ).text( 'Привет' )

### Обработка событий
Скрыть элемент `p`, при нажатии на элемент `button`:

    <button>Скрыть абзац</button>
    <p>
      jQuery - это библиотека JavaScript.
    </p>

    $( 'button' ).on( 'click', function() {
      $( 'p' ).hide()
    })

### AJAX
Вызовите локальный скрипт на сервере `/api/getWeather` с параметром запроса `zipcode=97201` и замените html-код элемента `p` возвращенным текстом.

    <p>
      Погода.
    </p>

    $.ajax({
      url: "/api/getWeather",
      data: {
        zipcode: 97201
      },
      success: function( result ) {
        $( "p" ).html( result );
      }
    });
