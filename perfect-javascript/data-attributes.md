# data-attributes

    <div class="actions flex">
      <input class="button" type="button" name="save" data-tovar="Товар 1" value="Сохранить">
      <input class="button" type="button" name="delete" data-tovar="Товар 2" value="Удалить">
    </div>

    window.onload = function ( evt ) {
      let buttons = document.querySelectorAll( '.actions input' ); // получаем псевдомассив элементов
      // console.log( buttons ); // NodeList

      for( let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener('click', clickBtn);
      }
    }

    function clickBtn ( evt ) {
      console.log( this.dataset.tovar ); // Товар 1 || Товар 2
    }
