<?php
function getPostParameter(string $key): ?string
{
  return $_POST[$key] ?? null;
}

$name = getPostParameter('name');
$email = getPostParameter('email');
$activity = getPostParameter('activity');
$agreement = getPostParameter('agreement');


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
	  'message' => 'успех',
  ];
  $json_str = json_encode($array);
  echo $json_str;
}
else
{
  $array = [
    'status' => '500',
    'message' => 'fail',
  ];
  $json_str = json_encode($array);
  echo $json_str;
}






