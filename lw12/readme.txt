#20 Лабораторная работа 12 - Базы данных

Установите сервер mysql, используя ссылку
https://downloads.mysql.com/archives/get/p/25/file/mysql-installer-community-5.7.29.0.msi
Разработайте набор sql запросов, которые сохраните в файл с расширением sql и выложите на гитхаб. 
Запросы должны создавать базу данных университет, в которой должны быть таблицы: студент (с информацией о студенте), группа (с информацией о группе), факультет (с информацией о факультете). Нужно заполнить таблицу данными, у вас должно быть 3 факультета, в каждом факультете 3 группы, в каждой группе 5 студентов. Студент должен быть связан с группой, а группа должна быть связана с факультетом.
Разработайте sql запросы:
Для получения всех студентов в возрасте 19 лет
Для получения всех студентов из конкретной группы.
Для получения всех студентов из конкретного факультета
Для получения факультета и группы конкретного студента


Для реализации выборок по нескольким таблицам используйте инструкцию JOIN
https://habr.com/ru/post/305926/

Код на SQL должен быть оформлен следующим образом, все ключевые слова должны быть написаны заглавными буквами. В многострочных запросах используется отступ 4 пробема например так:

SELECT
    name,
    age,
    last_name AS family_name,
FROM
    user
WHERE
    name LIKE ‘%petr%’;
