Оптимизация (клиентская)
#10 (опционально-желательно-было бы круто) Выложить свою страницу (минимум сделанная лабораторная работа №5) на бесплатный хостинг (напр https://beget.com/ru) 
https://www.youtube.com/watch?v=nxxj9N58Z6A 
#10 (опционально-желательно-было бы круто) Подключить бесплатный CDN (напр cloudflare https://www.youtube.com/watch?v=N7n_HtvwNVA) 
#1 Сохранить показатели (Web Page Test и Google Pagespeed Insights)
https://www.webpagetest.org/ 
https://pagespeed.web.dev/ 
	p.s. если не реализованы п 1 и 2, то можно тестировать через lighthouse
#20 Провести оптимизацию согласно чек-листу:
Минифицировать 
js
css
Объединить
js
css
Оптимизация изображений
сконвертировать png/jpeg в webp и подключить 
для иконок сгенерировать спрайт для иконок и подключить
проставить width, height, loading у картинок
Оптимизация шрифтов
Использовать максимум 2 типа шрифтов
добавить предзагрузку
DOM
сделать оптимизацию DOM при необходимости
Скрипты
перенести стили в head (если стилей много, то основные стили в head, остальные перед /body)
перенести скрипты js перед закрывающимся тегом body 
#1 Сохранить показатели (Web Page Test и Google Pagespeed Insights)
https://www.webpagetest.org/ 
https://pagespeed.web.dev/ 
