<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	$subject = "?utf-8?B?" base64_encode("Сообщение")."?=";
	$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n\";

	$success = mail("apivanov17@mail.ru", $subject, $message, $headers);
	echo $success;
?>