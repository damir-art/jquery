# Core
Использование ядра jQuery.

- $ vs $()
- $( document ).ready()
- Avoiding Conflicts with Other Libraries
- Attributes
- Selecting Elements
- Working with Selections
- Manipulating Elements
- The jQuery Object
- Traversing
- CSS, Styling, & Dimensions
- Data Methods
- Utility Methods
- Iterating over jQuery and non-jQuery Objects
- Using jQuery's .index() Function
- Frequently Asked Questions (FAQ)

## $ vs $()
До сих пор мы имели дело исключительно с методами, вызываемыми для объекта jQuery. Например:

    $( "h1" ).remove();

Большинство методов jQuery вызываются для объектов jQuery, как показано выше; эти методы считаются частью пространства имен `$.fn` или "прототипа jQuery", и их лучше всего рассматривать как методы объектов jQuery.

Однако есть несколько методов, которые не воздействуют на выборку; эти методы считаются частью пространства имен jQuery, и их лучше всего рассматривать как основные методы jQuery.

Это различие может сбить с толку новых пользователей jQuery. Вот что вам нужно помнить:
- Методы, вызываемые для выбора jQuery, находятся в пространстве имен `$.fn` и автоматически получают и возвращают выбор как `this`.
- Методы в пространстве имен `$` обычно являются служебными и не работают с выборками; им автоматически не передаются никакие аргументы, и их возвращаемое значение будет различаться.

Есть несколько случаев, когда методы объекта и базовые методы имеют одинаковые имена, например, `$.each()` и `.each()`. В этих случаях будьте предельно внимательны при чтении документации о том, что вы изучаете правильный метод.

В этом руководстве, если метод может быть вызван для выборки jQuery, мы будем ссылаться на него только по имени: `.each()`. Если это служебный метод, то есть метод, который не вызывается при выборке, мы будем ссылаться на него явно как на метод в пространстве имен jQuery: `$.each()`.

## $( document ).ready()
Страницей нельзя безопасно манипулировать, пока документ не будет "готов" (ready). jQuery определяет это состояние готовности за вас. Код, включенный в `$(document).ready()`, будет выполняться только после того, как объектная модель документа (DOM) страницы будет готова для выполнения кода JavaScript. Код, включенный в `$(window).on("load", function() { ... })`, будет запущен, как только будет готова вся страница (загрыжены изображения, фреймы и т.д.), а не только DOM.

    // A $( document ).ready() block.
    $( document ).ready(function() {
      console.log( "ready!" );
    });

Опытные разработчики иногда используют сокращение `$()` вместо `$(document).ready()`. Если вы пишете код, который могут увидеть люди, не имеющие опыта работы с jQuery, лучше использовать длинную форму.

    // Shorthand for $( document ).ready()
    $(function() {
      console.log( "ready!" );
    });

Вы также можете передать именованную функцию в `$(document).ready()` вместо передачи анонимной.

    // Passing a named function instead of an anonymous function.
    function readyFn( jQuery ) {
      // Code to run when the document is ready.
    }
    
    $( document ).ready( readyFn );
    // or
    $( window ).on( "load", readyFn );

Пример ниже показывает работу `$(document).ready()` и `$(window).on("load")`. Код пытается загрузить URL-адрес веб-сайта в `<iframe>` и проверяет оба события:

    <html>
    <head>
      <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
      <script>
        $( document ).ready(function() {
          console.log( "document loaded" );
        });
    
        $( window ).on( "load", function() {
          console.log( "window loaded" );
        });
      </script>
    </head>
    <body>
        <iframe src="http://techcrunch.com"></iframe>
    </body>
    </html>
