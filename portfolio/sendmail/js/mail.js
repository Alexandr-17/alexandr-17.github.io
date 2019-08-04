$("#sendMail").on("click", function () {
	var name = $("#name").val().trim();
	var email = $("#email").val().trim();
	var message = $("#message").val().trim();

	if(name == "") {
		$("#ErrorMess").text("Введите Ваше имя");
		return false;
	} else if(email == "") {
		$("#ErrorMess").text("Введите Ваш email");
		return false;
	} else if(message.length < 5) {
		$("#ErrorMess").text("Введите Ваше сообщение, не менее 5 символов");
		return false;
	}

	$("#ErrorMess").text("");
});
	
	$.ajax({
		url: 'ajax/mail.php',
		type:'POST',
		cache: false,
		data: { 'name':name, 'email':email, 'message':message },
		dataType: 'html',
		beforeSend: function() {
			$("#ErrorMess").prop("disable", true);
		},
		success: function(result) {
			if(result) {
				$('Review').append(function(){
				var res = '';
					for(var i = 0; i < result.users.name.length; i++) {
						res += '<tr><td>' + result.users.name[i] + '</td><td>' + result.users.email[i] + '</td><td>' + result.users.message[i] + '</td><td>';
					}
						return res;
			});
			console.log(result);
			} else { 
      			alert(result.message);
      		}
		return	false;
		}
	});
			return	false;
		});
});