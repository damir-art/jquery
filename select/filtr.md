# Filtr select
Выборка с помощью фильтров. Фильтры - это селекторы, которые встроены в библиотеку jQuery.

- `li:hidden` - выбрать скрытый элемент
- `li:visibility` - выбрать видимый элемент
- `li:first` - выбираем первый элемент
- `li:last` - выбираем последний элемент
- `ul li:even` - выбираем четные элементы (массив начинается с 0, поэтому будут выбраны нечетные)
- `ul li:odd` - выбираем нечетные элементы
- `selector:not(selector)` - выбираем селектор, кроме
- `li:has(a)` - выбираем все элементы li внутри которых есть тег a
- `li:contains(text)` - выбираем элемент по его внутреннему тексту, можно указать одно слово, даже если ищешь абзац

## Фильтр селекторы

### Базовые
- `$('p:first-child')` - выбор первого элемента `p` в родительском контейнере
- `$('p:first-of-type')` - выбор первого элемента `p` во всем документе
- `$('p:last-child')` - выбор последнего элемента `p` в родительском контейнере
- `$('p:last-of-type')` - выбор последнего элемента `p` во всем документе
- `$('p:nth-child(3)')` - выбор 3 элемента в списке `p` элементов
- `$('div:nth-last-child(2)')` - выбор второго `div` элемента с конца списка
- `$('div:nth-of-type(3)')` - выбор всех элементов `div`, которые третьи в родителе
- `$('span:only-child')` - выбор всех элементов `span`, которые только в родительском элементе
- `$('ul li:eq(2)')` - выбор 3-го элемента `li`, в `ul` (отсчет идет с 0)
- `$('ul li:gt(3)')` - список элементов `li`, в которых индекс больше 3
- `$('ul li:lt(3)')` - список элементов `li`, в которых индекс меньше 3
- `$('input:not(:empty)')` - выбор всех элементов `input`, которые не пустые
  - `$('p:not(.text)')` - выбор всех элементов `p`, у которых отсутствует класс `.text`
- `$(':contains("Hello")')` - выбор всех элементов, что содержат текст `Hello`
- `$('div:has(p)')` - выбор всех элементов `div`, которые содержат `p`
- `$(':empty')` - выбор всех пустых элементов