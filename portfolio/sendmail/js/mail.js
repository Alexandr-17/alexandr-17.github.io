$("#sendMail").on("click", function () {
	var name = $("#name").val().trim();
	var email = $("#email").val().trim();
	var phone = $("#phone").val().trim();
	var message = $("#message").val().trim();

	if(name == "") {
		$("#ErrorMess").text("Введите Ваше имя");
		return false;
	} else if(email == "") {
		$("#ErrorMess").text("Введите Ваш email");
		return false;
	} else if(phone == "") {
		$("#ErrorMess").text("Введите Ваш телефон");
		return false;
	} else if(message.length < 5) {
		$("#ErrorMess").text("Введите Ваше сообщение, не менее 5 символов");
		return false;
	}

	$("#ErrorMess").text("");

	$.ajax({
		url: 'ajax/mail.php',
		type:'POST',
		cache: false,
		data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
		dataType: 'html',
		beforeSend: function() {
			$("#ErrorMess").prop("disable", true);
		},
		success: function(data) {
			if(!data)
				alert("Сообщение не отправлено");
			else 
				$("mailform").trigger("reset");
			$("#ErrorMess").prop("disable", false);
		}
});