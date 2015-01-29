var body = $('BODY');
var menuBtn = $('.ui-btn.btn-menu');

$(document).on('ready',function(e){

	$('.ui-btn.btn-menu').on('click',function(e){

		if( body.hasClass('show-menu') ){
			body.removeClass('show-menu');
			menuBtn.removeClass('close');

		}else{
			body.addClass('show-menu');	
			menuBtn.addClass('close');
		}

		return false;
	});

});