# slide
Анимация влияет на: `height`.

- slideUp()
- slideDown()
- slideToggle()

Пример:

    const img = $('.img')

    $('.btn--hide').on('click', function() {
        img.slideUp('slow')
    })

    $('.btn--show').on('click', function() {
        img.slideDown('slow')
    })

    let i = 0;
    $('.btn--toggle').on('click', function() {
        img.slideToggle('slow', function() {
            console.log('Анимация закончилась! ' + i++)
        })
    })
