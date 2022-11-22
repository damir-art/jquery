jQuery(document).ready( function ($) {

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

  $(document).ajaxStart(function () {
    console.log('Start!');
    $('#anime').show(100);
  });

  $(document).ajaxStop(function () {
    console.log('Stop!');
    $('#anime').hide(100);
  });

  $(document).ajaxComplete(function () {
    console.log('Complete!');
  });

  let form = {
    name: 'Ivan',
    email: 'ivan@ivanov.local',
    pass: '123',
  }
  // Отобразим данные формы внутри тега div#content
  $('#content').text($.param(form)); // name=Ivan&email=ivan%40ivanov.local&pass=123

});