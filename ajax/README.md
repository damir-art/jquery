# AJAX
## Оглавление
- `load.md` - load(), загрузка HTML-кода в DOM-элемент
- `ajax.md` - ajax()
- JSON
- события AJAX
- продвинутый AJAX

Обычно получать данные в XML - избыточно, поэтому чаще используют JSON.

## Конспект
- технология AJAX
- jsonplaceholder
- GET, POST, PUT, DELETE
- методы обработки событий
- обработка данных перед отправкой

## Технология AJAX
Технология AJAX - обращение к серверу и получение данных от него без перезагрузки страницы, уменьшает время на повторную загрузку страницы.

- AJAX может применяеться во многих случаях, например: поиск, подгрузка данных, отправка форм, получение ответа от сервера и мн.др.
- С помощью AJAX отправляют и получают такие данные как JSON, XML, HTML, text.
- Общение с сервером происхожит через `Запрос > < Ответ`

## jsonplaceholder
https://jsonplaceholder.typicode.com/  

## Методы для работы с GET, POST, PUT, DELETE

- `$.ajaxSetup()` - метод устанавливает параметры для запроса
- `$.ajax()` - выполняет AJAX запрос к серверу
- `$get()` - выполняет запрос
- `$post()` - выполняет запрос

### $.ajaxSetup()
`$.ajaxSetup()` - удобен если у вас не большое приложение и запросы выполняются на один и тот же ресурс (настройки для всех запросов). По умолчанию выполняется асинхронно.

Пример, по нажатию по кнопке выводим данные без перезагрузки:

    $.ajaxSetup({
      url: 'https://jsonplaceholder.typicode.com/todos/1', // адрес по которому выполняется запрос
      context: $('.content'), // контекст функции и исполнения
      // async: false, // если нужен синхронный запрос
      // обработка пришедших от сервера статусов кода, можно не делать
      statusCode: {
        404: function () {
          console.log('Страница не найдена!');
        }
      },
      // успешное выполнение запроса, можно не делать
      success: function () {
        // обращаемся к контексту $('.content'), через this, размещаем там текст
        $(this).text('Успешное выполнение AJAX-запроса!');
      },
      // ошибка, при выполнении запроса, в параметрах статус ошибки и статус текст, можно не делать
      error: function ( xhr ) {
        console.log(`Error status: ${xhr.status}. Error text: ${xhr.statusText}!`);
      }
    })

Чтобы выпонить `$.ajaxSetup`, нужно событие:

  // Чтобы выполнить `$.ajaxSetup`, создаём событие, например клик по кнопке
  $('.button').click(function () {
      // $.ajax() - метод выполняет запрос по заданным настройкам в $.ajaxSetup()
    $.ajax();
  })

Для обработки и выполнения специфических функций, можно создать список статус кодов `statusCode`, по которым будут выполняться определённые функции.

### $.ajax()
`$.ajax()` - более универсальный метод чем `$.ajaxSetup`, подходит для проектов которые ссылаются на несколько различных ресурсов.

HTML-код:

    <div class="content">
      <div id="content">Здесь выведется контент от AJAX.</div>

      <button class="ajax">AJAX</button>
      <button class="get">GET</button>
      <button class="post">POST</button>
      <button class="delete">DELETE</button>
      <button class="put">PUT</button>
    </div>

Создаём вызов метода AJAX по нажатию на кнопку с классом AJAX. Метод `$.ajax()` имеет точно такие же параметры как и метод `$.ajaxSetup()`, единственное различие это то что `$.ajaxSetup()` устанавливается глобально, а `$.ajax()` можно изменять, в зависимости от потребностей.


JS-код:

    // Создаём вызов метода AJAX по нажатию на кнопку с классом AJAX
    $('.ajax').click(function () {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        // success принимает результат выполнения запроса
        success: function (res) {
          console.log( res );
          console.log( res.title );
          $('#content').text( `AJAX: ${res.title}` );
        },
      });
    })

## $.get()

Метод `$.ajax()` по дефолту выполняет метод GET. Но метод `$.ajax()` является настраиваемым и его синтаксис богаче синтаксиса метода `$.get()`.

Первый параметр это адрес к которому нужно обратиться, второй параметр это функция которая выполниться при успешном запросе:

    // Обращаемся к кнопке с классом .get
    $('.get').click(function () {
      // первый параметр это адрес, второй параметр это функция
      $.get(
        'https://jsonplaceholder.typicode.com/posts/2',
        // функция принимает два параметра
        function(data, status) {
          console.log( data );
          console.log( status );
          $('#content').text( `GET DATA.TITLE: ${data.title}, GET STATUS: ${status}` );
        }
      )
    })

