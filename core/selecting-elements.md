# Selecting Elements
Выбор элементов.  
Все селекторы: https://api.jquery.com/category/selectors/

Самая основная концепция jQuery заключается в том, чтобы выбрать несколько элементов и что-то с ними сделать. jQuery поддерживает большинство селекторов CSS3, а также некоторые нестандартные селекторы. Полный справочник по селекторам см. в документации по селекторам на сайте api.jquery.com.

## Selecting Elements by ID

    $( "#myId" ); // Note IDs must be unique per page.

## Selecting Elements by Class Name

    $( ".myClass" );

## Selecting Elements by Attribute

    $( "input[name='first_name']" );

## Selecting Elements by Compound CSS Selector

    $( "#contents ul.people li" );

## Selecting Elements with a Comma-separated List of Selectors

    $( "div.myClass, ul.people" );

## Pseudo-Selectors

    $( "a.external:first" );
    $( "tr:odd" );
    
    // Select all input-like elements in a form (more on this below).
    $( "#myForm :input" );
    $( "div:visible" );
    
    // All except the first three divs.
    $( "div:gt(2)" );
    
    // All currently animated divs.
    $( "div:animated" );

**Примечание.** При использовании псевдоселекторов `:visible` и `:hidden` jQuery проверяет фактическую видимость элемента, а не его CSS свойства `visibility` или `display`. jQuery проверяет, больше ли нуля физическая высота и ширина элемента на странице.

Однако этот тест не работает с элементами `<tr>`. В случае `<tr>` jQuery проверяет CSS свойство `display` и считает элемент скрытым, если для его свойства `display` установлено значение `none`.

Элементы, которые не были добавлены в DOM, всегда будут считаться скрытыми, даже если CSS, который повлияет на них, сделает их видимыми. См. раздел "Управление элементами", чтобы узнать, как создавать и добавлять элементы в DOM: https://learn.jquery.com/using-jquery-core/manipulating-elements/

## Choosing Selectors
Правильный выбор селекторов - один из способов улучшить производительность JavaScript. Излишняя конкретика может быть плохой вещью. Селектор, такой как `#myTable thead tr th.special`, является излишним, если селектор, такой как `#myTable th.special`, выполнит свою работу.

### Does My Selection Contain Any Elements?
После того, как вы сделали выбор, вы часто хотите знать, есть ли у вас что-нибудь для работы. Распространенной ошибкой является использование:

    // Doesn't work!
    if ( $( "div.foo" ) ) {
      ...
    }

Это не сработает. Когда выбор сделан с использованием `$()`, всегда возвращается объект, и объекты всегда оцениваются как `true`. Даже если выбор не содержит никаких элементов, код внутри оператора `if` все равно будет выполняться.

