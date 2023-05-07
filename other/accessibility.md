# Доступность

Пример доступности если браузер не поддерживает JavaScript, то можно элементы кнопок которые запускают скрипты, внедрять в HTML через jQuery. И если браузер не будет поддерживать JavaScript, то кнопка на странице не появится. Поступательное расширение функциональности.

## Если браузер не поддерживает JavaScript
Если браузер не поддерживает JavaScript, создадим сообщение которое будет скрываться при поддержке JS:

    $(".no-script").remove(); // сообщение удаляется если JS поддерживается

    <div class="no-script">
      Включите поддержку JavaScript.
    </div>