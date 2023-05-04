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

Лучший способ определить, есть ли какие-либо элементы, - это проверить свойство `.length` выборки, которое сообщает вам, сколько элементов было выбрано. Если ответ равен 0, свойство `.length` будет оцениваться как `false` при использовании в качестве логического значения:

    // Testing whether a selection contains elements.
    if ( $( "div.foo" ).length ) {
      ...
    }

### Saving Selections
jQuery не кэширует элементы за вас. Если вы сделали выборку, которую вам, возможно, придется сделать снова, вам следует сохранить её в переменной, а не делать выборку повторно.

    var divs = $( "div" );

Как только выборка сохранена в переменной, вы можете вызывать методы jQuery для этой переменной точно так же, как если бы вы вызывали их для исходной выборки.

При выборе извлекаются только те элементы, которые находятся на странице в момент выбора. Если элементы будут добавлены на страницу позже, вам придется повторить выборку или иным образом добавить их к выборке, сохраненной в переменной. Сохраненные выборки не обновляются волшебным образом при изменении DOM.

### Refining & Filtering Selections
Иногда выбор содержит больше, чем то, что вам нужно. jQuery предлагает несколько методов уточнения и фильтрации выборки.

    // Refining selections.
    $( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags
    $( "h1" ).not( ".bar" );           // h1 elements that don't have a class of bar
    $( "ul li" ).filter( ".current" ); // unordered list items with class of current
    $( "ul li" ).first();              // just the first unordered list item
    $( "ul li" ).eq( 5 );              // the sixth

### Selecting Form Elements
jQuery предлагает несколько псевдоселекторов, помогающих находить элементы в формах. Это особенно полезно, потому что может быть трудно различить элементы формы на основе их состояния или типа с помощью стандартных селекторов CSS.

#### :checked
Не путать с `:checkbox`, `:checked` - отмеченные флажки, но имейте в виду, что этот селектор работает также для отмеченных переключателей `radio` и элементов `<select>` (только для элементов `<select>` используйте селектор `:selected`):

    $( "form :checked" );

Псевдоселектор `:checked` работает при использовании с флажками `checkbox`, переключателями `radio` и `select`.

#### :disabled
Использование псевдо-селектора `:disabled` нацелено на любые элементы `<input>` с атрибутом disabled:

    $( "form :disabled" );

Чтобы получить наилучшую производительность при использовании `:disabled`, сначала выберите элементы с помощью стандартного селектора jQuery, затем используйте `.filter( ":disabled" )` или перед псевдоселектором укажите имя тега или какой-либо другой селектор.

#### :enabled
По сути, обратный псевдоселектору `:disabled`, псевдоселектор `:enabled` нацелен на любые элементы, не имеющие атрибута `disabled`:

    $( "form :enabled" );

Чтобы получить наилучшую производительность при использовании `:enabled`, сначала выберите элементы с помощью стандартного селектора jQuery, затем используйте `.filter( ":enabled" )` или перед псевдоселектором укажите имя тега или какой-либо другой селектор.

#### :input
С помощью селектора `:input` выбираются все элементы `<input>`, `<textarea>`, `<select>` и `<button>`:

    $( "form :input" );

#### :selected
Использование псевдо-селектора `:selected` нацелено на любые выбранные элементы в элементах `<option>`:

    $( "form :selected" );

In order to get the best performance using :selected, first select elements with a standard jQuery selector, then use .filter( ":selected" ), or precede the pseudo-selector with a tag name or some other selector.

Чтобы получить наилучшую производительность при использовании `:selected`, сначала выберите элементы с помощью стандартного селектора jQuery, затем используйте `.filter( ":selected" )` или перед псевдоселектором укажите имя тега или какой-либо другой селектор.

#### Selecting by type
jQuery предоставляет псевдоселекторы для выбора элементов формы в соответствии с их типом:

    :password
    :reset
    :radio
    :text
    :submit
    :checkbox
    :button
    :image
    :file

Для всего этого есть примечания о производительности, поэтому обязательно ознакомьтесь с документацией API для получения более подробной информации https://api.jquery.com/category/selectors/form-selectors/.
