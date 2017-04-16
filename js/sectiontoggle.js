$(document).ready(function(){
	$(".greenact").click(function(){
		$(".testimonials").toggle();
		$(".orgclient").hide();
		$(".notable").hide();
	});
	$(".purpleact").click(function(){
		$(".orgclient").toggle();
		$(".testimonials").hide();
		$(".notable").hide();
	});
	$(".redact").click(function(){
		$(".notable").toggle();
		$(".testimonials").hide();
		$(".orgclient").hide();
	});

});