# blur
blur срабатывает для элементов, когда с них уходит фокус:

    $('form').on('blur', function() {
        $(this).css('color', 'black')
    })
