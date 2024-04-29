# Базовые фильтры :animated, :focus, :not(), :target
https://damir-art.ru

Базовые фильтры в jQuery :animated, :focus, :not(), :target

`Изображение`
Разные фильтры не попавшие в подвиды:
- `:animated` - выборка элементов, находящихся в процессе анимации во время запуска селектора *(jQuery Extensions)*,
- `:not()` - выборка элементов не соответствующих данному селектору,

Примеры:

    $( ":animated" ).css( "color", "green" );
    $( "input:focus" ).css( "color", "green" );
    $( "li:not(span)" ).css( "color", "green" );
    $( "h2:target" ).css( "color", "green" );
