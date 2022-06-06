<?php
echo '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Send email form</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style2.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
  </head>
<body>
  <div class="wrapper">
    <div>
    <form method= "POST" action="getData.php">
    <label for="email"> </label>
      <input class="registration-box registration-text" type="email" name="email" id="email" placeholder="Email" required="required">
    </div>
    <div class = "block">

      <div class="send-form">
        <div class="button-form get-data_form">
          <input class="button registration-button button__text button-form" type="submit" value="Получить данные">
        </div>
      </div>
    </form>
  </div>
  </div>

</body>
</html>

';
