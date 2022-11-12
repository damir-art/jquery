# focus
focus срабатывает для элементов, когда они находятся в фокусе:

    $('form').on('focus', function() {
        $(this).css('color', 'green')
    })
