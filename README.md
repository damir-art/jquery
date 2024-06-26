# jQuery
Руководство по jQuery.  
Сайт руководства jQuery: https://damir-art.ru/jquery/

jQuery - это JavaScript библиотека упрощающая работу с DOM-элементами HTML-страницы, событиями, анимацией, AJAX и т.п. Девиз jQuery - `пиши меньше, делай больше`.

jQuery - это "подпорка" для пользовательского интерфейса UI.

## Структура репозитория
- 00-course - видеокурс
- 02-learn-of - перевод руководства
- 03-api-of - перевод API
- Остальные папки: общее руководство по jQuery.

Прежде чем приступить созданию урока по какой либо теме, сначала читаем https://learn.jquery.com по данной теме, затем https://api.jquery.com

## Оглавление
- Intro
  - О курсе
  - О jQuery
- Начало (begin):
  - Style guide по написанию уроков
  - Style guide по синтаксису JavaScript при использовании jQuery
  - Установка и инициализация (install)
- Select - выборка элементов
- CSS - работа со стилями
- DOM - управление элементами их атрибутами и значениями
- Event - работа с событиями
- Form - работа с формами
- AJAX - работа с AJAX и JSON
- Plugin - работа с плагинами
- Perfomance - оптимизация кода
- Organization - организация кода

## Документация
- Ядро (core)
  - $ vs $()
  - $( document ).ready()
  - Avoiding Conflicts with Other Libraries
  - Attributes
  - Selecting Elements
  - Working with Selections
  - Manipulating Elements
  - The jQuery Object
  - Traversing
  - CSS, Styling, & Dimensions
  - Data Methods
  - Utility Methods
  - Iterating over jQuery and non-jQuery Objects
  - Using jQuery’s .index() Function
  - Frequently Asked Questions (FAQ)

## JavaScript
Если используете jQuery, внутри кода JavaScript, знайте что:
- методы jQuery применяются сразу ко всем элементам выборки,
- переменные относящиеся к jQuery лучше начинать с `$`,
- `length` массива хранит не количество элементов, а индекс последнего элемента + 1,
- объекты в JavaScript могут иметь одну их двух ролей: хранилище данных, функционал объекта,
- функция конструктор `new`, возвращает объект.

## Зачем нужен jQuery
- поддержка проектов на CMS,
- быстрое создание компонентов,
- множество решений для создания компонентов,
- быстрая разработка и поддержка,
- стабильная работа,
- множество готовых решений для текущих задач.

## Основные моменты благодаря которым jQuery завоевал популярность
- кроссбраузерность,
- выборка элементов страницы,
- упрощенная работа с AJAX,
- более короткий и чистый код по сравнению с нативным JavaScript,
- упрощенное создание плагинов: слайдеров, модальных окон, табов, аккордионов, валидации форм и т.д.

## Рассмотреть после AJAX
`$.each()`, `$.extend()`.
