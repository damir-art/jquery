# События

    window.onload = function (evt) {
      console.log(evt); // isTrusted: true - событие браузера

      document.body.onclick = function (evt) {
        console.log(evt);
      }
    }

Можно ли событию присвоить два обработчика? Можно ли подвесить два одинаковых события на один элемент?

    document.body.onclick = function (evt) {
      console.log(evt);
      console.log(1);
    }

    document.body.onclick = function (evt) {
      console.log(evt);
      console.log(2);
    }

Нет, второй обработчик перезапишет первый, document.body.onclick - это метод который перезаписали. Объект это ассоциативный массив, и мы перезаписали его ключ `onclick`.

Чтобы подвесить два события на один элемент нужно воспользоваться `addEventListener()`.

## addEventListener()
Переводится как добавить слушатель события:

    document.body.addEventListener('click', function () {
      console.log(1);
    });

    document.body.addEventListener('click', function () {
      console.log(2);
    });

## Несколько событий могут вызывать один и тот же обработчик

    window.onload = function (evt) {
      document.body.addEventListener('click', foo);
      document.body.addEventListener('click', foo2);

      document.body.addEventListener('mousemove', foo);
    }

    let a = 0
    function foo () {
      console.log(a++);
    }

    function foo2 () {
      console.log('Вызов второй функции по клику');
    }

Почему foo без круглых скобок? Событию мы передаём только имя функции, когда это событие произойдет на этом элементе, браузер сам добавит круглые скобки функции и она тогда вызовется. foo - отложенная функция.

## Обработчики событий
Обработчики событий - это массив. Изначально он пустой. Обработчики вызываются в том порядке в котором установлены.

В обработчики событий параметры не передаются, есть только параметр `evt`. Отложенную функцию foo будет вызывать браузер и он вызывает её только с одним параметром `evt`.

Есть возможность передать параметр в обработчик:
- расположить обработчик внутри window.onload и перед обработчком создать переменную, по замыканию обработчик будет видеть значение этой переменной,
- у элемента DOM проставлены атрибуты, которые тоже могут служить параметрами для события, наприме дата атрибуты

## Используем атрибуты элемента как параметры обработчика
В обработчики параметры не передаются, но можно использовать значения атрибутов как параметры и в зависимости от них управлять кодом. Один обработчик, два события. Также можно написать код который по одному событию будет запускать несколько разных обработчиков в зависимости от данных в атрибутах.

    <div class="actions flex">
      <input class="button" type="button" name="save" data-tovar="Товар 1" value="Сохранить">
      <input class="button" type="button" name="delete" data-tovar="Товар 2" value="Удалить">
    </div>

    window.onload = function ( evt ) {
      let buttons = document.querySelectorAll( '.actions input' ); // получаем псевдомассив элементов
      // console.log( buttons ); // NodeList

      for( let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', clickBtn);
      }
    }

    function clickBtn ( evt ) {
      // let name = this.dataset.tovar; // дата атрибуты
      let name = this.name;

      if ( this.name == 'save') {
        console.log( 'Сохранить изменения товара' );
      }
      if ( this.name == 'delete') {
        console.log( 'Удалить товар' );
      }

    }

## Прерывание стандартных событий
Сабмит, клик по ссылке и т.п.

    return false // чистый js
    или e.preventDefault

Сначала выполняется обработчик события затем прерывание стандартных событий.  
Модальные окна прерывающие выполнение JavaScript кода: alert(), confirm(), prompt()  

    mousedown    // не позволит захватывать мышью фото на сайте
    contextmenu  // отключает правую кнопку мыши
    return false

Любое событие которое установил разработчик на элементе, можно отменить через консоль браузера.

## События
- submit - можно вешать на форму (рекомендуется) или кнопку.
