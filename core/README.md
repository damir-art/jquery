# Core
https://learn.jquery.com/using-jquery-core/  
https://api.jquery.com/category/core/  

## jQuery()
С помощью объекта jQuery можно не только выбирать но и создавать элементы. После создания элемента их нужно поместить возле какого-нибудь элемента, чтобы он появился на странице.

    jQuery("<p>Привет</p>");                   // создаём параграф
    jQuery("<p>Привет</p>").addClass("p");     // добавляем CSS-класс параграфу, также можно добавить сразу в тег при создании элемента
    jQuery("<p>Абзац</p>").prependTo(".main"); // вставляем абзац, перед открывающим тегом .main

Пример как создавать элементы оптимизированно:

    let p = $("<p>Абзац</p>");
    p.addClass("p")
    p.prependTo(".main");

Создадим кнопку, поместим её перед абзацем-описанием и добавим на кнопку обработчик показывающий и скрывающий описание.

    let button = $(" <button class='button button--toggle'>Переключатель</button> ");
    head = $(" .head ");
    button.insertBefore(" .head ");

    button.on("click", function() {
      head.toggle(" slow ");
    });
