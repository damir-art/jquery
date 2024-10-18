# Якоря
На лэндинге жмёшь на ссылку в меню и перемещаешься плавно вниз.

    html, body{
        margin: 0;
        background: #eee;
    }
    .menu{
        position: fixed;
        top: 0;
        left: 0;
        background: #000;
        color: #fff;
        height: 50px;
        width: 100%;
    }
    .menu a{
        color: inherit;
        line-height: 50px;
        font-size: 20px;
        margin: 0 10px;
        transition: color 0.4s;
    }
    .menu a.active{
        color: #ff0;
    }
    .content{
        margin-top: 70px;
    }

    <div class="menu">
      <a href="#about">О курсе</a>
      <a href="#price">Стоимость</a>
      <a href="#app">Запись</a>
      <a href="#nz">Нз</a>
    </div>

    куча текста на несколько страниц

    $(function () {
      $('.menu a').on('click', function (e) {
        e.preventDefault();

        // подсветка пунктов меню, filter, not, is
        $('.menu a').removeClass('active').filter(this).addClass('active');

        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */

        // scrollTop  - свойство которое отвечает за отступ от верхнего края, расстояние полосы прокрутки
        // h.offset() - возвращает отступ элемента, сверху и слева от краев окна
        $('html, body').animate({
          scrollTop: h.offset().top - 70
        }, 400);
      });
    });
