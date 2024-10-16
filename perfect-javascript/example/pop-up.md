# Модальное окно
Класс модального окна, выводит попапы с разным содержимым.

    function Popup( ) {

      /*
      * при создании объекта от класса (инициализация)
      * нужно перед закрывающим тегом body, добавить дивы для попапа и оверлэя
      */

      // Открывает попап
      // Принимает контент который нужно поместить в попап
      this.open = function( content ) {
      }

      // При клике на оверлэй, закрывает попап
      this.close = function() {
      }

    }

    let p = new Popup();
    p.open( '1' );
    p.open( '<p>1</p>' );

Овердэй лежит поверх всего экрана, попап лежит поверх оверлэя, при попапе скролинг отключается.  
При создании объекта создаются дивы попап и оверлэй у которых дисплай ноне.  
При вызове метода open, дисплай у дивов становится блок.  
При вызове метода close, дисплай у дивов снова становится ноне.

## Готовый пример
Можно было создать элементы внутри класса через креате элемент или body.insertAdjacentHTML('beforeEnd', 'теги').

Элементы попапа и оверлэя уже размещены в конце тега боди.

HTML:

    <div class="modal"></div>
    <div class="overlay"></div>
    <input type="button" class="callme" value="Позвоните">
    <input type="button" class="write" value="Написать">
    <div class="for-callme-popup">
      <form class="callme-popup">
        Имя: <br><input type="text"><br>
        Имя: <br><input type="text"><br>
        Имя: <br><input type="text"><br>
        Имя: <br><input type="text"><br>
        <input type="button" value="Отправить">
      </form>
    </div>

CSS:

    .modal{
      position: fixed;
      width: 60vw;
      height: 60vh;
      margin: 20vh 0 0 20vw;
      background: #fff;
      display: none;
      z-index: 1001;
      box-sizing: border-box;
      padding: 20px;
    }

    .overlay{
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      z-index: 1000;
      cursor: pointer;
    }

    .open{
      display: block;
    }

    .callme-popup input[type=text]{
      padding: 20px;
      color: red;
    }

    /*
      Скрываем обёртку формы
      Саму форму выдёргиваем в коде JS через innerHTML и вставляем в модалку
    */
    .for-callme-popup{
      display: none;
    }

JS:

    function Popup( options ) {
      // У нас есть два дива, которые по-умолчанию скрыты
      // Как только они полуают метод опен они открыты
      this.modal = document.querySelector(options.modal);     // див модального окна
      this.overlay = document.querySelector(options.overlay); // див оверлэя

      var popup = this; // сохраняем контекст

      this.open = function(content) {
        popup.modal.innerHTML = content; // добавляем содержимое в модальное окно
        popup.overlay.classList.add('open'); // тут вместо open можно передать options.open, чтобы не привязываться к одному классу
        popup.modal.classList.add('open');
      }

      this.close = function(){
        popup.overlay.classList.remove('open');
        popup.modal.classList.remove('open');
      }

      this.overlay.onclick = popup.close; // закрываем модалку при клике по оверлэю
    }

    // Если только один попап на сайте с разным содержимым, то настрйоки можно не передавать
    // Если у попапов помимо содержимого меняется еще и дизайн, то можно передавать разные классы, для разных попапов
    window.onload = function(){
      var p = new Popup({
        modal: '.modal',
        overlay: '.overlay'
      });

      // Вне настроек класса передаем содержимое для модального окна,
      // Содержимое передаётся методу опен

      // Попап открывается по клику на элемент с классом write
      document.querySelector('.write').onclick = function(){
        p.open('форма отправки сообщения');
      };

      // Попап открывается по клику на элемент с классом callme
      document.querySelector('.callme').onclick = function(){
        var form = document.querySelector('.for-callme-popup'); // получаем доступ к обертки формы
        p.open(form.innerHTML); // передаём форму в метод
      };
    }

Также можно сделать так чтобы модалка открывалась через сет таймаут, например через 3 секунды после открытия страницы. Если модалка так уже открывалась делай флаг и сохраняй его в куках или локал стораге, на некоторе время, например 24 часа.

Через дата атрибут можно подвесить событие клика и дать каждому элементу кто запускает модалки. Вместо class="callme", class="write" у кнопок, задаём кнопкам дата атрибуты, равная например ссылке на открываемый элемент:

    <input type="button" data-popup=".selector" value="Позвоните">

Где .selector равен селектору обертки содержимого, например .for-callme-popup, после чего получаем содержимое этого селектора через иннер ХТМЛ.
