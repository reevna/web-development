<?php
function getPostParameter(array $source, string $key): ?string
{
  return $source[$key] ?? null;
}

$data = file_get_contents('php://input');
$source = json_decode($data, true);
$name = getPostParameter($source, 'name');
$email = getPostParameter($source, 'email');
$activity = getPostParameter($source, 'activity');
$agreement = getPostParameter($source, 'checkbox');


// if ($agreement = true)
// $agreement = 'yes';
// else
// $agreement = 'no';


header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");


if (!empty($name) && !empty($email) && !empty($activity))
{
  $filename = strtolower($email) . ".txt";
  $newfile = fopen('registration/'.$filename, "w");

  fwrite($newfile, $name.PHP_EOL);
  fwrite($newfile, $email.PHP_EOL);
  fwrite($newfile, $activity.PHP_EOL);
  fwrite($newfile, $agreement);
  fclose($newfile);

  $array = [
	  'status' => '200',
	  'message' => 'Ууспех',
  ];
  $json_str = json_encode($array);
  echo $json_str;
}
else
{
  $array = [
    'status' => '500',
    'message' => 'Ошибка.' . $name . ' ' . $email . ' ' . $activity,
  ];
  $json_str = json_encode($array);
  echo $json_str;
}






