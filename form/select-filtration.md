# Выбор и фильтрация
Выбор и фильтрация элементов формы:

- $(':checkbox')
- :radio
- :submit
- :reset
- :file - кнопка загрузки файла
- :button - все кнопки submit, reset, обычная
- :text
- :password
- :input

Если нужны элементы конкретной формы то пишем через пробел `form :submit`.

### Элементов форм
Здесь используем `.val()`: `$(':input').val()`.

- `$(':input')` - выбор всех элементов `input`
- `$(':text')` - выбор всех элементов `input`, где `type="text"`
- `$(':password')` - выбор всех элементов `input`, где `type="password"`
- `$(':radio')` - выбор всех элементов `input`, где `type="radio"`
- `$(':checkbox')` - выбор всех элементов `input`, где `type="checkbox"`
- `$(':checked')` - выбор всех элементов `input` c атрибутом `checked` (выбранные элементы: радиокнопки, чекбоксы)
- `$(':disabled')` - выбор всех элементов `input` с атрибутом `disabled`
- `$(':selected')` - выбор всех элементов `input` c атрибутом `selected`
- `$(':submit')` - выбор всех элементов `input` c `type="submit"`

Пример:

    $(':radio').prop('checked', false) // убираем состояние вкл у всех радиокнопок
    $(':selected').text('Выбрано!')
