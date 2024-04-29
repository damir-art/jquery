# Базовые фильтры :eq(), :gt(), :lt()
https://damir-art.ru  

Базовые фильтры в jQuery :eq(), :gt(), :lt()

`Изображение`
Фильтруем по индексу из выборки:
- `:eq()` - выборка элемента с индексом `n` в соответствующем наборе *(Deprecated, jQuery Extensions)*,
- `:gt()` - выборка элементов с индексом больше указанного *(Deprecated, jQuery Extensions)*,
- `:lt()` - выборка элементов с индексом меньше указанного *(Deprecated, jQuery Extensions)*,

Примеры:

    $( "li:eq(3)" ).css( "color", "green" );
    $( "li:gt(3)" ).css( "color", "green" );
    $( "li:lt(3)" ).css( "color", "green" );
