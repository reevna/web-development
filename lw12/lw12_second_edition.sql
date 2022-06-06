CREATE DATABASE lw_13;
USE lw_13;

CREATE TABLE faculty
(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    head VARCHAR(255),
    PRIMARY KEY(id)
) DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE = InnoDB;


CREATE TABLE class
(
    id INT AUTO_INCREMENT NOT NULL,
    class_name VARCHAR(255) NOT NULL,
    faculty INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (id)
    REFERENCES
        faculty(id) ON UPDATE CASCADE ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4
   COLLATE 'utf8mb4_unicode_ci'
  ENGINE = InnoDB;


CREATE TABLE user
(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    group_id INT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (group_id)
    REFERENCES
        group(group_id) ON UPDATE CASCADE ON DELETE CASCADE
) DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE = InnoDB;


INSERT INTO faculty(name)
VALUES
    ('Филологический', 'Естественно-научный', 'Художественный');


INSERT INTO class(class_name, faculty)
VALUES
    ('Итальянская', 1),
    ('Китайская', 1) ,
    ('Арабская', 1),
    ('Биология', 2),
    ('Физика', 2) ,
    ('Астрономия', 2),
    ('Рисование', 3),
    ('Скульптура', 3) ,
    ('Музыка', 3);



INSERT INTO users(name, last_name, role, birthdate, group_name)
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
    users
LEFT JOIN groups ON users.group_name = groups.group_name
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
    user_name = 'Иван' AND user_last_name = 'Айвазовский';


#2
SELECT
    user_name,
    user_last_name,
    users.group_name,
    faculty
FROM
    users LEFT JOIN groups
ON users.group_name = groups.group_name
WHERE
    user_name = 'Иван' AND
    user_last_name = 'Айвазовский';