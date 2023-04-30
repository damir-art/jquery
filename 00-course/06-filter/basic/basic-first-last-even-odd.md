# Базовые фильтры :first, :last, :even, :odd
https://damir-art.ru  

Базовые фильтры в jQuery :first, :last, :even, :odd

`Изображение`
Фильтруем по первому и последнему элементу из выборки:
- `:first` - выборка первого элемента *(Deprecated, jQuery Extensions)*,
- `:last` - выборка последнего элемента *(Deprecated, jQuery Extensions)*,

Примеры:

    $( "li:first" ).css( "color", "green" );
    $( "li:last" ).css( "color", "green" );

`Изображение`
Фильтруем по четным нечетным элементам из выборки:
- `:even` - выборка четных элементов, отчет с `0`, см. `:odd` *(Deprecated, jQuery Extensions)*,
- `:odd` - выборка нечетных элементов, отчет с `0`, см. `:even` *(Deprecated, jQuery Extensions)*,

Примеры:

    $( "li:even" ).css( "color", "green" );
    $( "li:odd" ).css( "color", "green" );
