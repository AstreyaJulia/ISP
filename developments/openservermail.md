Настройка Сервера почты в Open Server для yandex SMTP

1. Настроить Open Server
2. Настройки - Почта
3. Выбрать Отправлять почту через удаленный SMTP сервер
4. SMTP сервер: smtp.yandex.ru
5. Порт: 25
6. Email отправителя: почта@yandex.ru
7. Имя пользователя: почта@yandex.ru
8. Пароль: пароль от ящика
9. Шифрование: авто

Настройка ящика Яндекс
1. Войти в ящик
2. Перейти в настройки - все настройки - почтовые программы
3. Поставить галочки на всех пунктах

PHP код для отправки:

<?php
 if(mail('mail@mail.com', 'Тема письма', 'Отправка почты через локальный сервер openserver') ) {echo'Письмо успешно отправлено';
 }else{echo 'Ошибка';}
 ?>