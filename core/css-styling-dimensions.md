# CSS, Styling, & Dimensions
https://api.jquery.com/category/dimensions/

jQuery включает удобный способ получения и установки свойств CSS элементов:

Get:

    // Getting CSS properties.
    $( "h1" ).css( "fontSize" ); // Returns a string such as "19px".
    $( "h1" ).css( "font-size" ); // Also works.

Set:

    // Setting CSS properties.
    $( "h1" ).css( "fontSize", "100px" ); // Setting an individual property.

    // Setting multiple properties.
    $( "h1" ).css({
      fontSize: "100px",
      color: "red"
    });

Обратите внимание на стиль аргумента во второй строке - это объект, который содержит несколько свойств. Это распространенный способ передачи нескольких аргументов в функцию, и многие методы установки jQuery принимают объекты для одновременной установки нескольких значений.

CSS-свойства, которые обычно содержат дефис, должны быть написаны в верблюжьем регистре в JavaScript. Например, свойство CSS `font-size` выражается как `fontSize` при использовании в качестве имени свойства в JavaScript. Однако это не относится к передаче имени CSS-свойства методу `.css()` в виде строки - в этом случае будет работать либо форма с верблюжьим регистром, либо форма с дефисом.

Не рекомендуется использовать `.css()` в качестве установщика в production-ready code, но при передаче объекта для установки CSS, свойства CSS будут иметь верблюжий регистр вместо использования дефиса.

## Using CSS Classes for Styling
В качестве геттера метод `.css()` ценен. Однако, как правило, его следует избегать в качестве установщика в готовом к работе коде, потому что обычно лучше не допускать презентационную информацию в код JavaScript. Вместо этого напишите правила CSS для классов, описывающих различные визуальные состояния, а затем измените класс элемента.

    // Working with classes.
    var h1 = $( "h1" );

    h1.addClass( "big" );
    h1.removeClass( "big" );
    h1.toggleClass( "big" );

    if ( h1.hasClass( "big" ) ) {
      ...
    }

Классы также могут быть полезны для хранения информации о состоянии элемента, например для указания того, что элемент выбран.

## Dimensions
jQuery предлагает множество методов для получения и изменения информации о размерах и положении элемента.

В приведенном ниже коде показан краткий обзор функций измерений в jQuery. Полную информацию о методах измерения jQuery см. в документации по измерениям на сайте api.jquery.com.

    // Basic dimensions methods.
    // Sets the width of all <h1> elements.
    $( "h1" ).width( "50px" );

    // Gets the width of the first <h1> element.
    $( "h1" ).width();

    // Sets the height of all <h1> elements.
    $( "h1" ).height( "50px" );

    // Gets the height of the first <h1> element.
    $( "h1" ).height();

    // Returns an object containing position information for
    // the first <h1> relative to its "offset (positioned) parent".
    $( "h1" ).position();
