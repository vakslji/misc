
$(document).ready(function() {
 
	$('.menuTrigger').click(function() {
		$('header nav').slideToggle('200');
		$(this).toggleClass('active');
	});
	
	$('.searchExpander').click(function() {
		$(this).parent().toggleClass('open');
	});
	
	$.fn.ToggleInputValue = function(){
		return $(this).each(function(){
			var Input = $(this);
			var default_value = Input.val();

			Input.focus(function() {
			   if(Input.val() == default_value) Input.val("");
			}).blur(function(){
				if(Input.val().length == 0) Input.val(default_value);
			});
		});
	}

	$('input[type=text]').ToggleInputValue();	
 
});