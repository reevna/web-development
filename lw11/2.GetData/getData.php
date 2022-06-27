<?php

$userCards  = [];
$files = scandir('registration/');
foreach($files as $file)
{
  if(is_file('registration/' . $file))
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