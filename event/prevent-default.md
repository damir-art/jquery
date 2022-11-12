# preventDefault()
Отменяем действия по-умолчанию, например клик по ссылке.

При клике по ссылке, откроетя модальное окно, затем произойдет переход на другую страницу.

    $('a').on('click', function(){
        alert('hello')
    })

Чтобы этого не произошло, используйте метод `preventDefault()`:

    $('a').on('click', function(evt){
        evt.preventDefault()
        alert('hello link')
    })
