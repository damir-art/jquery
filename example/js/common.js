jQuery( document ).ready( function ( $ ) {

  // Жмем по кнопкам, добавляем удаляем CSS-классы
  // let buttonAdd = $(".button--add");
  // let buttonRemove = $(".button--remove");
  
  // let head = $(".head");

  // buttonAdd.on("click", function() {
  //   head.toggleClass("head--red");
  // });

  // buttonRemove.on("click", function() {
  //   head.removeClass("head--red");
  // });

  // Жмем по кнопкам, скрываем показываем элемент
  // let buttonHide = $(".button--hide");
  // let buttonShow = $(".button--show");
  // let buttonToggle = $(".button--toggle");

  // let head = $(".head");

  // buttonHide.on("click", function() {
  //   head.hide("slow");
  //   console.log(this); // 
  // });

  // buttonShow.on("click", function() {
  //   head.show("slow");
  // });

  // buttonToggle.on("click", function() {
  //   head.toggle("slow");
  // });

  // Аналог toggle()
  // buttonToggle.on("click", function() {
  //   if (head.is(":visible")) {
  //     head.hide("slow");
  //   } else {
  //     head.show("slow");
  //   }
  // });

  // Меняем текст кнопки при переключении
  // buttonToggle.on("click", function() {
  //   if (head.is(":visible")) {
  //     // head.hide("slow");
  //     $(this).text("Показать");
  //   } else {
  //     // head.show("slow");
  //     $(this).text("Скрыть");
  //   }
  //   head.toggle("slow"); // если поставить выше условия то условие всегда будет true
  // });

  // Кликаем первый раз по строке таблицы, она подсвечивается, кликаем второй раз подсветка спадает
  // jQuery("tr").click(function() {
  //   $(this).toggleClass("class");
  // });

  // Создаём кнопку если поддерживается JS, кликаем по кнопке, скрывается надпись, а затем кнопка
  // jQuery( document ).ready( function ( $ ) {
  //   let button = $(" <button class='button button--toggle'>Переключатель</button> ");
  //   head = $(" .head ");
  //   button.insertBefore(" .head ");
  //   button.on("click", function() {
  //     let self = this;
  //     head.toggle(" slow ", function () {
  //       console.log($(self).hide("slow"));
  //     });
  //   });
  // });

})
