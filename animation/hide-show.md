# hide/show
Скрыть показать элементы. Анимация влияет на: `height`, `width`, `opacity`, `padding`, `margin`.

- hide()
- show()
- toggle()

Скрыть элемент:

    $('img').hide()
    $('img').hide(3000) // скрыть элемент за 3 сек

Показать элемент:

    $('img').show()

Переключатель:

    $('img').toggle('slow')

## Параметры
Параметры: `slow`, `fast`, `число` в миллисекундах.

## Колбэк
Колбэк-функция, сработает после анимации:

    const img = $('.img')

    let i = 0;
    $('.btn--toggle').on('click', function() {

        img.toggle('slow', function() {
            console.log('Анимация закончилась! ' + i++)
        })

    })
