$(document).ready(function(){
	$("#new_presentation").click(function(){
		$("#presentation").modal('show');
	});
	$("#new_slide").click(function(){
		$("#presentation").modal('hide');
		$("#slide").modal('show');
	});
	$("#slide_content").click(function(){
		$("#slide").modal('hide');
		$("#content").modal('show');
	});
	$("#next_slide").click(function(){
		$("#slide").modal('show');
		$("#content").modal('hide');
	});
	$("#close").click(function(){
		$("presentation").modal('hide');
		$("#slide").modal('hide');
		$("#content").modal('hide');
	});
});