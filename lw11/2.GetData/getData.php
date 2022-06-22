<?php

$contents = '';
$files = scandir('registration/'); //присваиваем переменной массив с листингом директории
foreach($files as $file) //проходим по массиву
{
  if(!is_dir('registration/' . $file)) //если это файл, а не папка
  {
    $contents = file_get_contents('registration/' . $file);
    // echo $contents[0];
    // echo $contents[1];
    // echo $contents[2];
    // echo '\n';
    // $fileName = $contents[0];

    $field = explode(PHP_EOL, $contents);
    $arr = array(
      $name = $field[0],
      $email = $field[1],
      $activity = $field[2],
      $agreement = $field[3],
    );
    $json_str = json_encode($arr, true);
    echo json_encode($arr, JSON_UNESCAPED_UNICODE);


    // echo "Имя: $name" . "<br>";
    // echo "Email: $email" . "<br>";
    // echo "Профессия: $activity" . "<br>";
    // echo "Согласие: $agreement" . "<br>";

  }
}




