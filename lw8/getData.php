<?php
function getPOSTParameter(string $key): ?string
{
    return $_POST[$key] ?? null;
}

$email = getPOSTParameter('email');

$filename = strtolower($email) . '.txt';



if (file_exists('registration/' . $filename))
{
  $filename = strtolower($email) . '.txt';
  $content = file_get_contents('registration/' . $filename);
  $field = explode(PHP_EOL, $content);
  $name = $field[0];
  $email = $field[1];
  $profession = $field[2];

  echo "Имя: $name" . "<br>";
  echo "Email: $email" . "<br>";
  echo "Профессия: $profession" . "<br>";
}
else
{
    echo "Нет файла";
}
;

