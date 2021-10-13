/*-------------------- height block --------------------*/
$(window).on('load resize',function(){
	var wrapHeight = $('.partners-list-wrap:eq(0)').find('.partners-list li:eq(0) .partner-item').height();
	$('.partners-list-wrap:eq(0)').css({'min-height': wrapHeight+'px'});
});
$(window).load( function(){
	/*-------------------- footer fixed --------------------*/
	var footerHeight = $('footer').height();
	if($('body').height() < $(window).height()){
		$('body').addClass('footer-fix');
		$('body').css({'padding-bottom': footerHeight + 'px'});
	}else{
		$('body').removeClass('footer-fix');
		$('body').css({'padding-bottom': '0px'});
	}
});

$(document).ready( function(){
	/*-------------------- OPEN MENU	--------------------*/
	$('.nav-btn').click(function(){
		$('.nav-wrap').addClass('active-mobile');
		$('body').addClass('overflow');
		return false;
	});
	$('.nav-btn-close').click(function(){
		$('.nav-wrap').removeClass('active-mobile');
		$('body').removeClass('overflow');
	});

	/*-------------------- SCROLL SECTION	--------------------*/
	$('.nav-list li a').click( function(){
		$('.nav-menu').removeClass('active');
	});
	/*-------------------- MASK --------------------*/
	$('.user-phone').mask("+7 (999) 999-99-99");
	/*-------------------- MODAL WINDOW	--------------------*/
	$('.popup-open').on('click', function(){
		$('body').addClass('modal');
		$('.popup').removeClass('active');
		rel=$(this).attr('rel');
		$('.popup-'+rel).addClass('active');
		return false;
	});
	$('.popup-close, .overlay').on('click', function(){
		$('body').removeClass('modal');
		$('.popup').removeClass('active');
	});

	/*-------------------- PLAY/STOP VIDEO --------------------*/
	$('.close_vid, .overlay').click(function() {
		$("iframe").each(function() {
			$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
		});
	});
	$('.play_video').click(function() {
		$("iframe").each(function() {
			$(this)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
		});
	});
	/*----------------------- programm open -----------------------*/
	$('.programm-btn h4').click(function(){
		$(this).parents('.programms-item-cover').find('.programm-item').toggle('ease');
		$(this).parents('.programms-item-cover').toggleClass('active');
	});
	/* slider about */
	$('.programm-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		speed: 500,
		fade:true,
		cssEase: 'ease-in-out',
		asNavFor: '.programm-slider-nav'
	});
	$('.programm-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		asNavFor: '.programm-slider-for',
		cssEase: 'ease-in-out',
		focusOnSelect: true,
		arrows: false,
	});

	/*-------------------- SCROLL STOCK	--------------------*/
	$('.stock-item-info .btn-black,.stock-article-info .btn-black').click( function(){
		$('.stock-article-item').removeClass('active');
		var scroll_el = $(this).attr('href');
		$(scroll_el).addClass('active');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top
			}, 500);
		}
		return false;
	});

	// $('.stock-article-info .btn-black').click(function(){
		// $(this).parents('.stock-article-item').removeClass('active');
		// return false;
	// });

	/*-------------------- slider treners --------------------*/
	$('.treners-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		speed: 500,
		fade:true,
		cssEase: 'ease-in-out',
		asNavFor: '.treners-slider-nav'
	});
	$('.treners-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		asNavFor: '.treners-slider-for',
		cssEase: 'ease-in-out',
		focusOnSelect: true,
		arrows: false,
	});

	/*-------------------- treners open item --------------------*/
	$('.partners-list-wrap h4').click(function(){
		$('.partners-list-wrap').not($(this).parents('.partners-list-wrap')).removeClass('active');
		$(this).parents('.partners-list-wrap').toggleClass('active');
		var itemHeight = $(this).parents('.partners-list-wrap').find('.partners-list>li.active .partner-item').height();
		$('.partners-list-wrap').css({'min-height': 'auto'});
		$(this).parents('.partners-list-wrap').css({'min-height': itemHeight+'px'});
	});

	$('.partner-btn').click(function(){
		$(this).parents('li').find('.partner-btn').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.partners-list').find('li').removeClass('active');
		$(this).parents('li').addClass('active');
		var itemHeight = $(this).parents('li').find('.partner-item').height();
		$('.partners-list-wrap').css({'min-height': 'auto'});
		$(this).parents('.partners-list-wrap').css({'min-height': itemHeight+'px'});
	});
	/*-------------------- datepicker --------------------*/
	$( "#datepicker" ).datepicker({
		showOtherMonths: true,
		selectOtherMonths: true
	});
	/*-------------------- русификатор для datepicker --------------------*/
	$.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

	$('.datepicker-btn').click(function(){
		$(this).toggleClass('active');
		$('.datepicker').toggle('ease');
	});
});


