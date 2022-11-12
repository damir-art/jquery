# element value
Получаем значение элементов формы.

    $(element).val()            // получаем значение value у элемента
    $('select :selected').val() // получаем значение value у элемента select

Получаем значение у чекбоксов:

    $(':checkbox').each(function() {
        $('this').val()
    })
