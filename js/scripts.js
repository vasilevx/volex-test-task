$(document).ready(function () {
	var $grey_toggler = $('.grey-header__menu-toggler');
	$grey_menu = $('.grey-header__menu');

	$blue_toggler = $('.blue-header__menu-toggler');
	$blue_menu = $('.blue-header__container');

	$grey_toggler.click(function () {
		$grey_toggler.toggleClass('grey-header__menu-toggler--show');
		$grey_menu.toggleClass('grey-header__menu--show');
	});

	$blue_toggler.click(function () {
		$blue_toggler.toggleClass('blue-header__menu-toggler--show');
		$blue_menu.toggleClass('blue-header__container--show');
	});


	//Модальное окно
	$('.white-header .btn-blue').click(function () {
		$('.modal-form-container').show();
	});

	$('.modal-form__close-btn').click(function () {
		$('.modal-form-container').hide();
	});




	$(window).resize(function () {
		if (Math.max(window.innerWidth, document.documentElement.clientWidth) >= 768) {
			$grey_menu.removeClass('grey-header__menu--show');
			$grey_toggler.removeClass('grey-header__menu-toggler--show');

			$blue_menu.removeClass('blue-header__container--show');
			$blue_toggler.removeClass('blue-header__menu-toggler--show');
		}
	});

	$('.slider').slick({
		autoplay: true,
		dots: true,
		arrows: true,
		nextArrow: $('.slider-arrow--next'),
		prevArrow: $('.slider-arrow--prev'),
		appendArrows: $('.slider-arrows'),
		appendDots: $('.slider-dots'),
		dotsClass: $('.slider-dots')
	});

	$('#tabs').easyResponsiveTabs({
		type: 'vertical', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		fit: true, // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		tabidentify: 'hor_1', // The tab groups identifier
	});




});