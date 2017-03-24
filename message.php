<?php
$to = "pb-nsk@yandex.ru";
$uname = $_POST['uname'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$shirina = $_POST['get1'];
$dlina = $_POST['get2'];
$dlinavnytri = $_POST['get3'];
$email2 = $_POST['email2'];

$pole1 = $_POST['get5'];
$pole2 = $_POST['get6'];


$radio = $_POST['get7'];
$dlinavnytri2 = $_POST['get8'];

$phone2 = $_POST['phone2'];



// Формирование заголовка письма
$subject  = "Заявка с сайта профилированный-брус-купить.рф";
$headers  = "From: pb-nsk@yandex.ry" . "\r\n";
$headers .= "Reply-To: pb-nsk@yandex.ru".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body>";
$msg .= "<h2>Новое сообщение</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$uname."</p>\r\n";
$msg .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";


$msg .= "<p><strong>Данные дома</strong></p>\r\n";
$msg .= "<p><strong>Ширина:</strong> ".$shirina."</p>\r\n";
$msg .= "<p><strong>Длина:</strong> ".$dlina."</p>\r\n";
$msg .="<p><strong>Длина внутренней перегородки 1 этажа:</strong> ".$dlinavnytri."</p>\r\n";
$msg .= "<p><strong>Email2:</strong> ".$email2."</p>\r\n";

$msg .= "<p><strong>Размеры бруса:</strong> ".$pole1. "X" .$pole2. "</p>\r\n";

$msg .= "<p><strong>Этажность дома:</strong> ".$radio."</p>\r\n";
$msg .="<p><strong>Общая длина перегородок 2 этажа:</strong> ".$dlinavnytri2."</p>\r\n";

$msg .="<p><strong>Телефон:</strong> ".$phone2."</p>\r\n";

$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>