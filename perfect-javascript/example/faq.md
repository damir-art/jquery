# FAQ

HTML:

    <div class="faq">
      <div class="item">
        <div class="ask">1. Вопрос какой-то №1</div>
        <div class="answer">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div class="item">
          <div class="ask">2. Вопрос какой-то №2</div>
          <div class="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
      <div class="item">
          <div class="ask">3. Вопрос какой-то №3</div>
          <div class="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
      <div class="item">
          <div class="ask">4. Вопрос какой-то №4</div>
          <div class="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
      <div class="item">
          <div class="ask">5. Вопрос какой-то №5</div>
          <div class="answer">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
    </div>

CSS:

    html, body{
      margin: 0;
      background: #eee;
    }

    .faq{
      padding: 30px;
      max-width: 600px;
    }

    .faq .item{
      margin: 20px 0;
    }

    .faq .item .ask{
      font-size: 30px;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .faq .item .answer{
      background: #ff0;
      overflow: hidden;
      display: none;
      padding: 0 15px;
    }

JS:

    // Самый простой FAQ
    $(function() {
      $('.faq .ask').on('click', function() {
        $(this).next().slideToggle(400);
      });
    });

    // При открытии ответа, остальные закрываются
    $('.faq .ask').on('click', function() {
      // this - это текущий вопрос(по которому кликнули),
      // next - это текущий ответ (находится после вопроса, в коде)
      var answer = $(this).next();

      // Закрываем все открытые ответы кроме текущего
      // visible добавлен для оптимизации, работает и без него
      $('.faq .answer:visible').not(answer).slideUp(400);
      // Если кликнули по текущему вопросу, то ответ либо откроется лиюо закроетсы, в зависимости от того открыт он или закрыт
      answer.slideToggle(400);

      // Всегда открыт 1 (в CSS тоже нужно один открыть сначала, например первый)
      // или вместо CSS воспользоваться jQuery: $('.faq .answer:first').show()
      // answer.slideDown(400);
    });
