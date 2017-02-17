$(document).ready(function() {

	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	}

	heightDetect();
	
	$(window).resize(function(){
		heightDetect();
	});
	
	$(".sandwich, .menu_item").click(function() {
 	$(".sandwich").toggleClass("active");
	});

});

$(window).load(function() {
  $(".loader_Inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});