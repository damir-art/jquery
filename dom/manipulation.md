# Манипуляции
Манипуляции над элементом: https://api.jquery.com/category/manipulation/

- text() - возвращает текст внутри элемента
- text(text) - изменяет текст внутри элемента

- html() - возвращает HTML заданного элемента
- html(html) - заменяет HTML в заданном элементе

- unwrap() - удаляет родительский элемент
- clone() - клонирует элементы и их события
- detach() - удаляет элемент (для временного удаления)
- empty() - удаляет текст и дочерние DOM-элементы
- remove() - навсегда удаляет элемент из DOM

## text()

    const li = $('li:first')
    li.text()        // возвращает текст внутри элемента
    li.text('hello') // изменяет текст внутри элемента

## html()

    const li = $('li:first')
    li.html()                 // получаем содержимое элемента
    li.html('hello <b>1</b>') // изменяем содержимое элемента

## wrap()
Каждый элемент оборачиваем параграфом:

    $('li').wrap('p')

## wrapAll()
Все элементы сразу оборачиваем параграфом:

    $('li').wrapAll('p')
    wrapInner()

## after()
after() вставить контент/элемент после каждого элемента выборки:

    $('li').after('hello')
           .after('<b>hello</b>')

Берем заголовок страницы и помещаем его после каждого параграфа:

    $('p').after($('h1'))

## insertAfter()
insertAfter() вставить элемент после каждого элемента

    $('<hr />').insertAfter('li')

## before()
before(content) - вставляет контент перед элементом

    before('<b>hello</b>')

## insertBefore(element)
insertBefore(element) - вставляет элемент, перед элементом

## append()
Вставить контент/элемент, перед закрывающим тегом:

    $("li").append("<hr />")

## appendTo()
Вставить элемент, перед закрывающим тегом:

    $('<hr />').appendTo('li')

## prepend(), prependTo()
Вставляет контент/элемент перед открывающим тегом:

    prepend(content)
    prependTo(element)

## replaceWith(), replaceAll()
Заменить элемент контентом:

    $('li').replaceWith('hello')
    $('li').replaceAll('p')

## clone()
clone() - клонируем элементы и их события.

    const menu = $('.menu').clone()
    $('.footer').after(menu) // вставляем склонированный элемент

## remove()
remove() - навсегда удаляем элемент из DOM.

    $('.menu').remove()
    const menu = $('.menu').remove() // перед удалением элемент может быть записан в переменную
