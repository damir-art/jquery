# Свойства и значения
Работаем со свойствами и значениями в CSS.

Получаем значение свойства:

    $("h2").css("color")

Устанавливаем значение свойства:

    $("h2").css("color", "green");

Устанавливаем несколько значений и свойств:

    $('.list').css({
        'background-color': '#eee',
        'padding': '8px 16px',
    })

Берем текущее значение свойства и меняем его:

    $("li").css("font-size", function(i, value){
        return parseFloat(value) * 1.5;
    })

i - каждый найденный элемент, value - текущее значение свойства

Используем функцию для выборки. Увеличим шрифт у элемента с индексом 2:

    $("li").css("font-size", function(i, value){
        //console.log(i)
        if(i == 2) return parseFloat(value) * 1.5;
    })
