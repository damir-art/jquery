# Как подключить jQuery к сайту?
https://damir-art.ru/jquery/kak-podklyuchit-jquery-k-sajtu/

Подключение / установка библиотеки jQuery к сайту.

`Изображение` баннера.
`Изображение` о чем урок.

Здравствуйте, в этом уроке вы узнаете:
- Как подключить библиотеку jQuery к своему сайту?
- Как проверить, подлючилась ли библиотека jQuery?
- Что такое CDN и как подключить библиотеку jQuery через CDN? (доп урок)
- Какие существуют способы подключения jQuery? (доп урок, например подключение через `npm`)
- В чем разница между файлами `compressed`, `uncompressed` и `slim`?

`Изображение` открытия файла index.html через редактор

Для начала создадим папку `jquery/`, где будем хранить все файлы нашего проекта. В этой папке создадим файл `index.html` и откроем его с помощью текстового редактора. Я буду работать с текстовым редактором **Visual Studio Code** *(вы можете использовать какой хотите)*.

`Изображение` начального кода

В текстовом редакторе создаём небольшую верстку, проще всего это сделать введя в редакторе восклицательный знак `!` и нажав клавишу `Tab`. Должен появиться следующий код:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>

    </body>
    </html>

## Подключаем файл jQuery
`Изображение` главной страницы сайта с кнопкой

Для того, чтобы подключить файл библиотеки jQuery к нашей HTML-странице, его нужно сначала скачать с официального сайта:

- Переходим на главную страницу сайта https://jquery.com,
- Жмём по кнопке `Download jQuery`,
- Откроется страница загрузки файлов библиотеки https://jquery.com/download/,

`Изображение` ссылки

- Жмём по ссылке `Download the uncompressed, development jQuery 3...`,

`Изображение` скачивания библиотеки

- Откроется страница текущей версии файла jQuery: https://code.jquery.com/jquery-3.6.3.js, жмём правой кнопкой мыши и сохраняем файл в папку с нашим файлом `jquery/index.html` (в будущем цифры у файла jquery могут быть другими, например `jquery-3.6.4` или `jquery-3.7.2` и т.д.),

`Изображение` HTML-кода с подключенной библиотекой и console.log($);

- Подключаем файл jQuery, перед закрывающим тегом `</body>`: `<script src="jquery-3.6.3.js"></script>`,
- Подключаем свой файл JavaScript, после jQuery: `<script src="js/common.js"></script>`,
- Вставляем код проверки подключения библиотека jQuery: `<script> console.log($); </script>` (см. ниже).

В итоге, у вас должен получится следующий код:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>

      <!-- Подключаем библиотеку jQuery -->
      <script src="jquery-3.6.3.js"></script>

      <!-- Проверяем подключен ли jQuery -->
      <script>
        console.log($);
      </script>
    </body>
    </html>

## Проверка подключения библиотеки
`Изображение` проверки подключения библиотеки

Проверяем подключилась ли библиотека jQuery *(проверка происходит в браузере Firefox, в других браузерах может немного отличаться)*:

- Открываем файл `index.html` в браузере, 
- Открываем инспектор браузера,
- Переходим во вкладку **Консоль**,
- Если мы подключили jQuery библиотеку правильно, то в консоли должен появиться вывод библиотеки jQuery, в браузере Firefox это `function jQuery()`.

## Подключаем jQuery через CDN
`Изображение` ссылки на CDN Google

Вместо подключения файла, библиотеку jQuery можно подключить к сайту через CDN.

Для этого:
- Переходим на страницу загрузки jQuery: https://jquery.com/download/,
- Скролим страницу чуть ли не до конца и жмем по ссылке **Google CDN**,

`Изображение` кода ссылки на CDN Google

- Копируем строку `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>`,
- И вставляем её перед закрывающим тегом `</body>`.

`Изображение` кода с CDN

В итоге, у вас должен получится следующий код:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>

      <!-- Подключаем библиотеку jQuery через CDN -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

      <!-- Проверяем подключен ли jQuery -->
      <script>
        console.log($);
      </script>
    </body>
    </html>

## В чем разница между файлами compressed, uncompressed и slim?
`Изображение` ссылок на разные файлы jQuery

На странице загрузки библиотеки jQuery `https://jquery.com/download/` есть несколько ссылок по которым можно загрузить библиотеку, это `compressed`, `uncompressed`, `slim`. В чем между ними разница?

**compressed** - это сжатая минифицированная версия файла: `https://code.jquery.com/jquery-3.6.3.min.js` в ней отсутствуют пробелы, переводы строк, имена переменных в виде одной буквы и т.д. Обычно её подключают к уже готовому сайту, чтобы уменьшить размер страницы.

**uncompressed** - это обычный не минифицированный файл, его используют при разработке сайта.

**slim** - это файл в котором отсутствуют методы работающие с AJAX: `https://api.jquery.com/category/ajax/` и анимациями (эффектами): `https://api.jquery.com/category/effects/`. Это сделано потому, что некоторые предпочитают работать с AJAX с помощью нативных методов JavaScript, например `fetch()` или других библиотек, например **Axios**, а в качестве анимаций используют свои собственные CSS-стили.

Файлы **slim** тоже существуют в двух версиях `compressed` и `uncompressed`, и они из-за отсутствия методов AJAX и анимаций, весят меньше чем стандартные.

Прочитать урок в текстовом формате, а также скачать код и файлы проекта можно на степике. Ссылка в описании.
