$("#sendMail").on("click", function () {

	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#message").val();

	if(name == "") {
		$("#ErrorMess").text("Entered Your name");
		return false;
	} else if(email == "") {
		$("#ErrorMess").text("Entered Your email");
		return false;
	} else if(message.length < 5) {
		$("#ErrorMess").text("Entered Your message, min 5 symbol");
		return false;
	}

	$("#ErrorMess").text("");

	
	$.ajax({
		url: 'ajax/mail.php',
		type: "POST",
		cache: false,
		data: { 'name':name, 'email':email, 'message':message },
		dataType: 'html',
		beforeSend: function() {
			$("#sendMail").prop("disable", true);
		},
		success: function(data) {
			if(!data)
				alert("Oops, Huston, we have a problems. One minute.");
			else
				$("myForm").trigger("reset");

			$("sendMail").prop("disable", false);


		}
})
})