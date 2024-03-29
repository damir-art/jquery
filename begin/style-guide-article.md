# Style guide
Style guide при написании статей для уроков jQuery.

## Writing Style
Контент должен быть образовательным и доступным для широкой аудитории разработчиков. Основная целевая аудитория - это продолжающие (средний уровень) пользователи jQuery, а продвинутые пользователи jQuery - второстепенная аудитория.

При создании контента учитывайте одну из этих аудиторий, а также следующие рекомендации по стилю:

## Prose & Grammar
- Числа:
  - Пишите словами числа меньше 10 (например, один, два, три)
  - Используйте цифры для чисел от 10 и выше (например, 10, 20, 100).
- Сокращения:
  - Расшифруйте сокращенные слова при первой использовании, добавьте рядом аббревиатуру в круглых скобках.
  - Используйте сокращенные слова при втором использовании.

### Code Within Prose
- Всегда используйте тег кода для обозначения кода.
- Свойства: используйте точку, за которой следует имя свойства, например `.length`
- Функции: используйте имя функции, за которым следуют круглые скобки, например `foo()`
- Методы: используйте точку, за которой следует имя метода, а затем круглые скобки, например `.focus()`. Метод `.focus()` является ярлыком для `.bind('focus', handler)` в первом и втором вариантах и `.trigger('focus')` в третьем.

### Структура статьи и предложений
Используйте заголовки, чтобы разбить контент на более удобные для чтения разделы. Начинайте заголовки внутри статьи с `h2`.

Держите предложения короткими и по существу. Хорошее эмпирическое правило - разбивать любое предложение длиннее 21 слова на две или более отдельных мыслей.

Списки:
- Используйте маркированные списки, когда необходимо разделить серию из пяти или более пунктов.
- Используйте нумерованные списки только при предоставлении пошаговых инструкций - учтите, что этого следует избегать.
- Используйте точку в конце каждого элемента упорядоченного списка и точку или запятую в конце элемента ненумерованного списка.

### Spelling
Капитализация:
- Называйте все имена собственные с большой буквы.
- Не используйте заглавные буквы в элементах HTML в примерах кода.
- Начинайте с заглавной буквы все слова в заголовке или подзаголовке, за исключением прилагательных в артиклях и таких предлогов, как "с", "из" или "к".
- Делайте первое слово в списке заглавными.

Пунктуация:
- Точки и запятые заключаются в кавычки.
- Избегайте использования точек с запятой.

### Использование местоимений
Не используйте местоимения "я", "мне", "нас", "наш", "мы", "он", "она". Используйте местоимение второго лица "вы" когда обращаетесь к читателю.

### Voice & Tone
- Пишите четкими и понятными формулировками.
- Пишите в активном гласе.
- Помните об аудитории, когда пишете.
- Пишите разговорно.
- Пишите от второго лица, чтобы обратиться к читателю.
- Используйте повелительное наклонение.
- Используйте юмор стратегически. Если вы сомневаетесь, ошибитесь в сторону формальности.
- Используйте гиперссылки, чтобы отослать читателей к понятиям или темам, которые были рассмотрены в других разделах.
- Приписывайте другим.
- Не предполагайте, что читатель будет предварительно знаком с темами или концепциями, особенно при ориентации на начинающих или intermedia аудиторий.
- Не используйте риторические вопросы.
- Не пишите от первого или третьего лица.
- Используйте ссылки на документацию и API jQuery, официального сайта.

## Примеры кода
- Используйте примеры, чтобы проиллюстрировать важные понятия.
- Примеры должны указывать ожидаемый результат в комментариях до представления кода.
- Разбивайте длинные примеры на более короткие части, чтобы облегчить понимание.
- Отдайте предпочтение примерам "правильного пути", а не примерам "неправильного пути" - в конце концов, существует более одного неправильного способа что-то сделать.
- Используйте хорошие комментарии, чтобы объяснение в прозе не требовалось.
- Протестируйте свои примеры кода перед отправкой.
- Используйте руководство по стилю кода jQuery Core в качестве примеров кода.
