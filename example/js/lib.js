// Теперь мы можем пользоваться нашей библиотекой через букву g
// Передаём селектор, переменная по седектору получает NodeList
// Создаём объект внутри которого находится NodeList и возвращаем его
// function g( sel ) {
//   let elems = document.querySelectorAll( sel );
//   return new Lib( elems );
// }

// Улучшаем верхний код, чтобы мы при клике могли обращаться к текущему элементу через $( this )
// В верхнем коде он не работает потому что this не может быть селектором (строкой)
// this - это html элемент, например в обработчике события клик, this равен DOM элементу, этот элемент надо засунуть в массив и отправить в класс new Lib( elems ), также массив получается от querySelectorAll( sel ), этот массив тоже отправляется в класс new Lib( elems )
// instanceof - я вляется ли sel экземпляром HTMLElement
function g( sel ) {
  let elems;
  if ( sel instanceof HTMLElement ) {
    elems = [ sel ]; // Помещаем this в массив, который отправляется в new Lib( elems )
  } else {
    elems = document.querySelectorAll( sel ); // Если это не this, а строка селекторов, то срабатывает этот блок
  }
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
    // Если ничего не передавать, то метод вернет содержание первого элемента
    if( typeof( html ) === "undefined") {
      return this.elems[ 0 ].innerHTML;
    }
    for( let i = 0; i < this.elems.length; i++ ) {
      this.elems[ i ].innerHTML = html;
    }
    return this;
  }

  // Скрытие элементов через анимацию fade
  this.fade = function( time, callback ) {
    let foo = callback || function() {};
    for( let i = 0; i < this.elems.length; i++ ) {
      techFade( this.elems[ i ], time, 50, foo );
    }
  }

  // https://dmitrylavrik.ru/blog/javascript/basics/prostaya-animaciya-na-javascript
  // techFade знает время окончания анимации,
  function techFade( elem, t, f, callback ) {
    // кадров в секунду (по умолчанию 50)
    var fps = f || 50; 
    // время работы анимации (по умолчанию 500мс)
    var time = t || 500; 
    // сколько всего покажем кадров
    var steps = time / (1000 / fps);
    // текущее значение opacity - изначально 0
    var op = 1;
    // изменение прозрачности за 1 кадр
    var d0 = op / steps;
    
    // устанавливаем интервал (1000 / fps) 
    // например, 50fps -> 1000 / 50 = 20мс  
    var timer = setInterval(function(){
      // уменьшаем текущее значение opacity
      op -= d0;
      // устанавливаем opacity элементу DOM
      elem.style.opacity = op;
      // уменьшаем количество оставшихся шагов анимации
      steps--;
      
      // если анимация окончена
      if(steps <= 0){
        // убираем интервал выполнения
        clearInterval(timer);
        // и убираем элемент из потока документа
        elem.style.display = 'none';

        // Анимация завершена, вызываем колбэк в контексте элемента
        // Это позволит нам работать с элементом в колбеке см стр 130
        callback.call( elem );
      }
    }, (1000 / fps));
  }
}

/**
 * index.html
 * $( sel ).on( 'click', function() {
 *  // that = this; // это делаем если в библиотеке у колбэка нет .call( elem )
 *  $( this ).fade( 1000, function() {
 *    console.log( 'Анимация заверщилась' );
 *    console.log( this );
 *    $( this )...;
 *    this.style.opacity = 1;
 *    this.style.display = 'block';
 *  });
 * });
 */

/*
При работе с анимациями, цепочки в нашей библиотеке g( this ).fade( 300 ).show( 300 ).fade( 300 );
работать не будут, воспользуйтесь колбэками:

g( this ).fade( 300, function() {
  g( this ).show( 300, function() {
    g( this ).fade( 300 );
  });
});

Цепочка анимаций в джейкуери выглядит следующим образом:
- хранит очередь анимаций внутри джейкуери обертки
- создать отдельный класс для очереди анимаций
- и писать несколько циклов уже там
*/
