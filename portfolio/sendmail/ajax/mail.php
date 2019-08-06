<?php
 	$mysqli = new mysqli("localhost", "root", "", "mybase")


	$result = mysqli_query("SELECT id * FROM `users`");
		while($row = mysqli_fetch_array($result)) {
			$id = $row['id'];
			$name = $row['name'];
			$email = $row['email'];
			$message = $row['message'];

			echo $id.")&nbsp; &nbsp;" .$name.$email.$message."<br/><hr>";
	}
?>