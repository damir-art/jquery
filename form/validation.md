# Валидация
Валидация введеных пользователем данных в форму. Узнаём значение `val()`, атрибута value, элемента формы.

Методы используемые при валидации:
- `val()` - получение значения первого элемента формы из выборки
- `val(value)` - установка значения всем элементам формы из выборки

Пример:

    $(':submit').on('click', function(){
      let val = $('textarea').val()
      let sel = $(':selected').val()

      // проходим в цикле по всем чекбоксам или только выбранным :checkbox:checked
      let ch = $(':checkbox').each(function() {
        let ch = $(this).val() // значение текущего чекбокса
        console.log(ch)
      })

      console.log(ch)
    }

Проверяем ведённые пользователем код, при отправке формы:

    if ($form.find("input[name=firstname]").val() === "") {
        alert("Введите имя пользователя");
        return false;
    }

Вместо `alert` используем `DOM`:

    if ($form.find("input[name=firstname]").val() === "") {
        $form.find("input[name=firstname]")
            .before('<div class="error">Введите имя</div>');
        return false;
    }

Код jQuery:

    $('.form__wrap').on('submit', function(){
        var $form = $(this); // для читаемости кода

        $form.find('.error').remove() // чистим форму от сообщений об ошибках

        if ($form.find("input[name=firstname]").val() === "") {
            $form.find("input[name=firstname]")
                .before('<div class="error">Введите имя</div>');
            return false;
        }

        if ($form.find("input[name=lastname]").val() === "") {
            alert("Введите фамилию пользователя");
            return false;
        }

        // отправляем через post
        $.post(
            $form.attr('action'), // ссылка куда отправляем данные
            $form.serialize()     // данные формы
        );

        // отключаем действие по умолчанию
        return false;
    });

## Разное
- `focus` - фокус на элементе
- `blur` - фокус ушёл с элемента
- `select` - выбор текста в `textarea` и `input[type=text]`
