# AJAX PHP JSON
https://api.jquery.com/jquery.ajax/  
https://snipp.ru/php/json-php  
https://snipp.ru/jquery/ajax-jquery  

Работаем в jQuery с AJAX PHP и передаче данных.

AJAX позволяет отправить и получить данные без перезагрузки страницы. Например, делать проверку форм, подгружать контент и т.д. А функции JQuery значительно упрощают работу.

## GET
index.php (может быть пустым) - подключаем script.js

script.js (обновляем страницу index.php)

    $.ajax({
      url: '/send.php',         // куда пойдет запрос
      method: 'get',            // метод передачи (post или get)
      //cache: false,           // чтобы запросы не кешировались
      dataType: 'html',         // тип данных в ответе (xml, json, script, html)
      data: {text: 'Текст'},    // параметры передаваемые в запросе (передаваемые данные)
      success: function(data) { // функция которая будет выполнена после успешного запроса
        alert(data);            // в переменной data содержится ответ от send.php
        //$('.wrapper').css('background-color', 'green'); // изменяем цвет элемента в index.php
        //$('.wrapper').append(data); // добавляем текст полученный из send.php в index.php
      }
    });

send.php (в `data:` отправляем объект, для получения значения свойства объекта, прописываем имя свойства в $_GET):

    <?php
    echo 'Данные приняты - ' . $_GET['text'];

Сокращенный код `$.get`:

    $.get('/send.php', {text: 'Текст'}, function(data){
      alert(data);
    });

GET запросы могут кэшироваться браузером или сервером, чтобы этого избежать нужно добавить в функцию параметр: `cache: false`:

    $.ajax({
      url: '/index.php',
      method: 'get',
      cache: false
    });

## POST
POST запросы не кешируются.

index.php (может быть пустым) - подключаем script.js

script.js (обновляем страницу index.php)

    $.ajax({
      url: '/send.php',         // куда пойдет запрос
      method: 'post',           // метод передачи (post или get)
      dataType: 'html',         // тип данных в ответе (xml, json, script, html)
      data: {text: 'Текст'},    // параметры передаваемые в запросе (передаваемые данные)
      success: function(data) { // функция которая будет выполнена после успешного запроса
        alert(data);            // в переменной data содержится ответ от send.php
        //$('.wrapper').css('background-color', 'green'); // изменяем цвет элемента в index.php
        //$('.wrapper').append(data); // добавляем текст полученный из send.php в index.php
      }
    });

send.php (в `data:` отправляем объект, для получения значения свойства объекта, прописываем имя свойства в $_POST):

    <?php
    echo 'Данные приняты - ' . $_POST['text'];

Сокращенный код `$.post`:

    $.post('/send.php', {text: 'Текст'}, function(data){
      alert(data);
    });

## FORM POST
Отправка формы.  
Добавьте в script.js: `evt.preventDefault()`.

`serialize()` - функция применяется при отправке формы, обходит форму, собирает имена и значения полей формы, создаём на основе него объект:
- при обходе игнорирует кнопку форму при нажатии на которую происходит отправка формы
- применяется только к форме и её полям

index.php:

    <div class="wrapper">
      <form id="form">
        <input type="text" name="name" placeholder="Имя" />
        <input type="email" name="email" placeholder="Е-маил" />
        <textarea name="text" cols="30" rows="5" placeholder="Сообщение"></textarea>
        <button type="submit" name="send">Отправить</button>
      </form>
      <div class="message"></div>
    </div>

script.js:

    $("#form").on("submit", function(evt) {
      evt.preventDefault();
      $.ajax({
        url: 'send.php',
        method: 'post',
        dataType: 'html',
        data: $(this).serialize(),
        success: function(data){
          $('.message').html(data);
          $('.message').css('display', 'block');
        }
      });
    });

send.php:

    $name  = $_POST['name'];
    $email = $_POST['email'];
    $text  = $_POST['text'];

    if(!$name) {
      echo 'Заполните поле имя!';
    } else if (!$email) {
      echo 'Заполните поле емаил!';
    } else if(!$text) {
      echo 'Заполните поле сообщение!';
    } else {
      // Здесь происходит отправка сообщения
      echo 'Сообщение отправлено!';
    }

style.css:

    .message {
      padding: 4px 8px;
      background-color: rgba(0, 128, 0, 0.3);
      display: none;
    }

## JSON
Работа с JSON - это идеальный вариант, когда нужно работать с массивами данных.

index.php (может быть пустым) - подключаем script.js.

script.js (обновляем страницу index.php):

    $.ajax({
      url: '/send.php',
      method: 'get',
      dataType: 'json', // принимает ответ в json-формате
      success: function(data) {
        alert(data.text);    /* выведет "Текст" */
        alert(data.error);   /* выведет "Ошибка" */
      }
    });

send.php:

    header('Content-Type: application/json');
    $result = array(
      'text'  => 'Текст',
      'error' => 'Ошибка'
    );

    echo json_encode($result);

https://snipp.ru/php/json-php  
header() - это отправка HTTP-заголовка,  
json_encode() - это кодирование объекта или массива в JSON.

Сокращённая версия ($.getJSON передает запрос только через GET):

    $.getJSON('/json.php', function(data) {
      alert(data.text);
      alert(data.error);
    });

## JSON FORM

index.php:

    <div class="wrapper">
      <form id="form">
        <input type="text" name="name" placeholder="Имя" />
        <input type="email" name="email" placeholder="Е-маил" />
        <textarea name="text" cols="30" rows="5" placeholder="Сообщение"></textarea>
        <button type="submit" name="send">Отправить</button>
      </form>
      <div class="message"></div>
    </div>

script.js:

    $("#form").on("submit", function(evt) {
      evt.preventDefault();
      $.ajax({
        url: '/send.php',
        method: 'post',
        dataType: 'json', // принимает ответ в json-формате
        data: $(this).serialize(), // отправляем на сервер
        success: function(data) {  // принимаем ответ от сервера
          $('.message').html(data);
          $('.message').css('display', 'block');
        }
      });
    });

send.php:

    $name  = $_POST['name'];
    $email = $_POST['email'];
    $text  = $_POST['text'];

    $result = [];
    if(!$name) {
      $result[] = 'Заполните поле имя!';
    } else if (!$email) {
      $result[] = 'Заполните поле емаил!';
    } else if(!$text) {
      $result[] = 'Заполните поле сообщение!';
    } else {
      // Здесь происходит отправка сообщения
      $result[] = 'Сообщение отправлено!';
    }

    // Отправляем клиенту JSON формат данных
    header('Content-Type: application/json');
    echo json_encode($result);
