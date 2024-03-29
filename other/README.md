# Разное о jQuery
- chain (цепочка из методов)
- each (каждый)
- length (получаем количество элементов в выборке)

Содержание:
- Сравнение нативных JavaScript методов и устаревших методов jQuery
- Знакомство с методами для обработки данных
- Метод `noConflict()` и его использование
- Дополнительные библиотеки для расширения возможностей jQuery

## Автоматический цикл
- `$('li')` - элементы выбираются автоматически, без использования цикла `for`, `while`  и т.д.
- `$('li')` - массив объектов (элементов)
- `$('li').hide()` - сразу ко всем элементам можно применить методы

## Многие методы jQuery, доступны в JavaScript
Перебор массива `each` / `forEach`:

    // jQuery
    $.each(array, function(i, item) {

    });

    // JavaScript
    array.forEach(function(item, i) {

    });

Является ли данный элемент массивом `isArray`:

    // jQuery
    $.isArray(arr);

    // JavaScript
    array.isArray(arr);

Вызов функции для каждого элемента массива `map`:

    // jQuery
    $.map(array, function(value, index){

    });

    // JavaScript
    array.map(function(value, index){

    });

## Обработка массивов и объектов
- `$.grep()` - (фильтрация данных массива, с созданием своих условий) метод выполняет поиск в массиве элементов, которые удовлетворяют условию
- `$.inArray()` - метод производит поиск по массиву и возвращает -1 при неудачном результате поиска
- `$.makeArray()` - метод возвращает массив из коллекции элементов
- `$.extend()` - метод выполняет слияние двух или больше объектов
- `$("li").index()` - метод возвращает индекс указанного элемента

Пример:

    $( document ).ready(function() {
      
      // метод фильтрации массива .grep()
      let arr = [ 1, 2, 3, 4, 5, 1, 8, 9, 10, 12, 3, 2, 1 ];
      arr = $.grep(arr, function( n, i ) {
          return ( n != 5 && i > 6); // условие фильтрации
      });
      $(".grep").text(arr);

      // метод поиска по массиву .inArray()
      let inArr = [ 'Angular', 'React', 'Vue' ];
      let li = $("li"); // получаем в переменную список элементов
      li.eq(0).text($.inArray("React", inArr)); // что мы ищем, где мы ищем (получаем индекс элемента в массиве)
      li.eq(1).text($.inArray("Vue", inArr));
      li.eq(2).text($.inArray("Angular", inArr));
      
      // Преобразовываем объект в массив .makeArray()
      console.log(li);
      let elemArr = $.makeArray(li);
      console.log(elemArr);
      console.log($.isArray(elemArr)); // проверяем является ли массивом

      // Работаем с объектами .extend()
      let userA = {
          name:"Ivan",
          email:"ivan@gmail.com"
      }
      let userAinfo ={
          age:18,
          bonus:100
      }

      let user = $.extend(userA, userAinfo); // объединяем два объекта
      console.log(user);

      // Поиск .index()
      let indexEl = $(".index2");
      $(".index-val").text(li.index(indexEl)); // в элементах li ищем indexEl, похож на indexOf в JS
    });

- `$("div").data()` - метод позволяет добавлять и читать данные элемента, не работает с тегами embed и object
- `$("div").removeData()` - метод позволяет удалять данные из элемента

Манипуляция различными типами данных, которые можно присоединить:

    // div элемент с data-атрибутами
    <div
      data-role="page"
      data-last-value="43"
      data-hidden="true"
      data-options='{"name":"John"}'>
    </div>
    <button class="set">Set data</button> <button class="get">Get data</button>

    let block = $('div'); // блок div с data-атрибутами
    console.log(block.data()); // выводим в консоль data-атрибуты

    // добавляем data-атрибут со значением
    $(".set").click(function(){
      block.data("position", 15);
    });

    // получем значение data-атрибута
    $(".get").click(function(){
      // block.removeData("position"); // удаляем data-атрибут
      // block.removeData(); // удаляем все data-атрибуты
      alert(block.data("position"));
      // console.log(block.data());
    });

## Метод noConflict() и его использование
- `$.noConflict()` - метод позволяет заменить дефолтное значение вызова методов jQuery. Необходим чтобы символ `$` не вызывал конфликт с другими библиотеками.

    let jQ = $.noConflict();

    jQ(document).ready(function(){
      jQ("p").text("Работает");
      jQ("button").click(function() {
          alert("Работает");
      });
    });

## Дополнительные библиотеки для расширения возможностей jQuery
https://jqueryui.com  
jQuery UI - содержит в себе множество готовых компонентов и эффектов, которые можно добавить в проект.

Вместо jQuery UI можно использовать комопненты Bootstrap старых версий, где использовался jQuery.

- https://roundsliderui.com/
- https://kenwheeler.github.io/slick/

## Разное
- `extend()` - это метод, который расширяет и возвращает исходный объект, дополняя его свойствами из объектов источников, которые заданы в метод. Приоритет в слиянии имеют объекты, которые находятся в конце списка
- `makeArray()` - это метод, который позволяет преобразовать массивоподобный объект в массив.
При получении элементов через селектор мы получаем массивоподобный объект, которым трудно манипулировать. После преобразования в массив нам становятся доступны все методы, которые возможно применит к массивам
- `data()` - это метод, который выполняет чтение и возвращает объект со всеми значениями прикреплёнными к элементу. При передаче параметров метод устанавливает значения для элемента. Метод нельзя применить к таким элементам как `object`, `applet`, `embed`
- `nonConflict()` - это метод, который устраняет конфликт имен переменных в библиотеках, которые имеют переменную `$`. C помощью данного метода мы можем переопределить имя переменой без потери функционала данной библиотеки
