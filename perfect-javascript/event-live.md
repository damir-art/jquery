# live события
Почему live, потому что раньше это работало в функции live, а сейчас в on.

e.target - элемент на котором произошло событие.

Подсвечиваем поля у формы через события `focus` и `blur`, при этом события вешаем не на поля, а на форму. Всплытие событий (пропагатион).

    $('*').on('click', function() {
      // клик сработает на все элементы которые расположены в месте клика
      // input, item, items, form, body, html - событие всплыло от инпута к хтмл
      // e.stopPropagation(); // прерывание всплытия события
      console.log( 1 );
    });

Еще про всплытия:

    $('body').on('click', function(e) {
      console.log(e); // там можно найти target, который показывает по какому элементу внутри body был произведён клик
    });

Пример:

    html, body {
      margin: 10px;
      background: #eee;
    }
    .active {
      box-shadow: 0 0 5px #f00;
    }
    .item {
      margin: 10px;
    }

    <form>
      <div class="items">
        <div class="item">
          <input type="text" class="check">
        </div>
        <div class="item">
          <input type="text" class="check">
        </div>
        <div class="item">
          <input type="text" class="check">
        </div>
      </div>
      <input type="button" class="addField" value="Добавить поле">
    </form>

live: $('.items').on('focus', `'input[type="text"]'`, function() {});  
вешаем событие на items, событие будет срабатывать на инпутах по е.таргет  
событие всплывает от элемента к айтемс и сравнивает е.таргет с `'input[type="text"]'`  
если есть совпадение, срабатывает

    $(function () {
      $('.items').on('focus', 'input[type="text"]', function() {
        $(this).addClass('active');
      });

      $('.items').on('blur', 'input[type="text"]', function() {
        $(this).removeClass('active');
      });

      // Добавляем новое поле по клику
      // В добавленных полях не работают события focus и blur
      // Чтобы они работали события делай как выше
      $('.addField').on('click', function() {
        var $div = $('<div/>').addClass('item'); // слэш в конце - парный тег
        $('<input>').attr('type', 'text').addClass('check').appendTo($div); // создаём input, добавляем его внутрь див
        $('.items').append($div); // тут наоборот див добавляем внутрь айтемс
      });
    });
