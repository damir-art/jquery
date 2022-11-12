## Состояние `state`
Элементы формы могут быть в 2х состояниях: выбрано `checked`/не выбрано.

- `$(':checkbox:checked')` - выбираем все отмеченные чекбоксы
- `$(':radio:checked')` - выбираем все отмеченные радио кнопки
- `$(':selected')` - выбираем активный элемент select

HTML-код:

    <input name="fruit" type="checkbox" value="apple" checked>
    <label><input name="sex" type="radio" value="male" checked>Male</label>

    <select>
        <option>Admin</option>
        <option selected>Manager</option>
        <option>User</option>
    </select>
