
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Don't do it</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
  </head>
  <body class="body">
    <header>
      <div class="menu">
        <img class="menu__logo" src="img/logo.svg" alt="логотип Don't do it" />
        <nav >
          <ul class="menu_wrapper">
            <li class="list-dot-disabled"><a class="link-style-disabled menu__item" href="ссылка" title = "Что будет на курсе?">Что будет на курсе?</a></li>
            <li class="list-dot-disabled"><a class="link-style-disabled menu__item" href="ссылка">Вопросы</a></li>
            <li class="list-dot-disabled"><a class="link-style-disabled menu__item" href="ссылка">Автор</a></li>
           </ul>
        </nav>
        <div class="button menu__button button_size"><a class="button__text list-dot-disabled list__last-item" href="ссылка">Записаться на курс</a></div>
      </div>
    </header>

    <div class="main-block">
      <div class="main-block__texts">
        <h1 class="main-block__heading">Не <span class="block__heading_color">делай</span> это</h1>
        <p class="main-block__text">Онлайн-курс для творческих людей, о том, как управлять своим временем</p>
        <div class="button main-block__button button_size"><a class="button__text list-dot-disabled list__last-item" href="ссылка">Записаться на курс</a></div>
      </div>
      <img class="main-picture" src="img/Done.png" alt="Иллюстрация" />
    </div>

    <div class="black-background">
      <div class="wrapper_middle">
        <div class="three-points-wrapper">
          <div class="three-points">
            <img class="black-background__icon" src="img/time.svg" alt="Время" />
            <p class="black-background__text black-background__text_left">Для тех, у кого слишком много идей и слишком мало времени</p>
          </div>
          <div class="three-points">
            <img class="black-background__second-icon black-background__icon" src="img/note.svg" alt="Блокнот" />
            <p class="black-background__text black-background__text_center">Метод «списка не дел», который позволит успевать и реализовывать</p>
          </div>
          <div class="three-points">
            <img class="black-background__icon" src="img/aim.svg" alt="Цель" />
            <p class="black-background__text black-background__text_right">Курс научит творческих людей сосредоточиваться</p>
          </div>
        </div>

      </div>
    </div>

    <div class="middle-wrapper">
      <div class="notime-section">
        <img class="section__picture" src="img/Finances.png" alt="Хочу всё успеть" />
        <div class="notime-section__notime-text">
          <h2 class="section__heading section__all-texts">Ты не успеешь</h2>
          <p class="section__all-texts section__text">Всех творческих людей объединяет одна проблема - отсутствие времени на реализацию идей.
             Как прибавить суткам часы, рассмотрим в нашем курсе.</p>
        </div>
      </div>

      <div class="deadline-section">
        <div class="deadline-section__deadline-text">
        <h2 class="section__heading section__all-texts">Опять дедлайн</h2>
        <p class="section__all-texts section__text">В мире, где столько всего интересного, когда же успевать жить?</p>
        </div>
         <img class="section__picture-mind" src="img/Mind_Blowing.png" alt="Взрыв мозга" />
      </div>

      <div>
        <h2 class="section__heading section__heading_youcan">На курсе ты <span class="block__heading_color">сможешь</span></h2>
        <div class="blocks">
          <div class="block">
            <div class="block__inside">
              <img class="block__icon" src="img/1finger.svg" alt="Один палец" />
              <p class="block__text">Понять, что нужно делать, а что делать не стоит.</p>
            </div>
          </div>
          <div class="block">
            <img class="block__icon" src="img/2fingers.svg" alt="Два пальца" />
            <p class="block__text">Перестать себя искусственно ограничивать.</p>
          </div>
          <div class="block">
            <img class="block__icon" src="img/3fingers.svg" alt="Три пальца" />
            <p class="block__text">Определить сильные стороны и начать использовать слабые.</p>
          </div>
          <div class="block">
            <img class="block__icon" src="img/4fingers.svg" alt="Четыре пальца" />
            <p class="block__text">Научиться достигать любой цели в 3 понятных шага.</p>
          </div>
          <div class="block">
            <img class="block__icon" src="img/5fingers.svg" alt="Пять пальцев" />
            <p class="block__text">Сотрудничать эффективно и с правильными людьми.</p>
          </div>
          <div class="block">
            <img class="block__icon" src="img/6fingers.svg" alt="Шесть пальцев" />
            <p class="block__text">Оптимизировать общение с клиентами и проведение совещаний.</p>
          </div>
        </div>
      </div>
    </div>

<?php include 'form.php';?>


    <footer class="footer">
      <img class="footer__logo" src="img/logo_white.svg" alt="логотип Don't do it" />
    </footer>

  </body>
</html>
