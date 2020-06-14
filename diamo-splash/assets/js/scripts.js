(function ($) {
	"use strict";
	/*-------------------- SCROLL SECTION	--------------------*/
	$('.btn-scroll').click(function () {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top
			}, 500);
		}
		return false;
	});

	/*-------------------- SCROLL SECTION	--------------------*/
	$(window).on('load', function () {
		var showElements = $('img.img-animation'),
			effect = 'show-effect-scale';

		showElements
			.wrap("<div class='show-effect'></div>")
			.before("<span class='show-effect-part'></span>");

		if (showElements[0]) {
			new appear({
				elements: function elements() {
					return $('.show-effect');
				},
				appear: function appear(element) {
					var element = $(element);

					if (element.hasClass('show-effect-done')) {
						return;
					}

					element.addClass(effect);
					element.on('animationend', function () {
						$('.show-effect-part', this).remove()
						$(this).removeClass().addClass('show-effect-done');
					})
				},
				bounds: -30
			});
		}
	});

}(jQuery));
