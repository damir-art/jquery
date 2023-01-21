# Data Methods
Часто есть данные об элементе, которые вы хотите сохранить вместе с элементом. В простом JavaScript вы можете сделать это, добавив свойство к элементу DOM, но вам придется иметь дело с утечками памяти в некоторых браузерах. jQuery предлагает простой способ хранения данных, связанных с элементом, и решает проблемы с памятью за вас.

    // Storing and retrieving data related to an element.
    $( "#myDiv" ).data( "keyName", { foo: "bar" } );
    $( "#myDiv" ).data( "keyName" ); // Returns { foo: "bar" }

В элементе могут храниться любые данные. Для целей этой статьи `.data()` будет использоваться для хранения ссылок на другие элементы.

Например, вы можете захотеть установить связь между элементом списка и `<div>` внутри него. Эта связь может устанавливаться каждый раз при касании элемента списка, но лучшим решением будет установить связь один раз, а затем сохранить указатель на `<div>` в элементе списка с помощью `.data()`:

    // Storing a relationship between elements using .data()
    $( "#myList li" ).each(function() {
        var li = $( this );
        var div = li.find( "div.content" );
        li.data( "contentDiv", div );
    });

    // Later, we don't have to find the div again;
    // we can just read it from the list item's data
    var firstLi = $( "#myList li:first" );

    firstLi.data( "contentDiv" ).html( "new content" );

Помимо передачи `.data()` одной пары ключ-значение для хранения данных, вы также можете передать объект, содержащий одну или несколько пар.
