<?php
echo '
<div class="registration-form">
<img src="img/welcome.svg" alt="Форма регистрации" />
<h3 class="form-header">Записаться на курс</h3>
<form method= "POST" action="form_handler.php">
  <div>
    <label for="name"> </label>
    <input class="registration-box registration-text" type="text" name="name" id="name" placeholder="Ваше имя" >
  </div>
  <div>
    <label for="email"> </label>
    <input class="registration-box registration-text" type="email" name="email" id="email" placeholder="Email" required="required">
  </div>

  <div class="custom-select">
    <select class="registration-box registration-box__select registration-text" name="activity">
      <option class="topic-options registration-text">Деятельность</option>
      <div class="options">
        <option class="select-option"  type="activity" value="Программист">Программист</option>
        <option class="select-option"  type="activity"  value="Дизайнер">Дизайнер</option>
        <option class="select-option"  type="activity"  value="Маркетолог">Маркетолог</option>
      </div>
    </select>
    <img class="registration-arrow" src="img/dropdown.svg" alt="Выпадающее меню" />
  </div>

  <div>
  <label class="custom-checkbox">
    <input class="checkbox_hidden" type="checkbox" name="agreement" value="agreement">
    <div class="checkbox">
      <img class="checkmark" src="img/checkmark.svg" alt="Галочка" />
    </div>
    <p class="text-agreement" >Согласен получать информационные материалы о старте курса</p>
  </label>
  </div>

  <div>
    <input class="button menu__button registration-button button_size button__text" type="submit" value="Записаться на курс">
  </div>
</form>
</div>';