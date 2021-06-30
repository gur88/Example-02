$(function(){

	// Preloader
	$('#preloader').fadeOut(1000);

	// Menu Hamburger
	$('.button-burger').click(function () {
		$('.menu-burger').toggleClass('d-none').css('order', '1');
		$('.menu__list').toggleClass('menu-opened');
	});

	// Modal
	$('.button-order').click(function() {
		$('#exampleModal').arcticmodal();
	});


	// Slide
	$('.reviews__slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	});
	
});

	




