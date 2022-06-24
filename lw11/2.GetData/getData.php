<?php

//$contents = '';
$userCards  = [];
$files = scandir('registration/'); //присваиваем переменной массив с листингом директории
foreach($files as $file) //проходим по массиву
{
  if(is_file('registration/' . $file))
   // continue; //если это файл, а не папка
     {
  $content = file_get_contents('registration/' . $file);
  $field = explode(PHP_EOL, $content);

  $userCard = [
    'name' => $field[0],
    'email' => $field[1],
    'activity' => $field[2],
    'agreement' => $field[3],
  ];



  $userCards[]  = $userCard;

}
}
$responseBody = json_encode($userCards, true);
echo $responseBody;