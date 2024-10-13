# Слайдер с настройками
Плагин слайдера с настройками, в ООП стиле, ES5 без стрелочных функций.

CSS: такие же как и в `slider.md`

HTML: такой же как и в `slider.md`

JavaScript:

    window.onload = function ( evt ) {

      function Slider ( settings ) {
        // Обычные свойства объекта
        this.images   = document.querySelectorAll( `${settings.images} .slider__image` );
        this.autoloop = settings.autoloop;
        this.rate     = settings.rate || 1000; // Если скорость автолупа не задана, то по-умолчанию будет 1000

        // Приватные свойства объекта
        let slider = this; // добавляем там, где теряется контекст объекта: события, setInterval и т.п.
        let next   = document.querySelector( `${settings.images} .slider__button--next` );
        let prev   = document.querySelector( `${settings.images} .slider__button--prev` );
        let flag   = 0;

        // console.log( this ); // тут контекст объекта

        // Методы
        this.getNext = function () {
          flag++;

          for ( let i = 0; i < this.images.length; i++ ) {
            this.images[ i ].classList.remove( 'slider__current' );
          }
          if ( flag == this.images.length ) {
            flag = 0;
          };
          this.images[ flag ].classList.add( 'slider__current' );
        }

        this.getPrev = function () {
          flag--;

          for ( let i = 0; i < this.images.length; i++ ) {
            this.images[ i ].classList.remove( 'slider__current' );
          }
          if ( flag < 0 ) {
            flag = this.images.length - 1;
          };
          this.images[ flag ].classList.add( 'slider__current' );
        }

        next.addEventListener( 'click', function () {
          // console.log( this ); // тут теряется контекст слайдера и появляется у кнопки,
          // у кнопки нет метода getNext
          slider.getNext();
        });

        prev.addEventListener( 'click', function () {
          slider.getPrev();
        });

        // Можно сделать так, но тогда внутри метода getPrev придется this заменить на slider
        // иначе контекстом будет выступать кнопка у которой нет свойства images
        // prev.addEventListener( 'click', slider.getPrev);

        if( this.autoloop ) {
          setInterval( function() {
            slider.getNext();
          }, this.rate );
        }
      }

      // Создаём слайдер и передаём в него объект настроек
      // Первый слайдер на странице
      const slider1 = new Slider({
        images: '.slider-1',
        autoloop: false,
      });

      // Второй слайдер на странице
      // Можно не присваивать в переменную
      new Slider({
        images: '.slider-2',
        autoloop: true,
      });

      // Далее чтобы сделать слайдер более универсальным, можно передавать CSS-идентификатор
      // а в самом классе искать элементы не через CSS, а через методы перемещения по DOM
      // Нужно ли добавлять анимацию?
      // Анимацию лучше добавлять отдельным плагином и настраивать её для слайдера через настройки,
      // или CSS классы в вёрстке

    }
