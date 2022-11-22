# Выбор элементов DOM
Рассмотрим различные селекторы в jQuery.

## Выбираем элемент
Чтобы выбрать элемент(ы), нужно записать CSS-селектор в скобки:

    $('a')

## Что получаем при выборке

    <ul>
      <li>элемент 1</li>
      <li>элемент 2</li>
      <li>элемент 3</li>
    </ul>

    const ul = $('ul')
    const li = $('li')
    console.log(ul) // Object (с одним элементом)
    console.log(li) // Object (с тремя элементами)

**Object** - это `объект jQuery`, который может рабоать с API jQuery.

    jQuery(document).ready(function($) {
      let li = $('li');
      let liJS = document.querySelectorAll('li');
      console.log(li);   // <prototype>: Object { jquery:
      console.log(liJS); // <prototype>: NodeListPrototype
    });

## Разное
- `$(selector).length` - получаем количество элементов
- `$(selector)[0]` - обращаемся к элементу по его индексу
- `$(selector).get(0)` - обращаемся к элементу по его индексу (аналог `[0]`)
