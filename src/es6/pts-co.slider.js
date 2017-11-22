jQuery(document).ready(()=>{

	const slideHome = {
	    slidesToShow: 1,
	    arrows: true,
	    mobileFirst: true,
	    nextArrow:'<button type="button" class="icon icon-next slick-next"> ',
	    prevArrow:'<button type="button" class="icon icon-prev slick-prev"> '
  	};

  	jQuery('.slider').slick(slideHome);

	console.log('hola slider')

/*No pasar de aquí*/
});