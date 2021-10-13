	$(window).load( function(){
		/*-------------------- time preloader --------------------*/
		var time = 3;
		$('.charge i').each(function(){
			var i = 1,
			num = $(this).data('num'),
			step = 1000 * time / num,
			that = $(this),
			int = setInterval(function(){
				if (i <= num) {
					that.html(i);
				}
				else {
					clearInterval(int);
				}
				i++;
			},step);
		});
		/*-------------------- animation preloader --------------------*/
		setTimeout(function(){
			$('.preloader').hide(700);
			setTimeout(function(){
				$('.main').addClass('active');
				if($(window).width() > 1024 ){
					$('.nav-wrap').addClass('active');
				}
				$('body').removeClass('overflow');
			},700);
		},4000);
	});
$(document).ready( function(){
	/*-------------------------SLIDER ONE-------------------------*/
	$('.directions-one').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 500,
		fade:true,
		arrows: true,
		draggable: false,
		nextArrow: '<span class="slick-arrow-next"><img src="img/arrow-right.png" alt="" /></span>'
	});
	var dottQty = $('.directions-one .slick-dots li').size();
	$('.directions-one .slick-dots').append("<li class='qty'>" + dottQty + "</li>");

	/*-------------------------SLIDER TWO-------------------------*/
	$('.directions-two').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 500,
		fade:true,
		arrows: true,
		draggable: false,
		nextArrow: '<span class="slick-arrow-next"><img src="img/arrow-right-white.png" alt="" /></span>'
	});
	var dottQty2 = $('.directions-two .slick-dots li').size();
	$('.directions-two .slick-dots').append("<li class='qty'>" + dottQty2 + "</li>");

	/*-------------------------SLIDER TREE-------------------------*/
	$('.directions-tree').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 500,
		fade:true,
		arrows: true,
		draggable: false,
		nextArrow: '<span class="slick-arrow-next"><img src="img/arrow-right.png" alt="" /></span>'
	});
	var dottQty2 = $('.directions-tree .slick-dots li').size();
	$('.directions-tree .slick-dots').append("<li class='qty'>" + dottQty2 + "</li>");

	/*-----------------------секция направления-----------------------*/
	var target = $('.directions-one');
	var targetPos = target.offset().top + 300;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;
	$(window).scroll(function(){
		var winScrollTop = $(this).scrollTop();
		if(winScrollTop > scrollToElem){
			$('.dir-wrap').removeClass('active');
			$('.directions-one').addClass('active');
			$('.directions-one-wrap').addClass('active');
		}
		if(winScrollTop - 300 < scrollToElem){
			$('.directions-one-wrap').removeClass('active');
		}
	});
	$('.directions-one .slick-arrow').click(function(){
		$('.directions-one').addClass('dir-slide');
	});
	/*направление 2*/
	var target_2 = $('.directions-two');
	var targetPos_2 = target_2.offset().top + 300;
	var winHeight_2 = $(window).height();
	var scrollToElem_2 = targetPos_2 - winHeight_2;
	$(window).scroll(function(){
		var winScrollTop_2 = $(this).scrollTop();
		if(winScrollTop_2 > scrollToElem_2){
			$('.dir-wrap').removeClass('active');
			$('.directions-two').addClass('active');
			$('.directions-two-wrap').addClass('active');
		}
	});
	$('.directions-two .slick-arrow').click(function(){
		$('.directions-two').addClass('dir-slide');
	});
	/*направление 3*/
	var target_3 = $('.directions-tree');
	var targetPos_3 = target_3.offset().top + 300;
	var winHeight_3 = $(window).height();
	var scrollToElem_3 = targetPos_3 - winHeight_3;
	$(window).scroll(function(){
		var winScrollTop_3 = $(this).scrollTop();
		if(winScrollTop_3 > scrollToElem_3){
			$('.dir-wrap').removeClass('active');
			$('.directions-tree').addClass('active');
			$('.directions-tree-wrap').addClass('active');
		}
	});
	$('.directions-tree .slick-arrow').click(function(){
		$('.directions-tree').addClass('dir-slide');
	});

	/* slider about */
	$('.about-slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			speed: 400,
			// fade:true,
			cssEase: 'ease-in-out',
			asNavFor: '.about-slider-nav'
		});
		$('.about-slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: true,
			asNavFor: '.about-slider-for',
			cssEase: 'ease-in-out',
			focusOnSelect: true,
			arrows: true,
			nextArrow: '<span class="slick-arrow-next"><img src="img/about-arrow-right.png" alt="" /></span>',
			prevArrow: '<span class="slick-arrow-prev"><img src="img/about-arrow-left.png" alt="" /></span>',
			responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
					dots: false
				}
			},
			{
				breakpoint: 575,
				settings: {
					arrows: false,
					dots: false,
					slidesToShow: 4,
				}
			}
			]
		});
		var dottQtyAbout = $('.about-slider-nav .slick-dots li').size();
		$('.about-slider-nav .slick-dots').append("<li class='qty'>" + dottQtyAbout + "</li>");

	/*------------------ акордион преимущества ------------------*/
	$('.advantages-main .advantages-wrap > li').click(function(){
		$('.advantages-main .advantages-wrap > li').removeClass('active');
		$(this).addClass('active');
	});

	/*------------------ scroll advantages ------------------*/
	var target_advantages = $('.advantages-main');
	var targetPos_advantages = target_advantages.offset().top + 300;
	var winHeight_advantages = $(window).height();
	var scrollToElem_advantages = targetPos_advantages - winHeight_advantages;
	var scrollTrue = true;
	$(window).scroll(function(){
		var winScrollTop_advantages = $(this).scrollTop();
		if(winScrollTop_advantages > scrollToElem_advantages){
			$('.advantages-main').addClass('active');
			$('.advantages-main').addClass('active-title');
			$('.dir-wrap').removeClass('active');
		}
		if(winScrollTop_advantages > scrollToElem_advantages + 800 && scrollTrue == true ){
			$('.advantages-main .advantages-wrap > li').removeClass('active');
			$('.advantages-main .advantages-wrap > li.item2').addClass('active');
			scrollTrue = false;
		}
		if(winScrollTop_advantages - 10 < scrollToElem_advantages){
			$('.advantages-main').removeClass('active-title');
		}
	});

	/*------------------ scroll abbout ------------------*/
	var target_about = $('.about-main');
	var targetPos_about = target_about.offset().top + 300;
	var winHeight_about = $(window).height();
	var scrollToElem_about = targetPos_about - winHeight_about;
	$(window).scroll(function(){
		var winScrollTop_about = $(this).scrollTop();
		if(winScrollTop_about > scrollToElem_about){
			$('.about-main').addClass('active');
			$('.about-main').addClass('active-title');
			$('.advantages').removeClass('active-title');
		}
		if(winScrollTop_about - 10 < scrollToElem_about){
			$('.about-main').removeClass('active-title');
		}
	});

	/*------------------ scroll partners ------------------*/
	var target_partners = $('.partners');
	var targetPos_partners = target_partners.offset().top + 300;
	var winHeight_partners = $(window).height();
	var scrollToElem_partners = targetPos_partners - winHeight_partners;
	$(window).scroll(function(){
		var winScrollTop_partners = $(this).scrollTop();
		if(winScrollTop_partners > scrollToElem_partners){
			$('.partners').addClass('active');
			$('.partners').addClass('active-title');
			$('.about-main').removeClass('active-title');
			setTimeout(function(){
				$('.partners').addClass('active-tab-slide');
			},3000);
		}
		if(winScrollTop_partners - 10 < scrollToElem_partners){
			$('.partners').removeClass('active-title');
		}
	});

	/*------------------ акордион преимущества ------------------*/
	$('.registration .registration-wrap > li').click(function(){
		$('.registration .registration-wrap > li').removeClass('active');
		$(this).addClass('active');
	});
	/*------------------ scroll registration ------------------*/
	var target_registration = $('.registration');
	var targetPos_registration = target_registration.offset().top + 300;
	var winHeight_registration = $(window).height();
	var scrollToElem_registration = targetPos_registration - winHeight_registration;
	var TrueRregistration = true;
	$(window).scroll(function(){
		var winScrollTop_registration = $(this).scrollTop();
		if(winScrollTop_registration > scrollToElem_registration){
			$('.registration').addClass('active');
			$('.registration').addClass('active-title');
			$('.partners').removeClass('active-title');
		}
		if(winScrollTop_registration > scrollToElem_registration + 800 && TrueRregistration == true ){
			$('.registration .registration-wrap > li').removeClass('active');
			$('.registration .registration-wrap > li.item2').addClass('active');
			TrueRregistration = false;
		}
		if(winScrollTop_registration - 100 < scrollToElem_registration){
			$('.registration').removeClass('active-title');
		}
	});

	/*------------------ scroll certificates ------------------*/
	var target_certificates = $('.certificates');
	var targetPos_certificates = target_certificates.offset().top + 300;
	var winHeight_certificates = $(window).height();
	var scrollToElem_certificates = targetPos_certificates - winHeight_certificates;
	$(window).scroll(function(){
		var winScrollTop_certificates = $(this).scrollTop();
		if(winScrollTop_certificates > scrollToElem_certificates){
			$('.certificates').addClass('active');
			$('.certificates').addClass('active-title');
			$('.registration').removeClass('active-title');
		}
		if(winScrollTop_certificates - 10 < scrollToElem_certificates){
			$('.certificates').removeClass('active-title');
		}
	});
	/*------------------ scroll question ------------------*/
	var target_question = $('.question');
	var targetPos_question = target_question.offset().top + 300;
	var winHeight_question = $(window).height();
	var scrollToElem_question = targetPos_question - winHeight_question;
	$(window).scroll(function(){
		var winScrollTop_question = $(this).scrollTop();
		if(winScrollTop_question > scrollToElem_question){
			$('.question').addClass('active');
			$('.question').addClass('active-title');
			$('.certificates').removeClass('active-title');
		}
		if(winScrollTop_question - 10 < scrollToElem_question){
			$('.question').removeClass('active-title');
		}
	});
	/*------------------ scroll s-faq ------------------*/
	var target_faq = $('.s-faq');
	var targetPos_faq = target_faq.offset().top + 300;
	var winHeight_faq = $(window).height();
	var scrollToElem_faq = targetPos_faq - winHeight_faq;
	$(window).scroll(function(){
		var winScrollTop_faq = $(this).scrollTop();
		if(winScrollTop_faq > scrollToElem_faq){
			$('.s-faq').addClass('active');
			$('.s-faq').addClass('active-title');
			$('.question').removeClass('active-title');
		}
		if(winScrollTop_faq - 10 < scrollToElem_faq){
			$('.s-faq').removeClass('active-title');
		}
	});
	/*------------------ scroll question ------------------*/
	var target_contacts = $('.contacts');
	var targetPos_contacts = target_contacts.offset().top + 300;
	var winHeight_contacts = $(window).height();
	var scrollToElem_contacts = targetPos_contacts - winHeight_contacts;
	$(window).scroll(function(){
		var winScrollTop_contacts = $(this).scrollTop();
		if(winScrollTop_contacts > scrollToElem_contacts){
			$('.contacts').addClass('active');
			$('.contacts').addClass('active-title');
			$('.s-faq').removeClass('active-title');
		}
		if(winScrollTop_contacts - 10 < scrollToElem_contacts){
			$('.contacts').removeClass('active-title');
		}
	});
	/*------------------ scroll s-final ------------------*/
	var target_final = $('.s-final');
	var targetPos_final = target_final.offset().top + 300;
	var winHeight_final = $(window).height();
	var scrollToElem_final = targetPos_final - winHeight_final;
	$(window).scroll(function(){
		var winScrollTop_final = $(this).scrollTop();
		if(winScrollTop_final > scrollToElem_final){
			$('.s-final').addClass('active');
			$('.s-final').addClass('active-title');
			$('.contacts').removeClass('active-title');
		}
		if(winScrollTop_final - 10 < scrollToElem_final){
			$('.s-final').removeClass('active-title');
		}
	});
	/*--------------------- slider about ---------------------*/
	$('.partners-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		speed: 1000,
		fade: true,
		nextArrow: '<span class="slick-arrow-next"><img src="img/arrow-right.png" alt="" /></span>',
		prevArrow: '<span class="slick-arrow-prev"><img src="img/arrow-left.png" alt="" /></span>'
	});

	var dottQty_partners = $('.partners .slick-dots li').size();
	$('.partners .slick-dots').append("<li class='qty'>" + dottQty_partners + "</li>");
	/*----------------------- registration acordion -----------------------*/
	$('.registration-info li .title-tab').click(function(){
		$(this).toggleClass('active');
		$(this).parents('li').children('p').toggle('ease');
		if($(window).width() > 1024 ){
			$('.registration.active .registration-wrap > li.active img').css({top: '52%'});
			setTimeout(function(){
				$('.registration.active .registration-wrap > li.active img').css({top: '48%'});
			},300);
			setTimeout(function(){
				$('.registration.active .registration-wrap > li.active img').css({top: '50%'});
			},800);
		}
	});

	/*-------------------- TABS --------------------*/
	$('.tab1').addClass('active');
	$('.cert-btn-wrap .item1').addClass('active');
	$('.cert-btn-wrap .item').on('click', function(){
		var tab = $(this).attr('rel');
		$(this).parents('.tab-wrap').find('.item').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.tab-wrap').find('.tab').removeClass('active');
		$(this).parents('.tab-wrap').find('.'+tab).addClass('active');
		$(this).parents('.tab-wrap').find('.'+tab).addClass('animation-tab');
	});

	/*-------------------- question -------------------*/
	$('.step1').addClass('active');
	$('.question-bg-1').addClass('active');
	$('.step1 .question-list li').click(function(){
		var question = $(this).text();
		$(this).parents('.question-item').find('.question-inp').val(question);
		$(this).parents('.step1').removeClass('active');
		$('.step2').addClass('active');
		$('.question-bg-1').removeClass('active');
		$('.question-bg-2').addClass('active');

	});
	$('.step2 .question-list li').click(function(){
		var question = $(this).text();
		$(this).parents('.question-item').find('.question-inp').val(question);
		$(this).parents('.step2').removeClass('active');
		$('.step3').addClass('active');
		$('.question-bg-2').removeClass('active');
		$('.question-bg-3').addClass('active');
	});
	$('.step3 .question-list li').click(function(){
		var question = $(this).text();
		$(this).parents('.question-item').find('.question-inp').val(question);
		$(this).parents('.step3').removeClass('active');
		$('.step4').addClass('active');
		$('.question-bg-3').removeClass('active');
		$('.question-bg-4').addClass('active');
	});
	$('.step4 .question-list li').click(function(){
		$('.question-info-title').addClass('no-active');
		$('.question-title-form').addClass('active');
		var question = $(this).text();
		$(this).parents('.question-item').find('.question-inp').val(question);
		$(this).parents('.step4').removeClass('active');
		$('.step-last').addClass('active');
		$('.question-bg-4').removeClass('active');
		$('.question-bg-5').addClass('active');
	});

	/*----------------------- faq acordion -----------------------*/
	$('.faq-wrap li .title').click(function(){
		$(this).parents('li').toggleClass('active');
		$(this).parents('li').children('p').toggle('ease');
	});
});