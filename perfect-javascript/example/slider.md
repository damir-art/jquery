Простой слайдер без анимации  
Вам нужно ничего не меняя в верстке просто добавлять классы анимации  
Если слайды должны появляться сбоку то измените flex-direction: column на row у .slider__images  
По адресу img/simple-slider.png располагается скриншот слайдера без использования цикла.  
По адресу img/slider-foo.png располагается скриншот слайдера с функцией вперед назад (imgset не передайвайте, функция move итак её видит по замыканию на строке 29).

Также добавил подсчет количества изображений в слайдере и показ номера текущего слайда.

    <style>
    .slider {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }
    .slider__images {
      display: flex;
      flex-direction: column;
    }
    .slider__item {
      display: flex;
      max-width: 800px;
    }
    .slider__image {
      max-width: 100%;
      height: auto;
      display: none;
    }
    .slider__current {
      display: block;
    }
    .slider__buttons {
      display: flex;
      gap: 8px;
    }
    .slider__button {
      font-size: 18px;
      padding: 4px 16px;
    }
    .slider__counter {
      position: absolute;
      top: 0;
      left: 0;
      color: rgba(236, 240, 241, 1.0);
      background-color: rgba(155, 89, 182, .8);
      display: flex;
      gap: 16px;
      width: 100%;
      padding: 8px 16px;
      box-sizing: border-box;
      font-size: 22px;
      font-weight: 900;
    }
    </style>

    <div class="main">
      <div class="slider">
        <div class="slider__images">
          <div class="slider__item">
            <img class="slider__image slider__current" src="./img/bmw-1.jpg" alt="">
          </div>
          <div class="slider__item">
            <img class="slider__image" src="./img/bmw-2.jpg" alt="">
          </div>
          <div class="slider__item">
            <img class="slider__image" src="./img/bmw-3.jpg" alt="">
          </div>
          <div class="slider__item">
            <img class="slider__image" src="./img/bmw-4.jpg" alt="">
          </div>
          <div class="slider__item">
            <img class="slider__image" src="./img/bmw-5.jpg" alt="">
          </div>
        </div> <!-- slider__images -->

        <div class="slider__buttons">
          <button class="slider__button slider__button--prev" type="button">Назад</button>
          <button class="slider__button slider__button--next" type="button">Вперед</button>
        </div> <!-- slider__buttons -->

        <div class="slider__counter">
          <div class="slider__total">Всего слайдов: <span></span></div>
          <div class="slider__number">Номер: <span><span></div>
        </div> <!-- slider__counter -->
      </div> <!-- slider -->
    </div>

    <script>
    /*
      Простой слайдер без анимации
      Вам нужно ничего не меняя в верстке просто добавлять классы анимации
      Если слайды должны появляться сбоку то измените flex-direction: column на row у .slider__images
    */
    window.onload = function ( evt ) {
      let allImages = document.querySelectorAll( '.slider__image' );
      let prev = document.querySelector( '.slider__button--prev' );
      let next = document.querySelector( '.slider__button--next' );
      let sliderTotalSpan = document.querySelector( '.slider__total span' );
      let sliderNumberSpan = document.querySelector( '.slider__number span' );

      sliderTotalSpan.innerHTML = allImages.length;
      sliderNumberSpan.innerHTML = 1;

      let flag = 0;

      next.addEventListener( 'click', function () {
        flag++;
        for ( let i = 0; i < allImages.length; i++ ) {
          allImages[ i ].classList.remove( 'slider__current' );
        }
        if ( flag == allImages.length ) {
          flag = 0;
        };
        allImages[ flag ].classList.add( 'slider__current' );
        sliderNumberSpan.innerHTML = flag + 1;
      });

      prev.addEventListener( 'click', function () {
        flag--;
        for ( let i = 0; i < allImages.length; i++ ) {
          allImages[ i ].classList.remove( 'slider__current' );
        }
        if ( flag < 0 ) {
          flag = allImages.length - 1;
        };
        allImages[ flag ].classList.add( 'slider__current' );
        sliderNumberSpan.innerHTML = flag + 1;
      });
    }
    </script>

## autoloop
Автолуп и объяснение по  контексту в setInterval:

    setInterval(function () {  // анонимная функция запускается в контексте объекта window
      slider2.next(); // без анонимной функции, next() будет запускаться в контексте объекта window, а у него нет такого метода
    }, 1000);

    setInterval(slider2.next(), 1000) // без анонимной функции, у next не должно быть '()', потому что нужно передавать имя функции, а не результат её работы

    setInterval(slider2.next, 1000) // без скобок вызывается в контексте window, this ссылается на window

    // Чтобы slider2.next не ссылался на window,нужно в классе создать переменную let context (that, slider) = this; см. simple-slider-that-this.png, и там там вместо this задать that

    // у всех this разный
    prev()
    slider.prev()
    prev.call() // сами задаём this

    // в реале так
    window.prev()
    window.slider.prev()
    window.prev.call() // сами задаём this

В setInterval вместо slider.getNext(), можно вставить btnNext.onclick() (см. `next-onclick.png` никогда так не делайте, потому что это будет не трастед событие, событие которое запустил не пользователь) и он сам будет генерировать событие нажатия по кнопке.
