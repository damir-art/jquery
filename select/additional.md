# Дополнительно о селекторах jQuery
https://damir-art.ru/jquery/dopolnitelno-o-selektorah-jquery/  
Дополнительные сведения о селекторах в jQuery.

Здравствуйте, этот урок последний в модуле посвящённом селекторам, здесь мы закрепим пройденный материал и рассмотрим дополнительные сведения о селекторах jQuery.

Вы уже знаете что селектор - это выборка элементов на странице. Селекторы в jQuery бывают нескольких видов базовыми, иерархическими, атрибутными и в основном повторяют селекторы используемые в языке CSS. Поэтому вы также можете при выборке элементов использовать `:псевдоклассы` и `::псевдоэлементы`.

Помимо этих селекторов, библиотека jQuery предоставляет возможность выборки элементов форм, например используя такие селекторы как `:button` или `:password` которые выберут все элементы кнопок или текстового поля пароля, соответсвенно. Так как тема форм довольно сложна и обширна мы рассмотрим их в отдельном модуле посвященном формам.

Чтобы выбрать элемент(ы), нужно записать какой-нибудь CSS-селектор в скобки, например выберем все ссылки на странице:

    $("a");

Почему данная выборка удобнее, чем если бы мы воспользовались стандартными средствами JavaScript? 

    document.querySelectorAll("a");

Потому что выбрав элементы с помощью jQuery, мы сразу можем проводить с ними различные манипуляции, это происходит благодаря API jQuery, например мы сразу же можем перекрасить все ссылки в зелёный цвет.

    $("a").css("color", "green");

Чтобы сделать нечто подобное в языке JavaScript, нам нужно будет сначала пройтись по всем выбранным ссылкам с помощью какого-нибудь цикла, например цикла `forEach`:

    let jsA = document.querySelectorAll("a");
    jsA.forEach(function(a) {
      a.style.color = 'green';
    });

Почему в jQuery, для манипуляции на выбраннымии элементами, не нужно прогонять их по циклу? Для начала сравним, что нам выдаёт консоль при выборке элементов средствами jQuery или нативным JavaScript.

При выборке элементов с помощью jQuery, он оборачивает элементы в jQuery объект, а у этого объекта есть различное множество методов и свойств, которые мы можем применить к нашей выборке, или же в нашем случае к ссылкам.

JavaScript же обращается к `NodeListPrototype` и у него нет тех методов и свойств которые есть у jQuery, поэтому нам нужно сначала пройтись циклом по каждому выбранному элементу и назначить им определенные свойства и методы которе есть в самом JavaScript.

Это было небольшое дополнение по выборкам в jQuery, закрепляющее сведениями по селекторам в jQuery. На этом модуль посвященный селекторам jQuery окончен. В следующем уроке мы начнем изучать фильтры jQuery.

Прочитать урок в текстовом формате, а также скачать код и файлы проекта можно на степике. Ссылка в описании.

## Разное
- `$(selector).length` - получаем количество элементов,
- `$(selector)[0]` - обращаемся к элементу по его индексу,
- `$(selector).get(0)` - обращаемся к элементу по его индексу (аналог `[0]`),
- В выборке можно использовать `:псевдоклассы` и `::псевдоэлементы` из CSS,
- Также в выборке jQuery можно использовать селекторы форм из jQuery (рассмотрим их при изучении форм).
