$( document ).ready(function() {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		closeOnBgClick: true,
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	   	$(".formsub").submit(function() {
		$.ajax({
			type: "POST",
			url: "./mail.php",
			data: $(this).serialize(),
			beforeSend: function(){
                $.fancybox.open("#loader");
            },
            complete: function(){
                $.fancybox.open("#sends");
            },
            success: function() {
                $(this).find("input").val("");
                $(".formsub").trigger("reset");
            }
		})
		return false;
	});
	   		$(".close").click(function() {
	   			$.fancybox.close("#sends");
	   		});


});
