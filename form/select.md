# Select
Работаем с тегом select:

    <select name="select" id="select" size="4" width="200">
      <option value="1">Поле 1</option>
      <option value="2">Поле 2</option>
      <option value="3">Поле 3</option>
    </select>

При выборе option, сработает событие `change`:

    $('.select').change(function() {
      let o = $('.select :select').val()
    })
