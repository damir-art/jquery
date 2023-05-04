# Utility Methods
https://api.jquery.com/category/utilities/  
https://api.jquery.com/jQuery.type/  

jQuery предлагает несколько служебных методов в пространстве имен `$`. Эти методы полезны для выполнения рутинных задач программирования. Полный справочник по служебным методам jQuery см. в документации по служебным программам на сайте api.jquery.com.

Ниже приведены примеры некоторых служебных методов:

## $.trim()
Удаляет начальные и конечные пробелы:

    // Returns "lots of extra whitespace"
    $.trim( "    lots of extra whitespace    " );

## $.each()
Перебирает массивы и объекты:

    $.each([ "foo", "bar", "baz" ], function( idx, val ) {
      console.log( "element " + idx + " is " + val );
    });
    
    $.each({ foo: "bar", baz: "bim" }, function( k, v ) {
      console.log( k + " : " + v );
    });

Метод `.each()` может быть вызван после выборки, чтобы перебрать элементы, содержащиеся в выборке. `.each()`, а не `$.each()`, следует использовать для перебора элементов в выборке.

## $.inArray()
Возвращает индекс значения в массиве или `-1`, если значение в массиве отсутствует:

    var myArray = [ 1, 2, 3, 5 ];
    
    if ( $.inArray( 4, myArray ) !== -1 ) {
      console.log( "found it!" );
    }

## $.extend()
Изменяет свойства первого объекта, используя свойства последующих объектов:

    var firstObject = { foo: "bar", a: "b" };
    var secondObject = { foo: "baz" };

    var newObject = $.extend( firstObject, secondObject );

    console.log( firstObject.foo ); // "baz"
    console.log( newObject.foo ); // "baz"

Если вы не хотите изменять какие-либо объекты, которые вы передаете `$.extend()`, передайте пустой объект в качестве первого аргумента:

    var firstObject = { foo: "bar", a: "b" };
    var secondObject = { foo: "baz" };

    var newObject = $.extend( {}, firstObject, secondObject );

    console.log( firstObject.foo ); // "bar"
    console.log( newObject.foo ); // "baz"

## $.proxy()
Устанавливает scope, this для функции.

Возвращает функцию, которая всегда будет выполняться в предоставленной области, то есть устанавливает значение `this` внутри переданной функции во второй аргумент.

    var myFunction = function() {
      console.log( this );
    };

    var myObject = {
      foo: "bar"
    };

    myFunction(); // window
    var myProxyFunction = $.proxy( myFunction, myObject );
    myProxyFunction(); // myObject

Если у вас есть объект с методами, вы можете передать объект и имя метода, чтобы вернуть функцию, которая всегда будет выполняться в области видимости объекта.

    var myObject = {
        myFn: function() {
            console.log( this );
        }
    };

    $( "#foo" ).click( myObject.myFn ); // HTMLElement #foo
    $( "#foo" ).click( $.proxy( myObject, "myFn" ) ); // myObject

## Testing Type
Иногда оператор `typeof` может сбивать с толку или противоречить друг другу, поэтому вместо использования `typeof`, jQuery предлагает служебные методы, помогающие определить тип значения.

Прежде всего, у вас есть методы для проверки того, относится ли конкретное значение к определенному типу.

    $.isArray([]); // true
    $.isFunction(function() {}); // true
    $.isNumeric(3.14); // true

Кроме того, есть функция `$.type()`, которая проверяет внутренний класс, используемый для создания значения. Вы можете рассматривать этот метод как лучшую альтернативу оператору `typeof`.

    $.type( true ); // "boolean"
    $.type( 3 ); // "number"
    $.type( "test" ); // "string"
    $.type( function() {} ); // "function"

    $.type( new Boolean() ); // "boolean"
    $.type( new Number(3) ); // "number"
    $.type( new String('test') ); // "string"
    $.type( new Function() ); // "function"

    $.type( [] ); // "array"
    $.type( null ); // "null"
    $.type( /test/ ); // "regexp"
    $.type( new Date() ); // "date"

Как всегда, вы можете проверить документацию по API для получения более подробных объяснений.
