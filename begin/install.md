# Установка и подключение jQuery
Как подключить jQuery к сайту?

Здравствуйте, в этом уроке мы узнаем:
- Как подключить jQuery к сайту?
- Какие способы подключения существуют?
- В чем разница между файлами `compressed`, `uncompressed` и `slim`?

Для начала создадим папку `jquery/`, где будем хранить все файлы нашего проекта. В этой папке создадим файл `index.html` и откроем его с помощью текстового редактора. Я буду работать с текстовым редактором Visual Studio Code.

В текстовом редакторе создаём небольшую верстку, проще всего это сделать нажав `!` и `Tab`.

## Подключаем файл jQuery
Далее нам нужно загрузить файл библиотеки и подключить его к HTML-странице:
- переходим на главную страницу сайта https://jquery.com:
- жмём по кнопке `Download jQuery` https://jquery.com/download/
- жмём по ссылке `Download the uncompressed, development jQuery 3...`
- открывшийся в браузере JavaScript файл сохраняем в папку с наши проектом `jquery/jquery-3.6.3.js` (в будущем цифры у файла могут быть другими, например `3.7`, `3.8` и т.д.)
- подключаем файл jQuery, перед закрывающим тегом `</body>`: `<script src="js/jquery-3.6.1.min.js"></script>`
- подключаем свой файл js, после jQuery: `<script src="js/common.js"></script>`
- далее проверяем подключилась ли библиотека jQuery: `console.log($);` (см. ниже)

Код:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
      <script>
        console.log($); // проверяем подключен ли jQuery
      </script>
    </body>
    </html>

## Подключаем CDN jQuery
Вместо файла, можно подключить jQuery через CDN.

Для этого:
- переходим на страницу загрузки jQuery https://jquery.com/download/
- скролим страницу чуть ли не до конца и жмем по ссылке `Google CDN`
- копируем `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>`
- и вставляем перед закрывающим тегом `</body>`

Код:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    </body>
    </html>

## В чем разница между файлами compressed, uncompressed, slim?
Всего существует несколько файлов jQuery которые можно подключить к сайту, это compressed, uncompressed, slim.

**compressed** - это сжатая минифицированная версия файла, https://code.jquery.com/jquery-3.6.3.min.js в ней отсутствуют пробелы, переводы строк, имена переменных в виде одной буквы и т.д. Обычно её подключают уже к готовому сайту.

**uncompressed** - это обычный не минифицированный файл, его используют при разработке сайта.

**slim** - файлы слим также существют в двух версиях compressed и uncompressed, но самое главное в них отсутствуют методы работающие с AJAX: https://api.jquery.com/category/ajax/ и анимациями: https://api.jquery.com/category/effects/.

Зачем это сделано? Затем что некоторые предпочитают работать с AJAX с помощью других бибилиотек, например Axios, а в качестве анимаций например используют свои собственные стили CSS.

Файлы с исходниками вы можете скачать на степике, ссылка в описании.
