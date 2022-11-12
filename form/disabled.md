# disabled
Блокировка элементов формы.

    $(':submit').click(function(evt) {
        $(':checkbox').attr('disabled', 'disabled')
        evt.preventDefault()
    })

    $(':reset').click(function(evt) {
        $(':checkbox').removeAttr('disabled')
        evt.preventDefault()
    })
