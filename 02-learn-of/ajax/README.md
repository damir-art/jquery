# AJAX
- Key Concepts (ключевые идеи)
- jQuery's Ajax-Related Methods (методы jQuery, связанные с Ajax)
- Ajax and Forms (Ajax и формы)
- Working with JSONP (работа с JSONP)
- Ajax Events (события AJAX)

Традиционно веб-страницы требовали перезагрузки для обновления их содержимого. Для веб-электронной почты это означало, что пользователям приходилось вручную перезагружать свой почтовый ящик, чтобы проверить, есть ли у них новая почта. Это имело огромные недостатки: оно было медленным и требовало участия пользователя.

Когда пользователь перезагружал свой почтовый ящик, серверу приходилось реконструировать всю веб-страницу и повторно отправлять все HTML, CSS, JavaScript, а также электронную почту пользователя. Это было крайне неэффективно. В идеале сервер должен отправлять только новые сообщения пользователя, а не всю страницу. К 2003 году все основные браузеры решили эту проблему, внедрив объект **XMLHttpRequest** *(XHR)*, позволяющий браузерам взаимодействовать с сервером без перезагрузки страницы.

Объект XMLHttpRequest является частью технологии под названием Ajax (асинхронный JavaScript и XML). Затем с помощью Ajax данные можно было передавать между браузером и сервером с помощью **API XMLHttpRequest** без перезагрузки веб-страницы. С широким распространением объекта XMLHttpRequest стало возможным быстро создавать веб-приложения, такие как Google Maps и Gmail, которые использовали XMLHttpRequest для получения новых фрагментов карты или новой электронной почты без перезагрузки всей страницы.

Запросы Ajax запускаются кодом JavaScript; ваш код отправляет запрос на URL-адрес, и когда он получает ответ, может быть запущена функция обратного вызова для обработки ответа. Поскольку запрос является асинхронным, остальная часть вашего кода продолжает выполняться во время обработки запроса, поэтому обязательно, чтобы для обработки ответа использовался обратный вызов.

К сожалению, разные браузеры по-разному реализуют Ajax API. Обычно это означало, что разработчикам приходилось учитывать все различные браузеры, чтобы обеспечить универсальную работу Ajax. К счастью, jQuery обеспечивает поддержку Ajax, которая абстрагирует болезненные различия между браузерами. Он предлагает как полнофункциональный метод `$.ajax()`, так и простые удобные методы, такие как `$.get()`, `$.getScript()`, `$.getJSON()`, `$.post()` и `$().load()`.

Большинство приложений jQuery на самом деле не используют XML, несмотря на название "Ajax"; вместо этого они передают данные в виде простого `HTML` или `JSON` *(нотация объектов JavaScript)*.

В общем, Ajax не работает между доменами. Например, веб-страница, загруженная с сайта `site.com`, не может выполнить Ajax-запрос к сайту `site2.com`, так как это нарушит ту же политику происхождения. В качестве обходного пути **JSONP** *(JSON с заполнением)* использует теги `script` для загрузки файлов, содержащих произвольный контент JavaScript и JSON, из другого домена. Совсем недавно в браузерах была реализована технология под названием Cross-Origin Resource Sharing (CORS), которая позволяет отправлять Ajax-запросы к разным доменам.