## $.post()
Метод `$.post()` принимает три значения: адрес обращения, объект или переменная хранящая объект, функция.

В консоли во вкладке `Сеть` покажет статус кода `201`, во вкладках Заголовки, Запрос, Ответ дополнительные данные.

В data хранится ответ сервера.

## PUT, DELETE работают через $.ajax()
Для PUT, DELETE не существует быстрых методов, они работают через $.ajax().

    // Обращаемся к кнопке с классом .delete
    $('.delete').click(function () {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        type: 'DELETE',
        // success принимает результат выполнения запроса, получим пустой объект, запись была удалена
        success: function (res) {
          console.log( res );
        },
      });
    })

## Методы обработки AJAX-событий
- `$(document).ajaxSuccess()` - метод срабатывает при успешном выполнении запроса
- `$(document).ajaxError()` - метод срабатывает при ошибке в выполнении запроса
- `$(document).ajaxStart()` - метод срабатывает при начале выполнения запроса
- `$(document).ajaxComplete()` - метод срабатывает при выполнении запроса, срабатывает после ajaxSuccess() и ajaxError(), перед ajaxStop()
- `$(document).ajaxStop()` - метод срабатывает при окончании всех AJAX запросов на странице

Раньше можно было вызывать эти методы через знак доллара, сейчас они добавляются к `$(document).`. Методы срабатывют внутри документа. Срабатывают для всех запросов AJAX внутри документа, например для всех успешных ajaxSuccess(), имеют параметры.

Методы ajaxStart() и ajaxStop() могут быть использованы для создании анимации ожидания выполнения запроса.

Жмем по кнопке, получаем успешное выполнение запроса или ошибку: 

    // Жмем по кнопке, получаем успешное выполнение запроса
    $('.success').click(function () {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        success: function (res) {
          console.log( res );
        },
      });
    })

    // Жмем по кнопке, получаем ошибку при выполнении запроса
    $('.error').click(function () {
      $.ajax({
        url: 'ttps://jsonplaceholder.typicode.com/todos/1',
        success: function (res) {
          console.log( res );
        },
      });
    })

    // Срабатывает для всех успешных AJAX-запросов (событие, запрос, опции)
    $(document).ajaxSuccess(function (e, xhr, opt) {
      console.log('Успех!');
      console.log(e);
      console.log(xhr);
      console.log(opt);
    });

    // Срабатывает для всех AJAX-запросов, при ошибке
    $(document).ajaxError(function (e, xhr, opt) {
      console.log('Ошибка!');
      console.log(e);
      console.log(xhr);
      console.log(opt);
    });

`$(document).ajaxStart()` и `$(document).ajaxStop()`:

    $(document).ajaxStart(function () {
      console.log('Start!');
      $('#anime').show(300);
    });

    $(document).ajaxStop(function () {
      console.log('Stop!');
      $('#anime').hide(300);
    });

`$(document).ajaxComplete()`:

    $(document).ajaxComplete(function () {
      console.log('Complete!');
    });

## $.param()
Обработка данных перед отправкой.  
`$.param()` - метод создаёт строку для отправки данных из объекта.  
Для отправки данных на сервер, часто приходиться преобразовать данные объекта в строку.  
Метод $.param() принимает данные в виде объекта и преобразовывает его в строку (например в строку для отправки).

    let form = {
      name: 'Ivan',
      email: 'ivan@ivanov.local',
      pass: '123',
    }
    // Отобразим данные формы внутри тега div#content
    $('#content').text($.param(form)); // name=Ivan&email=ivan%40ivanov.local&pass=123

## Пример
Загружаем AJAX контент, кликая по ссылкам:

    $(function() {
      // вешаем обработчик на все ссылки в нашем меню navigation
      $("ul.navigation a").click(function() {
        var url = $(this).attr("href");   // возьмем ссылку
        url += "?ajax=true";              // добавим к ней параметр ajax=true
        $("#content").load(url);          // загружаем обновлённое содержимое
        return false; // возвращаем false, дабы не сработал переход по ссылке
      });
    });

Если сервер не понимает `url += "?ajax=true"`, то пишем:

    $(function() {
      // вешаем обработчик на все ссылки в нашем меню navigation
      $("ul.navigation a").click(function(){
        var url = $(this).attr("href"); // возьмем ссылку
        // загружаем страницу целиком, но в наш контейнер вставляем лишь содержимое #content загружаемой страницы
        $("#content").load(url + " #content > *");
        return false; // возвращаем false
      });
    });
