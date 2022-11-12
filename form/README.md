# Формы
Формы в jQuery. Чаще всего работают с событиями: `change`, `submit`.

## HTML
Пример HTML-формы:

    <div class="content">
        <div class="form">
            <h1 class="form__title">Работаем с формами</h1>
            <form class="form__wrap" action="#">
                <input class="form__element" type="text" name="firstname" placeholder="Введите имя" />
                <input class="form__element" type="text" name="lastname" placeholder="Введите фамилию" />
                <input class="form__element form__element--submit" type="submit" />
            </form>
        </div>
    </div>

## CSS
Пример CSS-кода:

    /* Форма */
    .form__wrap {
        display: flex;
        flex-direction: column;
        max-width: 35%;
    }
    .form__element {
        margin-bottom: 16px;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid #eee;
    }
    .form__element--submit {
        color: #fff;
        background-color: #3498db;
        cursor: pointer;
        font-size: 16px;
    }
    .form__element--submit:hover {
        background-color: #2980b9;
    }

## jQuery
Пример jQuery-кода:

    $('.form__wrap').on('submit', function(){
        var $form = $(this); // для читаемости кода

        // отправляем через post
        $.post(
            $form.attr('action'), // ссылка куда отправляем данные
            $form.serialize()     // данные формы
        );

        // отключаем действие по умолчанию
        return false;
    });

## Разное
`serialize()` - метод отвечает за сбор данных из формы в удобном для передачи данных формате:

    firstname=Ivan&lastname=Ivanov

`serializeArray()` - метод представляющий данные из формы в виде массива объектов:

    [
        {
            "name": "firstname",
            "value": "Ivan"
        },
        {
            "name": "lastname",
            "value": "Ivanov"
        }
    ]
