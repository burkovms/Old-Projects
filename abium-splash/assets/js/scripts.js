(function($){
	"use strict";
	/*-------------------- SCROLL SECTION	--------------------*/
	$('.btn-scroll').click( function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top
			}, 500);
		}
		return false;
	});

	/*------------------ BUTTON HOVER EFFECT	------------------*/
	$('.btn').on('mouseenter', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('.btn-hover-effect').css({top:relY, left:relX})
	})
	.on('mouseout', function(e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('.btn-hover-effect').css({top:relY, left:relX})
	});

	/*--------------------- IMAGE ROTATE	---------------------*/
	var imgRotate = $(".img-cover");
	imgRotate.on('mousemove', function (e) {
		var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
		var y = e.clientY - $(this).offset().top + $(window).scrollTop();

		var rY = map(x, 0, $(this).width(), -15, 15);
		var rX = map(y, 0, $(this).height(), -15, 15);

		$(this).children(".img-cover img").css("transform", "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)");
	});

	imgRotate.on('mouseenter', function () {
		$(this).children(".img-cover img").css({
			transition: "all " + 0.05 + "s" + " linear",
		});
	});

	imgRotate.on('mouseleave', function () {
		$(this).children(".img-cover img").css({
			transition: "all " + 0.3 + "s" + " linear",
		});

		$(this).children(".img-cover img").css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
	});

	function map(x, in_min, in_max, out_min, out_max)
	{
		return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}

}(jQuery));
