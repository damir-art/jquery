# Deferred
Deferred - работа с промисами из ES6.

    // инициализация Deferred объекта
    // статус «ожидает выполнение»
    var D = $.Deferred();

    // подключаем обработчики
    D.then(function() { console.log("first") });
    D.then(function() { console.log("second") });

    // изменяем статус на «fulfilled» - «выполнен успешно»
    // для этого вызываем resolve()
    // наши обработчики будут вызваны в порядке очереди, но они не ждут друг друга
    D.resolve();

    // данный обработчик подключён слишком поздно и будет вызван сразу
    D.then(function() { console.log("third") });

    // изменяем статус на «rejected» - «выполнен с ошибкой»
    D.reject();
    // в консоли нас будет ожидать лишь «fail» :(

## Callbacks
Улучшенная версия Deferred.

## Развите AJAX
Развите AJAX в jQuery:
    
    $.ajax() > Deferred (jQuery 1.5) > Callbacks (jQuery 1.7)
