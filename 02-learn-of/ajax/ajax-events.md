# Ajax Events
Часто вам потребуется выполнять операцию всякий раз, когда запускается или останавливается запрос Ajax, например, отображать или скрывать индикатор загрузки. Вместо того, чтобы определять это поведение внутри каждого запроса Ajax, вы можете привязывать события Ajax к элементам так же, как вы привязываете другие события. Полный список событий Ajax см: http://api.jquery.com/Ajax_Events/

    // Настройка индикатора загрузки с помощью Ajax Events
    $( "#loading_indicator" )
      .ajaxStart(function() {
        $( this ).show();
      })
      .ajaxStop(function() {
        $( this ).hide();
      });