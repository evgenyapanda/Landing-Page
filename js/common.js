$(document).ready(function() {

	$(".popup").magnificPopup({type:"image"});

	$(".animation_1").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".animation_2").animated("flipInY", "flipOutY");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");



	function heightDetect(){
		$(".main_head").css("height", $(window).height());
	}

	heightDetect();
	
	$(window).resize(function(){
		heightDetect();
	});
	
	$(".toggle_menu").click(function() {
 		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span>");


	$(".toggle_menu").click(function(){
		if($(".top_mnu").is(":visible")){
		   $(".top_text").removeClass("h_opacity");
		   $(".top_mnu").fadeOut(600);
		   $(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
		   $(".top_text").addClass("h_opacity");
		   $(".top_mnu").fadeIn(600);
		   $(".top_mnu li a").addClass("fadeInUp animated");
		};
	});



});

$(window).load(function() {
  $(".loader_Inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});