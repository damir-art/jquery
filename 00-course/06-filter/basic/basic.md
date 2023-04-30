# Базовые фильтры
https://damir-art.ru  

Базовые фильтры в jQuery

Раздел по базовым фильтрам состоит из следующих уроков:
- Базовые фильтры
- :first, :last, :even, :odd
- :eq(), :gt(), :lt()
- :root, :lang(), :header
- :animated, :focus, :not(), :target

Здравствуйте, в этом уроке вы узнаете:
- Какие базовые фильтры существуют в jQuery?
- Какие фильтры считаются устаревшими?
- Что такое jQuery extensions?

`Изображение` заголовка
# Какие базовые фильтры существуют в jQuery
`Изображение` 14 видов
Всего по официальной документации, в jQuery существует 30 фильтров, из них 14 базовых:

    :animated, :eq(),  :even,   :first,
    :focus,    :gt(),  :header, :lang(),
    :last,     :lt(),  :not(),  :odd,
    :root,     :target

Так как базовых фильтров довольно много, и они разнообразны, то я их для удобства разделил на несколько подвидов:

`Изображение` подвидов видов (читать только описания)
- `:first, :last, :even, :odd` - фильтрация по первому, последнему, четному и нечетному элементам
- `:eq(), :gt(), :lt()` - фильтрация по индексам элементов из выборки
- `:root, :header, :focus, :lang(), :target` - фильрация по HTML-документу
- `:not(), :animated` - разные фильтры не попавшие в подвиды

Каждый из этих подвидов будет рассмотрен в отдельных уроках с примерами.

`Изображение` заголовка
## Устаревшие фильтры
`Изображение` устаревших фильтров
Среди 14 базовых фильтров есть "устаревшие", которые не рекомендуется использовать при создании нового кода на jQuery. Вместо них нужно использовать методы траверсы про которые будет рассказано в другом модуле. Устаревшие фильтры есть только в базовых фильтрах.

Устаревшие фильтры нужно изучить потому что они встречаются в большинстве скриптов написанных на jQuery. Ведь устарели они относительно недавно, всего лишь в версии jQuery 3.4. А сейчас мы используем версию jQuery 3.6.

Вот эти "устаревшие" фильтры:

    :eq(), :even, :first,
    :gt(), :last, :lt(),
    :odd

`Изображение` заголовка
## Что такое jQuery extensions
В фильтрах jQuery, eсть еще такое понятие как **jQuery Extensions** (расширения jQuery, которые не являются частью языка CSS), эти фильтры рекомендуется использовать совместно с методом `filter()`, для оптимизации производительности кода. Так как *jQuery extensions* существуют не только в базовых фильтрах но и других, эти расширения будут расмотрены в конце модуля посвященном фильтрам.

`Изображение` кода

    $("li").filter(":first").css("color", "green");

Прочитать урок в текстовом формате, а также скачать код и файлы проекта можно на степике. Ссылка в описании. Если что-то не понятно, отпишите в комментарии, в будущих уроках я рассмотрю эти моменты подробнее.