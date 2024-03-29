# Working with Selections

## Getters & Setters
Некоторые методы jQuery можно использовать для присвоения или чтения некоторого значения при выборе. Когда метод вызывается со значением в качестве аргумента, он называется сеттером, поскольку он устанавливает (или присваивает) это значение. Когда метод вызывается без аргумента, он получает (или считывает) значение элемента. Сеттеры влияют на все элементы в выборе, тогда как геттеры возвращают запрошенное значение только для первого элемента в выборе, за исключением `.text()`, который извлекает значения всех элементов.

    // The .html() method sets all the h1 elements' html to be "hello world":
    $( "h1" ).html( "hello world" );

    // The .html() method returns the html of the first h1 element:
    $( "h1" ).html();
    // > "hello world"

Сеттеры возвращают объект jQuery, позволяя вам продолжать вызывать методы jQuery по вашему выбору. Геттеры возвращают все, что их просили получить, поэтому вы не можете продолжать вызывать методы jQuery для значения, возвращаемого геттером.

    // Attempting to call a jQuery method after calling a getter.
    // This will NOT work:
    $( "h1" ).html().addClass( "test" );

## Chaining
Если вы вызываете метод для выборки, и этот метод возвращает объект jQuery, вы можете продолжать вызывать методы jQuery для объекта без паузы для точки с запятой. Эта практика называется "цепочкой" `chaining`:

    $( "#content" ).find( "h3" ).eq( 2 ).html( "new text for the third h3!" );

Разбив цепочку на несколько строк, можно улучшить читаемость кода:

    $( "#content" )
      .find( "h3" )
      .eq( 2 )
      .html( "new text for the third h3!" );

jQuery также предоставляет метод `.end()` для возврата к исходному выбору, если вы измените выбор в середине цепочки:

    $( "#content" )
      .find( "h3" )
      .eq( 2 )
        .html( "new text for the third h3!" )
        .end() // Restores the selection to all h3s in #content
      .eq( 0 )
        .html( "new text for the first h3!" );

Объединение в цепочки чрезвычайно мощная функция, и многие библиотеки адаптировали ее с тех пор, как она стала популярной благодаря jQuery. Тем не менее, его следует использовать с осторожностью - обширная цепочка может затруднить модификацию или отладку кода. Не существует жесткого правила относительно длины цепочки - просто знайте, что легко увлечься.
