# Avoiding Conflicts with Other Libraries
Предотвращение конфликтов с другими библиотеками.

Библиотека jQuery и практически все ее плагины содержатся в пространстве имен `jQuery`. Как правило, глобальные объекты также хранятся внутри пространства имен jQuery, поэтому у вас не должно быть конфликтов между jQuery и любой другой библиотекой (например, `Prototype.js`, `MooTools` или `YUI`).

Тем не менее, есть одно предостережение: *по умолчанию jQuery использует `$` как ярлык для jQuery*. Таким образом, если вы используете другую библиотеку JavaScript, использующую переменную `$`, вы можете столкнуться с конфликтами с jQuery. Чтобы избежать этих конфликтов, вам нужно перевести jQuery в режим отсутствия конфликтов сразу после его загрузки на страницу и до того, как вы попытаетесь использовать jQuery на своей странице.

## Переводим jQuery в бесконфликтный режим
Когда вы переводите jQuery в режим отсутствия конфликтов, у вас есть возможность назначить новое имя переменной вместо псевдонима `$`.

    <!-- Putting jQuery into no-conflict mode. -->
    <script src="prototype.js"></script>
    <script src="jquery.js"></script>
    <script>
      var $j = jQuery.noConflict();
      // $j is now an alias to the jQuery function; creating the new alias is optional.
      
      $j(document).ready(function() {
          $j( "div" ).hide();
      });
      
      // The $ variable now has the prototype meaning, which is a shortcut for
      // document.getElementById(). mainDiv below is a DOM element, not a jQuery object.
      window.onload = function() {
          var mainDiv = $( "main" );
      }
    </script>

В приведенном выше коде символ `$` вернется к своему значению в исходной библиотеке. Вы по-прежнему сможете использовать полное имя функции `jQuery`, а также новый псевдоним `$j` в остальной части вашего приложения. Новый псевдоним может называться как угодно: `jq`, `$J`, `awesomeQuery` и т.д.

Наконец, если вы не хотите определять другую альтернативу полному имени функции `jQuery` (вам действительно нравится использовать `$` и вам не нужно использовать метод `$` другой библиотеки), то есть еще один подход, который вы можете попробовать: просто добавьте `$` в качестве аргумента вашей функции `jQuery(document).ready()`. Это чаще всего используется в том случае, когда вы все еще хотите использовать преимущества действительно лаконичного кода jQuery, но не хотите вызывать конфликты с другими библиотеками.

    <!-- Another way to put jQuery into no-conflict mode. -->
    <script src="prototype.js"></script>
    <script src="jquery.js"></script>
    <script>
      jQuery.noConflict(); // переменная jQuery не конфликтует с другими переменными, если она где-то определена
      jQuery( document ).ready(function( $ ) {
        // You can use the locally-scoped $ in here as an alias to jQuery.
        $( "div" ).hide();
      });

      // The $ variable in the global scope has the prototype.js meaning.
      window.onload = function(){
        var mainDiv = $( "main" );
      }
    </script>

Вероятно, это идеальное решение для большей части вашего кода, учитывая, что для достижения полной совместимости вам придется изменить меньше кода.

## Включение jQuery перед другими библиотеками
Приведенные выше фрагменты кода основаны на загрузке jQuery после загрузки `prototype.js`. Если вы включаете jQuery перед другими библиотеками, вы можете использовать `jQuery` при работе с jQuery, но `$` будет иметь значение, определенное в другой библиотеке. Нет необходимости отказываться от псевдонима `$`, вызывая `jQuery.noConflict()`.

## Краткое изложение способов ссылки на функцию jQuery
Вот краткий обзор того, как вы можете ссылаться на функцию jQuery, когда наличие другой библиотеки создает конфликт по поводу использования переменной `$`.

### Создать новый псевдоним
Метод jQuery.noConflict() возвращает ссылку на функцию jQuery, так что вы можете зафиксировать ее в любой переменной.

    <script src="prototype.js"></script>
    <script src="jquery.js"></script>
    <script>
      // Give $ back to prototype.js; create new alias to jQuery.
      var $jq = jQuery.noConflict();
    </script>

### Используйте немедленно вызываемое функциональное выражение IIFE
Вы можете продолжать использовать стандартный `$`, заключив свой код в немедленно вызываемое функциональное выражение; это также стандартный шаблон для разработки плагинов jQuery, когда автор не может знать, перехватит ли другая библиотека `$`. См. раздел "Плагины" для получения дополнительной информации о написании плагинов.

    <!-- Using the $ inside an immediately-invoked function expression. -->
    <script src="prototype.js"></script>
    <script src="jquery.js"></script>
    <script>
      jQuery.noConflict();
      (function( $ ) {
        // Your jQuery code here, using the $
      })( jQuery );
    </script>

Обратите внимание, что если вы используете этот метод, вы не сможете использовать методы prototype.js внутри немедленно вызванной функции. `$` будет ссылкой на jQuery, а не на prototype.js.

### Используйте аргумент $, переданный в функцию jQuery(document).ready()

    <script src="jquery.js"></script>
    <script src="prototype.js"></script>
    <script>
      jQuery(document).ready(function( $ ) {
        // Your jQuery code here, using $ to refer to jQuery.
      });
    </script>

Или используя более краткий синтаксис для функции готовности DOM `ready()`:

    <script src="jquery.js"></script>
    <script src="prototype.js"></script>
    <script>
      jQuery(function($){
        // Your jQuery code here, using the $
      });
    </script>
