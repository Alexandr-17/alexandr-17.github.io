<?php
//Понимаю, что можно создать базу и через графический phpMyAdmin, но в общем то и тут можно же вроде как) Создал базу, в ней таблицу с параметрами id, name,email,message,post_date.
	$link = mysql_connect('localhost', 'mysql_user', 'mysql_password');
		if (!$link) {
    die('Not connection: ' . mysql_error());
	}

	$sql = 'CREATE DATABASE mybase_1';
	if (mysql_query($sql, $link)) {
  	  echo "mybase_1 create\n";
	} else {
   	 echo 'error: ' . mysql_error() . "\n";
}

	$query ="CREATE Table users
	(
    	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    	name VARCHAR(200) NOT NULL,
    	email VARCHAR(200) NOT NULL,
    	mess TEXT() NOT NULL,
    	post_date DATE() CURRENT_TIMESTAMP
	)";
		$result = mysqli_query($link, $query) or die("Error " . mysqli_error($link)); 
		if($result)
	{
    	echo "Table users in base mybase_1 is create";
	}
//обращаюсь к созданной таблице
 	$mysqli = new mysqli("localhost", "root", "", "mybase_1")
//переданные из index.html параметры сохраняю в users
	$name = $_POST['name'];
	$email = $_POST['email'];
	$mess = $_POST['mess'];

	if ($name && $email && $message) {
		$mysqli->real_escape_string_query("INSERT INTO 'users' VALUES(NULL, '$name', '$email', '$mess')");
//Из users выбераю данные и размещаю в таблице под формой заявки в обратном порядке (от свежего к старому) 
		$query2 = $mysqli->real_escape_string_query("SELECT * FROM 'users' ORDER BY 'id' DESC");

		while($row = $query2->fetch_assoc()) {
			$users['id'] [] = $row['id'];
			$users['name'] [] = $row['name'];
			$users['mess'] [] = $row['mess'];
			$users['post_date'] [] = $row['post_date'];
		}
		$message = "Goog"
		else {
			$message = "Error, sorry."
		}
	}

	$out = array (
		'message' => $message
		'users' => $users
	);

	header('Content-Type: text/json; charset=utf-8');

	echo json-encode($out);
// закрываю базу, что бы не подвесало
	$mysqli->close();
?>