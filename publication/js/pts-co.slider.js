'use strict';

jQuery(document).ready(function () {

	var slideHome = {
		slidesToShow: 1,
		arrows: true,
		mobileFirst: true,
		nextArrow: '<button type="button" class="icon icon-next slick-next"> ',
		prevArrow: '<button type="button" class="icon icon-prev slick-prev"> '
	};

	jQuery('.slider').slick(slideHome);

	console.log('hola slider');

	/*No pasar de aquí*/
});
//# sourceMappingURL=../maps/pts-co.slider.js.map
