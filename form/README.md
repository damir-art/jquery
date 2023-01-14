# Формы
Выбор и фильтрация форм в jQuery. Чаще всего работают с событиями: `change`, `submit`.  
Плагин валидации: https://jqueryvalidation.org/

- события форм
- обработка данных форм
- обработка отправки данных из формы
- модификация формы с помощью DOM манипуляций

## События форм
События форм, но могут сработать и на другие элементы:
- focus - получение фокуса на элементе
- blur - фокус ушёл с элемента
- focusin - фокус на элементе (всплывает)
- focusout - фокус ушёл с элемента (всплывает)
- change - изменение значения элемента
- select - выделение текста для `input[type=text]` и `textarea`
- reset - очистка формы
- submit - отправка формы

## Методы событий формы
Например методы используются при валидации значений элементов форм.
- `$("input").blur(function()` - метод вызывает функцию, когда элемент `input` теряет фокус
- `$("input").change(function()` - метод вызывает функцию, когда происходит изменение элемента `input`
- `$("div").focusin(function()` - метод задает фокус на элемент `div`
- `$("div").focusout(function()` - при уходе с элемента `div`
- `$("input").select(function()` - метод вызывает функцию при выделении текста
- `$("form").submit(function()` - событие запускает функцию при отправке формы

Проверяем длину значения элемента формы:

    $(input).blur(function() {
      if($(this).val().length === 0) {
        $('div').text('input value = 0')
      } else {
        $('div').text('input value > 0')
      }
    })

`.blur()`, `change()` - можно повесить на всю форму тег `form`.

## Обработка отправки данных из формы
Прежде чем отправить данные, их нужно обработать.
- `$("form").serialize()` - преобразовывает данные с формы в строку
- `$("form").serializeArray()` - преобразовывает данные с формы в массив объектов (JSON)
- `$("input:text").val("hello")` - метод устанавливает значение элементу `input`, если он пуст

Пример (для эффективной работы с данными формы, устанавливайте элементам формы атрибут `name`):

    $('form').submit(function(e) {
      e.preventDefault()
      $(elem).val('пустое значение') // заполняем пустое поле
      // console.log($('form').serialize())
      console.log($('form').serializeArray())
    })

Проверяем элементы формы:

    let overlay = $('.overlay') // фон формы, меняется при не удачной проверке
    let username = $('.username')
    let password = $('.password')

    // функция принимает и проверяет элемент формы
    function isValid(element, validValue) {
      if(element.val().length > validValue) {
        element.removeClass("error");
        return true
      }
      else{
        element.addClass("error");
        return false
      }
    }
    $("form").on("submit", function(e) {
      if(isValid(username, 3) && isValid(password, 6)) {
        e.preventDefault();
        overlay.removeClass("error");
        alert("Login!");
      }
      else{
        e.preventDefault();
        overlay.addClass("error");
        alert("Error!")
      }
    });

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

## Резюме
- `change()` - метод, который срабатывает после изменения данных элемента. Обработку изменения можно добавлять как на элементы формы, так и на элемент `form`, тогда метод будет срабатывать при изменении внутренних элементов формы
- `submit()` - метод, который выполняется при отправке данных с формы, обработка метода может позволить остановить выполнение отправки данных и произвести их обработку, прежде чем отправить на сервер
- `serialize()` - метод, который используется для обработки данных перед отправкой в URL строку. Метод может собирать данные из формы. Обработка формы с вложенными элементами может привести к дубликатам ключей в строке. Для успешного сбора данных формы в элементах должен быть установлен атрибут `name`
- `serializeArray()` - метод, который преобразует данные формы в виде массива, содержащего объекты, содержащие ключ/значение. Для успешной обработки данных формы, элементы должны содержать атрибут `name`
