# Классы
Работаем с классами в CSS.

## addClass()
Добавляем класс элементу:

    $(".wrap").addClass("wrap--mod");

Используем функцию для выборки:

    $("li").addClass(function(i){
        if(i == 2) return 'title--mod';
    })

## removeClass()
Удаляем класс:
    
    $('h1').removeClass('title')

    $("li").removeClass(function(i){
        if(i == 2) return 'title--mod'
    })

## hasClass()
Проверяем имеет ли элемент данный класс:

    $('h1').hasClass('title')

## toggleClass()
Переключаем класс (проверяем по событию):

    $('h1').toggleClass('title')

## Разное
Изучить дополнительно:

    toggleClass(className, switch)
    toggleClass(function(index, currentClass, switch){ return className }, switch)

Добавлять, удалять и т.д, можно сразу несколько классов `addClass("title title--mod")`
