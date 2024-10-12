# Цикл
Разница между объектом и массивом, массив это нумерованный список, оъект это ассоциативный массив с ключами строками. У объектов нет свойства length.

- массив перебираем через `for`
- объект перебираем через `for in`

## Массив, for 
for - работает с целочисленными ключами. Перебор элементов (псевдомассива) циклом `for`:

    <div class="actions">
      <input class="button" type="button" name="save" value="Сохранить">
      <input class="button" type="button" name="delete" value="Удалить">
    </div>

    window.onload = function ( evt ) {
      let buttons = document.querySelectorAll( '.actions input' ); // получаем псевдомассив элементов
      // console.log( buttons ); // NodeList

      for( let i = 0; i < buttons.length; i++ ) {
        console.log( buttons[i] );
      }
    }

Вешаем событие на каждый элемент (объект) в массиве:

    window.onload = function ( evt ) {
      let buttons = document.querySelectorAll( '.actions input' ); // получаем псевдомассив элементов
      // console.log( buttons ); // NodeList

      for( let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', function ( evt ) {
          console.log( this.name );
        });
      }
    }

## Объект, for in
for in - работает со строковыми ключами.

    const obj = {
      ru: 'Россия',
      us: 'США',
      cn: 'Китай'
    }
    console.log( obj.ru ); // Россия
    console.log( obj[ 'us' ] ); // США

    for (const key in obj) {
      console.log( key );          // Имя свойства
      console.log( obj[ key ] );   // Значение свойства
      console.log( obj.key );      // undefined
      console.log( obj[ 'key' ] ); // undefined
    }

`console.log( obj.key ); // undefined` - здесь подставляется не переменная key, а ищется свойство key у объекта. `obj[ 'key' ] `- так тоже ищет свойство объекта key.
