# preventDefault()
Отменяем действия по-умолчанию, например клик по ссылке, кнопке и т.д.

При клике по ссылке, откроетя модальное окно, затем произойдет переход на другую страницу.

    $('a').on('click', function(){
        alert('hello')
    })

Чтобы этого не произошло, используйте метод `preventDefault()`:

    $('a').on('click', function(evt){
        evt.preventDefault()
        alert('hello link')
        // или return false после кода
    })

При нажатии по ссылке появится модальное окно `confirm()`, если нажать отмена, то перехода по ссылке не будет:

    $('a').on('click', function(evt){
        let b = confirm('Перейти по ссылке?')
        if(!b) {
          evt.preventDefault()
        }
    })
