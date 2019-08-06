//Для кнопки при нажатии выполняется функция запоминания введеных параметров в окна
$("#sendMail").on("click", function () {

	var name = $("#name").val();
	var email = $("#email").val();
	var mess = $("#mess").val();
//в случае ошибок при вводе выдаются соответствующие уведомления ниже кнопки
	if(name == "") {
		$("#ErrorMess").text("Entered Your name");
		return false;
	} else if(email == "") {
		$("#ErrorMess").text("Entered Your email");
		return false;
	} else if(mess.length < 5) {
		$("#ErrorMess").text("Entered Your message, min 5 symbol");
		return false;
	}

	$("#ErrorMess").text("");

	//Передаем данные ajax-ом в файл mail2.php методом POST без кэша в формате json и 
	$.ajax({
		url: 'ajax/mail2.php',
		type: "POST",
		cache: false,
		data: { 'name':name, 'email':email, 'mess':mess },
		dataType: 'json',
		success: function(result) {
			if(result)
				$('.rows').append(function(){
				var res = '';
					for(var i = 0; i < result.users.name.length; i++) {
						res += '<tr><td>' + result.users.id[i] + '</td><td>' + result.users.name[i] + '</td><td>' + result.users.mess[i] + '</td><td>'+ result.users.post_date[i] + '</td><tr>';
					}
						return res;
			});
		}
})
})