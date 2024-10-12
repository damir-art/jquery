# Объект
Оъект это ассоциативный массив с ключами строками. У объектов нет свойства length.

## Обход объекта циклом

    const obj = {
      ru: 'Россия',
      us: 'США',
      cn: 'Китай'
    }
    console.log( obj.ru ); // Россия
    console.log( obj[ 'us' ] ); // США

    for (const key in obj) {
      console.log( key ); // Имя свойства
      console.log( obj[ key ] ); // Значение свойства
      console.log( obj.key ); // undefined
      console.log( obj[ 'key' ] ); // undefined
    }

`console.log( obj.key ); // undefined` - здесь подставляется не переменная key, а ищется свойство key у объекта. `obj[ 'key' ] `- так тоже ищет свойство объекта key.
