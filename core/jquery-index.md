# Использование функции jQuery .index()
`.index()` - это метод объектов jQuery `$( sel ).index()`, который обычно используется для поиска заданного элемента в объекте jQuery, для которого он вызывается. Этот метод имеет четыре разных сигнатуры с разной семантикой, что может сбивать с толку. В этой статье подробно рассказывается о том, как понять, как `.index()` работает с каждой из них.

## .index() без аргументов

    <ul>
      <div></div>
      <li id="foo1">foo</li>
      <li id="bar1">bar</li>
      <li id="baz1">baz</li>
      <div></div>
    </ul>

    var foo = $( "#foo1" );
    console.log( "Index: " + foo.index() ); // 1

    var listItem = $( "li" );
    // This implicitly calls .first()
    console.log( "Index: " + listItem.index() ); // 1
    console.log( "Index: " + listItem.first().index() ); // 1
    
    var div = $( "div" );
    // This implicitly calls .first()
    console.log( "Index: " + div.index() ); // 0
    console.log( "Index: " + div.first().index() ); // 0

В первом примере `.index()` дает отсчитываемый от нуля индекс `#foo1` в его родительском элементе. Поскольку `#foo1` является вторым дочерним элементом своего родителя, `index()` возвращает `1`.

**Примечание.** До jQuery 1.9 `.index()` надежно работал только с одним элементом, поэтому мы использовали `.first()` в каждом из наших примеров. В jQuery 1.9+ это можно игнорировать, так как API был обновлен, чтобы определить, что он работает только с первым элементом.

## .index() with a String Argument

    <ul>
      <div class="test"></div>
      <li id="foo1">foo</li>
      <li id="bar1" class="test">bar</li>
      <li id="baz1">baz</li>
      <div class="test"></div>
    </ul>
    <div id="last"></div>

    var foo = $( "li" );

    // This implicitly calls .first()
    console.log( "Index: " + foo.index( "li" ) ); // 0
    console.log( "Index: " + foo.first().index( "li" ) ); // 0

    var baz = $( "#baz1" );
    console.log( "Index: " + baz.index( "li" )); // 2

    var listItem = $( "#bar1" );
    console.log( "Index: " + listItem.index( ".test" ) ); // 1

    var div = $( "#last" );
    console.log( "Index: " + div.index( "div" ) ); // 2

Когда `.index()` вызывается со строковым аргументом, необходимо учитывать две вещи. Во-первых, jQuery будет неявно вызывать `.first()` для исходного объекта jQuery. В этом случае он найдет индекс первого элемента, а не последнего элемента. Это несовместимо, поэтому будьте осторожны.

Второй момент, который следует учитывать, заключается в том, что jQuery запрашивает всю DOM, используя переданный селектор строк и проверяет индекс в этом новом запрошенном объекте jQuery. Например, при использовании `.index( "div" )` в последнем примере выше jQuery выбирает все элементы `<div>` в документе, а затем ищет индекс, который содержит первый элемент в объекте jQuery `.index()` вызывается.

## .index() with a jQuery Object Argument

    <ul>
      <div class="test"></div>
      <li id="foo1">foo</li>
      <li id="bar1" class="test">bar</li>
      <li id="baz1">baz</li>
      <div class="test"></div>
    </ul>
    <div id="last"></div>

    var foo = $( "li" );
    var baz = $( "#baz1" );
    console.log( "Index: " + foo.index( baz ) ); // 2

    var tests = $( ".test" );
    var bar = $( "#bar1" );

    // Implicitly calls .first() on the argument.
    console.log( "Index: " + tests.index( bar ) ); // 1
    console.log( "Index: " + tests.index( bar.first() ) ); // 1

В этом случае первый элемент объекта jQuery, переданный в `.index()`, проверяется на соответствие всем элементам исходного объекта jQuery. Исходный объект jQuery, расположенный слева от `.index()`, подобен массиву и ищется от индекса `0` до `length - 1` для первого элемента объекта jQuery аргумента.

## .index() with a DOM Element Argument
В этом случае элемент DOM, переданный в `.index()`, проверяется на соответствие всем элементам исходного объекта jQuery. Как только все другие случаи будут поняты, это должно быть самым простым случаем. Это очень похоже на предыдущий случай, за исключением того, что элемент DOM передается напрямую, а не берется из контейнера объектов jQuery.
