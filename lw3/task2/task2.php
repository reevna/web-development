<?php

function getGetParameter(string $key): ?string
{
  return $_GET[$key] ?? null;
}

echo "Является ли переданный в GET параметр идентификатором по правилу SR3?";

$identifier = getGetParameter('identifier');

if (!isset($identifier))
{
  echo "нет данных";
  return;
}

if (!ctype_alpha($identifier[0]))
{
  echo "Нет. Первый символ должен быть буквой";
  return;
}

for ($i = 1; $i < strlen($identifier); $i++)
{
  if (!ctype_alpha($identifier[$i]) and !is_numeric($identifier[$i]))
  {
    echo "Не подходит";
    return;
  }
}

echo "Да";