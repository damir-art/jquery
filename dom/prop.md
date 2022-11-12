# Свойства
Работаем со свойствами элементов в jQuery: `tagName`, `nodeName`, `nodeType`, `ownerDocument`, `defaultChecked`, `defaultSelected`, `selectedIndex`.

Получаем имя тега:

    $('.title').prop('tagName')

`prop()` используется в основном для отключения элементов формы и проверки/изменения состояния чекбоксов (attr() для этого не подходит):

    $('.btn').prop('checked') // true/false

Ставим галочку:

    $("input").prop("checked", true)

Удаляем галочку:

    $("input").prop("checked", false)

Активируем элемент:

    $("input").prop("disabled", false)

Деактивируем элемент:

    $("input").prop("disabled", true)

## Разное
Можно удалить свойство элемента: `removeProp(propName)`.
