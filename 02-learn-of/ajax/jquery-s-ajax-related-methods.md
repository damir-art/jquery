# jQuery's Ajax-Related Methods
Методы jQuery, связанные с Ajax.

Хотя jQuery предлагает множество удобных методов, связанных с Ajax, основной метод `$.ajax()` лежит в основе всех из них, и его понимание необходимо. Сначала мы рассмотрим его, а затем кратко коснемся удобных методов.

Часто считается хорошей практикой использовать метод `$.ajax()` вместо удобных методов, предоставляемых jQuery. Как вы увидите, он предлагает функции, которых нет в удобных методах, а его синтаксис упрощает чтение.

## $.ajax()
Основной метод jQuery `$.ajax()` - это мощный и простой способ создания запросов Ajax. Требуется объект конфигурации, который содержит все инструкции, необходимые jQuery для выполнения запроса. Метод `$.ajax()` особенно ценен, поскольку он предлагает возможность указать как успешные, так и неудачные обратные вызовы. Кроме того, его способность принимать объект конфигурации, который можно определить отдельно, упрощает написание повторно используемого кода. Для получения полной документации по параметрам конфигурации посетите http://api.jquery.com/jQuery.ajax/.

    // Using the core $.ajax() method
    $.ajax({
      // The URL for the request
      url: "post.php",
      // The data to send (will be converted to a query string)
      data: {
        id: 123
      },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
    })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function( json ) {
      $( "<h1>" ).text( json.title ).appendTo( "body" );
      $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function( xhr, status, errorThrown ) {
      alert( "Sorry, there was a problem!" );
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    })
    // Code to run regardless of success or failure;
    .always(function( xhr, status ) {
      alert( "The request is complete!" );
    });
