# change
change срабатывает для элементов, когда их изменили:

    $('select').on('change', function() {
        $('select :select').val()
    })
