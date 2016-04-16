$(document).on("click","#new_presentation", function(){
	$(#presentation).hide();
	$(#presentation).modal('show');
});
$(document).on("click","#new_slide", function(){
	$(#presentation).hide();
	$('.modal-backdrop').hide();
	$(#content).hide();
	$('.modal-backdrop').hide();
	$(#slide).modal('show');
});
$(document).on("click","#slide_content", function(){
	$(#slide).hide();
	$('.modal-backdrop').hide();
	$(#content).modal('show');
});