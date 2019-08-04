<?php
 	$mysqli = new Mysqli('localhost', 'root', '', 'mybase')

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	if ($name && $email && $message) {
		$query = $mysqli->query("INSERT INTO 'users' VALUES(NULL, '$name', '$email', '$message')");

		$query2 = $mysqli->query("SELECT * FROM 'users' ORDER BY 'id' DESC");

		while($row = $query2->fetch_assoc()) {
			$users['id'] [] = $row['id'];
			$users['name'] [] = $row['name'];
			$users['email'] [] = $row['email'];
			$users['message'] [] = $row['message'];
		}

	$out = array (
		'users' => $users);
	header('Content-Type: text/json; charset=utf-8');

	echo json-encode($out);
?>