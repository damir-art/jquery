# Массив

    const arr = [ 'a', 'b', 'c' ];

Массив это нумерованный список. Так как в JavaScript всё является объектом, то массив в реальности выглядит так:

    {
      0: "a",
      1: "b",
      2: "c",
      length: 3
    }

## Обход массива циклом

    for( let i = 0; i < arr.length; i++ ) {
      console.log( arr[i] );
    }
