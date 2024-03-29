# Базовые фильтры :first, :last, :even, :odd
https://damir-art.ru  

`Изображение` фильтров :first, :last, :even, :odd.
Здравствуйте в этом уроке мы рассмотрим с вами базовые фильтры jQuery: :first, :last, :even, :odd.

`Изображение` заголовка
## Базовые фильтры jQuery :first и :last
`Изображение` описания и кода
Эти фильтры выбирают первый и последний элементы в выборке:
- `:first` - выборка первого элемента *(Deprecated, jQuery Extensions)*,
- `:last` - выборка последнего элемента *(Deprecated, jQuery Extensions)*,

Примеры:

    $( "tag:first" ).css( "color", "green" );
    $( "tag:last" ).css( "color", "green" );

Создадим список ul и выберем первый и последний элементы списка изменив цвет их шрифта на зеленый.

`Изображение` загловка
## Базовые фильтры jQuery :even и :odd
`Изображение` описания и кода
Эти фильтры выбирают четные и нечетные элементы в выборке (при этом нужно помнить что отчет элементов в языке JavaScript, начинается с нуля):
- `:even` - выборка четных элементов, отчет с `0`, см. `:odd` *(Deprecated, jQuery Extensions)*,
- `:odd` - выборка нечетных элементов, отчет с `0`, см. `:even` *(Deprecated, jQuery Extensions)*,

Примеры:

    $( "tag:even" ).css( "color", "green" );
    $( "tag:odd" ).css( "color", "green" );

Используя тот же самый список, выберем четные и нечетные элементы списка изменив их шрифт на зеленый.
