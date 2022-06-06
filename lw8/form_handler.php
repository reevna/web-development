<?php


function getPostParameter(string $key): ?string
{
  return $_POST[$key] ?? null;
}

$name = getPostParameter('name');
$email = getPostParameter('email');
$activity = getPostParameter('activity');
$agreement = getPostParameter('agreement');


if (empty($name)){
  echo  "Введите ваше имя";
}

if (empty($email)){
  echo  "Введите ваш email";
}

if (empty($activity)){
  echo  "Выберите деятельность";
}


if (!empty($name) && !empty($email) && !empty($activity))
{
  echo  "Спасибо за регистрацию!";


$filename = strtolower($email) . ".txt";
$newfile = fopen('registration/'.$filename, "w");

fwrite($newfile, $name.PHP_EOL);
fwrite($newfile, $email.PHP_EOL);
fwrite($newfile, $activity.PHP_EOL);
fwrite($newfile, $agreement);
fclose($newfile);

}



?>


