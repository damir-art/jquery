# Создаём свою библиотеку jQuery
Раньше многие вещи приходилось делать сложнее чем при ES6, поэтому jQuery была популярна. ES6 облегчил работу с JavaScript, однако всё равно некоторые вещи всё равно приходится делать, например невозможность работать с группой элементов, перебор выбранных элементов в цикле, чтобы повесить на них событие.

Создадим свою бибилиотеку jQuery, которая избавит нас от рутины написания кода.

Разработка своей библиотеки типа jQuery начинается с создания класса, например `function Lib () { }`. Данный класс будет обёрткой для элементов.

Большинство таких библиотек завязаны на то, чтобы избавлять нас от написания циклов, в тех местах где их можно убрать. Основная проблема JS как раз в том что может воспринимать элемент, но не элементы. Бибилиотеки призваны изменить мышление программиста с одного элемента, на независимое количество элементов.

Главная идея в том, чтобы создавать множество методов с циклами (см. ниже), а затем использовать их в коде.

index.html

    <script src="js/lib.js"></script>
    <script>
      // Выбираем элементы через CSS селектор
      // Возвращается объект класса Lib, внутри которого хранятся выбранные элементы
      // У этого объекта есть различные свойства и методы которые могут применяться к этим элементам
      let selectP = g('p');

      console.log(g('p').html());
    </script>

## Создаём событие click

lib.js:

    // Бибилиотека Lib принимает элементы
    function Lib( elems ) {

      // this тут нужен для того, чтобы мы имели доступ к нативным элементам,
      // введите console.log( selectP ) из index.html, будет показан объект со свойством elems
      // без this, свойство elems станет приватным и тогда в консоли оно не будет показано
      this.elems = elems;
      
      // Пример создания события клик, по типу jQuery
      // foo анонимная функция колбэк
      this.click = function( foo ) {
        for( let i = 0; i < this.elems.length; i++ ) {
            this.elems[ i ].addEventListener( 'click', foo );
        }
      }
    }

custom.js:
Используем наше созданное событие клик в своём скрипте:

    // Выбираем элементы к на которые нужно повесить событие клик
    let p = document.querySelectorAll('p');

    // Создаём объект с нашими элементами
    let selectP = new Lib(p);
    // let selectP = $(p); // аналог в jQuery

    // Используем метод click на выбранные элементы
    // Анонимная функция колбэк передается как параметр (значение) и вставляется вместо foo
    selectP.click(function() {
      this.style.color = 'red';
    });

## Создаём любое событие

Используем любое событие на группе элементов в нашем скрипте:

    // lib.js
    // Используем любое событие, на группе элементов
    this.on = function( eventname, foo ) {
      for( let i = 0; i < this.elems.length; i++ ) {
        this.elems[ i ].addEventListener( eventname, foo );
      }
    }

    // custom.js
    selectP.on( 'click', function() {
      this.style.color = 'green';
    });

## Создаём сокращённую запись по типу `$`
Создаём сокращенную запись по типу `$`:

lib.js:

    // Теперь мы можем пользоваться нашей библиотекой через букву g
    // Передаём селектор, переменная по седектору получает NodeList
    // Создаём объект внутри которого находится NodeList и возвращаем его
    function g( sel ) {
      let elems = document.querySelectorAll( sel );
      return new Lib( elems );
    }

    // Бибилиотека Lib принимает элементы
    function Lib( elems ) ...

custom.js:

    // Выбираем элементы через CSS селектор
    // Возвращается объект класса Lib, внутри которого хранятся выбранные элементы
    // У этого объекта есть различные свойства и методы которые могут применяться к этим элементам
    let selectP = g('p');

    selectP.on( 'click', function() {
      this.style.color = 'blue';
    });

    console.log( selectP ); // Объект

## Добавляем CSS класс сразу нескольким элементам

lib.js:

    // Добавляем CSS-класс элементам
    this.addClass = function( name ) {
      for( let i = 0; i < this.elems.length; i++ ) {
        this.elems[ i ].classList.add( name );
      }
      // return this;
    }

common.js:

    g('p').addClass( 'fs' );
    g('p').addClass( 'fs-2' );

## Удаляем CSS класс

lib.js:

    // Удаляем CSS-класс у элементов
    this.removeClass = function( name ) {
      for( let i = 0; i < this.elems.length; i++ ) {
        this.elems[ i ].classList.removeClass( name );
      }
      // return this;
    }

common.js:

    g('p').removeClass( 'fs' );

## Добавляем содержание элементам

lib.js:

    // Добавим содержание внутрь элемента
    this.html = function( html ) {
      // Если ничего не передавать, то метод вернет содержание первого элемента
      // if( typeof( html ) === "undefined") {
      //   return this.elems[ 0 ].innerHTML;
      // }
      for( let i = 0; i < this.elems.length; i++ ) {
        this.elems[ i ].innerHTML = html;
      }
      // return this;
    }

common.js:

    g('p').html( '<b>Hello!</b>' );

## Цепочки вызовов в библиотеке через `return this`
На данный момент наши методы библиотеки Lib.js ничего не возвращают, а именно `undefined`.

    // Вставляем после цикла, чтобы создавать цепочки вызовов
    // this после return это объект "jQuery", экзепляр класса Lib, selectP
    // Возвращается изменённый экземпляр
    return this;

return this; - объект отправился в класс, методом произвёл над собой действия и вернулся изменённым.

И теперь вместо например добавлений нескольких классов через 3 строки кода:

    g('p').addClass( 'fs' );
    g('p').addClass( 'fs-2' );
    g('p').addClass( 'fs-3' );

Можно выполнить одну:

    g('p').addClass( 'fs' ).addClass( 'fs-2' ).addClass( 'fs-3' );

События:

    selectP.on( 'click', function() {
      this.style.color = 'blue';
    }).on( 'mouseover', function() {
      this.style.color = 'red';
    }).on( 'mouseout', function() {
      this.style.color = 'green';
    });

И ввобще любые методы можно ставить друг за другом, если они возвращают объект.

    g('p')
      .addClass( 'fs' )
      .on( 'mouseover', function() {
        this.style.color = 'red';
      })
      .html('Hello!');

## Метод работает по разному
Метод работает по разному, в зависимости от переданных в него параметров:

    // Добавим содержание внутрь элемента
    this.html = function( html ) {
      // Если ничего не передавать, то метод вернет содержание первого элемента
      if( typeof( html ) === "undefined") {
        return this.elems[ 0 ].innerHTML;
      }
      for( let i = 0; i < this.elems.length; i++ ) {
        this.elems[ i ].innerHTML = html;
      }
      return this;
    }
