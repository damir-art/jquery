# CSS
Обычно работают с classList, а не style.

## style
По клику задаём элементам фон, по повторному клику фон убираем:

    let items = document.querySelectorAll( '.items .item' );

    for ( let i = 0; i < items.length; i++) {
      items[i].addEventListener( 'click', function () {
        console.log( this.style.backgroundColor );
        if ( this.style.backgroundColor == 'rgb(238, 238, 238)') {
          this.style.backgroundColor = 'transparent';
        } else {
          this.style.backgroundColor = 'rgb(238, 238, 238)';
        }
      });
    }

Код сверху не рекомендуется, потому что нужно разделять код JavaScript и CSS.

## classList
Тоже самое но уже с `classList`:

    for ( let i = 0; i < items.length; i++) {
      items[i].addEventListener( 'click', function () {
        if ( this.classList.contains('active') ) {
          this.classList.remove('active');
        } else {
          this.classList.add('active');
        }
      });
    }

С помощью тогла скрипт можно сократить:

    for ( let i = 0; i < items.length; i++) {
      items[i].addEventListener( 'click', function () {
        this.classList.toggle( 'active' );
      });
    }
