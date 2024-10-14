// Теперь мы можем пользоваться нашей библиотекой через букву g
// Передаём селектор, переменная по седектору получает NodeList
// Создаём объект внутри которого находится NodeList и возвращаем его
function g( sel ) {
  let elems = document.querySelectorAll( sel );
  return new Lib( elems );
}

// Бибилиотека Lib принимает элементы
function Lib( elems ) {

  // this тут нужен для того, чтобы мы имели доступ к нативным элементам,
  // введите console.log( selectP ) из index.html, будет показан объект со свойством elems
  // без this, свойство elems станет приватным и тогда в консоли оно не будет показано
  this.elems = elems;

  // Пример создания события клик, по типу jQuery
  // foo анонимная функция колбэк
  // this.click = function( foo ) {
  //   for( let i = 0; i < this.elems.length; i++ ) {
  //     this.elems[ i ].addEventListener( 'click', foo );
  //   }
  // }

  // Используем любое событие, на группе элементов
  this.on = function( eventname, foo ) {
    for( let i = 0; i < this.elems.length; i++ ) {
      this.elems[ i ].addEventListener( eventname, foo );
    }
    // Вставляем после цикла, чтобы создавать цепочки вызовов
    // this после return это объект "jQuery", экзепляр класса Lib
    // Возвращается изменённый экземпляр
    return this;
  }

  // Добавляем CSS-класс элементам
  this.addClass = function( name ) {
    for( let i = 0; i < this.elems.length; i++ ) {
      this.elems[ i ].classList.add( name );
    }
    return this;
  }

  // Удаляем CSS-класс у элементов
  this.removeClass = function( name ) {
    for( let i = 0; i < this.elems.length; i++ ) {
      this.elems[ i ].classList.removeClass( name );
    }
    return this;
  }

  // Добавим содержание внутрь элемента
  this.html = function( html ) {
    // if( typeof( html ) === "undefined") {
    //   return this.elems[ 0 ].innerHTML;
    // }
    for( var i = 0; i < this.elems.length; i++ ) {
      this.elems[ i ].innerHTML = html;
    }
    return this;
  }
}
