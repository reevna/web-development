<?php



$email = getPostParameter('email');
$filename = strtolower($email) . '.txt';


$files = scandir('registration/');

    foreach($files as $k)
    {



    $content = file_get_contents('registration/'.$filename);
    $elements = explode(PHP_EOL, $content);
    $name = $elements[0];
    $email = $elements[1];
    $activity  = $elements[2];
    $agreement = $elements[3];

    echo "Email:  $email<br>";
    echo "Имя: $name<br>";
    echo "Деятельность: $activity<br>";
    echo "Рассылка: $agreement.<br>";
}

if($files == false)
{
    echo "Нет файла";
}



function getPostParameter(string $key): ?string
{
    return $_POST[$key] ?? null;
}