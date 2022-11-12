# submit
submit срабатывает в момент, когда мы отправляем форму с помощью одноимённой кнопки `type="submit"`.

    $('form').on('submit', function() {
        if($('text').val() == '') evt.preventDefault() // если текстовое поле пустое, то форму отправлять не будем
    })
