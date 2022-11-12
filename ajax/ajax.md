# ajax()
https://api.jquery.com/jQuery.ajax/

Повотрим то что делали в load(), но с помощью ajax():

    $('.btn--ajax').on('click', function() {
        $.ajax({
            url: 'ajax.html',             // указываем URL
            method: 'GET',                // HTTP метод, по умолчанию GET
            data: {'id': 3},              // данные, которые отправляем на сервер
            dataType: 'html',             // тип данных загружаемых с сервера
            success: function (data) {
                $('.ajax').html(data)     // вешаем свой обработчик события success
            }
        })
    });

Еще обертки для ajax():
- get(url, data, success, dataType) - загружает данные методом GET
- post(url, data, success, dataType) - загружает данные методом POST
- getScript(url, success) - загружает JavaScript с сервера методом GET (обертка над get())
