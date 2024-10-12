Интерактивный расчет цены товаров, выбранных в магазине.

Есть три товара с ценами,  
при выбранном чекбоксе, подсчитывается сумма выбранных товаров,  
цены приходят с бекенда и встраиваются в дата атрибуты

    <style>
      .items {
        display: flex;
        gap: 24px;
      }
      .item {
        width: 33.333%;
      }
      .item__img {
        display: flex;
      }
      .item__img img {
        max-width: 100%;
        height: auto;
      }
      .item__price {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
      }
      .sum {
        margin-top: 32px;
      }
    </style>

    <div class="main">
      <div class="items">
        <div class="item">
          <div class="item__img">
            <img src="./img/123.png" alt="">
          </div>
          <div class="item__price">
            <div class="item__checked">
              <input type="checkbox" data-price="200">
            </div>
            <div class="item__cost">
              Цена: <b>200</b> руб
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item__img">
            <img src="./img/123.png" alt="">
          </div>
          <div class="item__price">
            <div class="item__checked">
              <input type="checkbox" data-price="300">
            </div>
            <div class="item__cost">
              Цена: <b>300</b> руб
            </div>
          </div>
        </div>
        <div class="item">
          <div class="item__img">
            <img src="./img/123.png" alt="">
          </div>
          <div class="item__price">
            <div class="item__checked">
              <input type="checkbox" data-price="400">
            </div>
            <div class="item__cost">
              Цена: <b>400</b> руб
            </div>
          </div>
        </div>
      </div>
      <div class="sum">
        Общая стоимость выбранных товаров: <b>Ничего не выбрано</b>
      </div>
    </div>

    <script>
      window.onload = function ( evt ) {
        /*
          Есть три товара с ценами,
          при выбранном чекбоксе, подсчитывается сумма выбранных товаров,
          цены приходят с бекенда и встраиваются в дата атрибуты
        */

        let checkboxes = document.querySelectorAll( '.item__checked input' );

        for ( let i = 0; i < checkboxes.length; i++ ) {
          checkboxes[i].addEventListener( 'change', getTotalPrice);
        }

        let items = document.querySelectorAll( '.items .item' );

        for ( let i = 0; i < items.length; i++) {
          items[i].addEventListener( 'click', function () {
            this.classList.toggle( 'active' );
          });
        }
      }

      function getTotalPrice() {
        let sum = document.querySelector( '.sum b' );
        let checkboxesChecked = document.querySelectorAll( '.item__checked input:checked' );
        sum.innerHTML = "Ничего не выбрано";

        console.log(checkboxesChecked);

        let totalPrice = 0; // при изменении чекбокса сначала обнулем, потом считаем заного
        for ( let y = 0; y < checkboxesChecked.length; y++ ) {
          //if (checkboxes[y].checked) {
            totalPrice += +checkboxesChecked[y].dataset.price;
          //}
        }
        sum.innerHTML = totalPrice ? totalPrice : "Ничего не выбрано";
      }
      getTotalPrice(); // При загрузки страницы функция сразу отрабатывает, чтобы показать текущую сумму
    </script>

Проходимся циклом по всем активным элементам, активность можно проверять через CSS класс `:checked`.
