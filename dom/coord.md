# Координаты

offset() покажет top и left элемента, относительно document:

    console.log($('p').offset())

Устанавливаем координаты:

    $('p').offset({ top: 100, left: 300 })

position() позиция элемента относительно родительского элемента:

    console.log($('p').position())
