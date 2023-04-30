# Очередь
Очередь анимации.

Запускаем анимации поочерёдно, длительность анимации 1 сек:

    img
        .animate({
            'opacity': 0.5
        }, {
            'duration': 1000
        })
        .animate({
            'height': '200px'
        }, {
            'duration': 1000
        })

Игнорируем очередь:

    img
        .animate({
            'opacity': 0.5
        }, {
            'duration': 1000
        })
        .animate({
            'height': '200px'
        }, {
            'duration': 1000,
            'queue': false
        })

stop() - остановить текущую очередь анимации.
