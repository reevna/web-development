CREATE DATABASE lw_12;
use lw_12;
CREATE TABLE users
(
    user_id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    user_last VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    group_name VARCHAR(255) NOT NULL,
    user_role VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
) DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE = InnoDB;


INSERT INTO users(user_name, user_last, user_role, birthdate, group_name)
VALUES
('Иван', 'Иванов', 'student', '2000-01-15', 'Итальянская'),
('Петрария', 'Петрова', 'student', '2000-05-17', 'Итальянская'),
('Сидор', 'Сидоров', 'student', '2001-05-25', 'Итальянская'),
('Иванна', 'Иванова', 'student', '2000-05-30', 'Итальянская'),
('Семен', 'Смирнов', 'student', '2003-05-01', 'Итальянская'),
('Остап',	'Бендер','student',	'2000-01-18',	'Китайская'),
('Берта',	'Сулейман-Бей','student',	'2001-11-25',	'Китайская'),
('Киса',	'Лукьянинов','student',	'2000-09-17',	'Китайская'),
('Иннокентий',	'Воробьянинов','student',	'2002-05-30',	'Китайская'),
('Анита',	'Афонина','student',	'2001-07-01',	'Китайская'),
('Роза',	'Цветкова','student',	'2001-01-18',	'Арабская'),
('Компот',	'Морсов',	'student','2002-09-17',	'Арабская'),
('Рамиля', 'Картинова','student','2003-11-25',	'Арабская'),
('Нина',	'Лампова',	'student','2004-05-30',	'Арабская'),
('Чивар',	'Пакетин','student',	'2005-07-01',	'Арабская'),
('Емеля',	'Ударников','student',	'2002-03-18',	'Биология'),
('Борис',	'Ударников','student',	'2002-05-17',	'Биология'),
('Семен',	'Ударников'	,'student','2003-12-25',	'Биология'),
('Алла',	'Ударникова','student',	'2004-08-30',	'Биология'),
('Анна',	'Ударникова','student',	'2005-09-01',	'Биология'),
('Сергей',	'Замятин',	'student','2002-03-05','Физика'),
('Джордж', 	'Оруэлл','student',	'2002-05-01',	'Физика'),
('Томас',	'Мор','student',	'2003-10-25',	'Физика'),
('Борис',	'Акунин',	'student','2004-10-30',	'Физика'),
('Станислав',	'Лемм',	'student','2005-10-01',	'Физика'),
('Анна',	'Кюри','student',	'2000-03-05',	'Астрономия'),
('Жан-Батист', 	'Кюри','student',	'2000-05-01',	'Астрономия'),
('Иоганн-Себастьян',	'Кюри','student',	'1999-10-25',	'Астрономия'),
('Иоганн',	'Коперник',	'student','1999-02-28',	'Астрономия'),
('Александр',	'Белл',	'student','1999-10-01',	'Астрономия'),
('Иван',	'Айвазовский','student',	'2002-03-05',	'Рисование'),
('Петр', 	'Крылов',	'student','2002-05-01',	'Рисование'),
('Аида'	,'Пикассо',	'student','2003-10-25',	'Рисование'),
('Андрей',	'Шишкин',	'student','2004-10-30',	'Рисование'),
('Илья',	'Васнецов',	'student','2005-10-01',	'Рисование'),
('Николас',	'Армстронг','student',	'1998-03-05',	'Скульптура'),
('Элиот',	'Дарвин',	'student','1998-05-01',	'Скульптура'),
('Никита',	'Берия','student',	'1999-12-25',	'Скульптура'),
('Андрей',	'Ежов',	'student','1998-02-28',	'Скульптура'),
('Джон',	'Хаббл','student',	'1999-10-01',	'Скульптура'),
('Нарцисса',	'Цветкова','student',	'2002-03-05',	'Музыка'),
('Батат' ,	'Картофелев',	'student','2002-05-01',	'Музыка'),
('Мария',	'Печенькина',	'student','2003-10-25',	'Музыка'),
('Алмаз',	'Хрусталев',	'student','2004-10-30',	'Музыка'),
('Скрепа',	'Дощечкина','student',	'2005-10-01',	'Музыка');

USE lw_12;
CREATE TABLE groups
(
    group_id INT AUTO_INCREMENT NOT NULL,
    group_name VARCHAR(255) NOT NULL,
    faculty VARCHAR(255) NOT NULL,
    PRIMARY KEY(group_id)
) DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE = InnoDB;


INSERT INTO groups(group_name, faculty )
VALUES
    ('Арабская', 'Филологический'),
    ('Итальянская', 'Филологический'),
    ('Китайская', 'Филологический'),
    ('Астрономия','Естественно-научный'),
    ('Биология','Естественно-научный'),
    ('Физика','Естественно-научный'),
    ('Музыка','Художественный'),
    ('Рисование','Художественный'),
    ('Скульптура','Художественный');

USE lw_12;
CREATE TABLE faculty
(
    faculty_id INT AUTO_INCREMENT NOT NULL,
    faculty_name VARCHAR(255) NOT NULL,
    faculty_head VARCHAR(255),
    PRIMARY KEY(faculty_id)
) DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE = InnoDB;

INSERT INTO faculty(faculty_name)
VALUES
    ('Филологический'),
    ('Естественно-научный'),
    ('Художественный');


#Для получения всех студентов в возрасте 19 лет
SELECT *
FROM
    user
WHERE
    birthdate BETWEEN '2002-05-14' AND '2003-05-13';



#Для получения всех студентов из конкретной группы.
SELECT *
FROM
    users
WHERE
    group_name = 'Биология';



#Для получения всех студентов из конкретного факультета
SELECT *
FROM
    users LEFT JOIN groups
ON users.group_name = groups.group_name
WHERE
    faculty = 'Художественный';



#Для получения факультета и группы конкретного студента
#1
SELECT
    users.group_name,
    faculty
FROM
    users
LEFT JOIN groups ON users.group_name = groups.group_name
WHERE
    user_name = 'Иван' AND user_last = 'Айвазовский';


#2
SELECT
    user_name,
    user_last,
    users.group_name,
    faculty
FROM
    users LEFT JOIN groups
ON users.group_name = groups.group_name
WHERE
    user_name = 'Иван' AND
    user_last = 'Айвазовский';