jQuery(document).ready(()=>{

	const slideHome = {
	    slidesToShow: 1,
	    arrows: true,
	    mobileFirst: true,
	    nextArrow:'<button type="button" class="icon icon-next slick-next"> ',
	    prevArrow:'<button type="button" class="icon icon-prev slick-prev"> '
  	};

  	jQuery('.slider').slick(slideHome);


  	/*btns*/

  	jQuery('.btn').click( function (e) {
  		let type = jQuery(this).attr('class').split(/\s+/);
  		
  		let btnType = type.length - 1

  		switch(type[btnType]){

  			case('btn-menu'):

  				jQuery('.menu').toggleClass('active');
  				setTimeout(()=>{
  					jQuery('body').toggleClass('body-fixed');
  				}, 1000)

  				break;

  			case('btn-who'):

  				e.preventDefault();
		  		jQuery('#who-modal').modal('show');
  				break;


  			case('btn-beneficios'):

  				e.preventDefault();

		  		jQuery('#beneficios-modal').modal('show');

  				break;

  			case('btn-close'):

  				if( jQuery(this).parent().is('.container-menu') ){
            e.preventDefault();
	  			  
	  				jQuery('.menu').toggleClass('active');
  					
  					jQuery('body').toggleClass('body-fixed');

  				}else{
            e.preventDefault();
            jQuery(this).parent().removeClass('active')
            jQuery('.btn-vacante').removeClass('active')
          }
  				break;

  		};


  	} );

    //Desplegable de vacantes//
    jQuery('.btn-vacante').click(function(e) {
      e.preventDefault();
      jQuery('.btn-vacante').removeClass('active');

      jQuery(this).toggleClass('active');
      jQuery('.oferta-desc').removeClass('active');

      jQuery(this).parent().parent().find('.oferta-desc').toggleClass('active');

     
    });


    /*Scroll suavizado con anclas*/
    const go = (val) =>{
      
      let pos = jQuery(val).attr('href');

      jQuery('html, body').animate({
        scrollTop: jQuery(pos).offset().top
      }, 1000);

    };

    // jQuery('.navigator a').click( function (e) {
    //   e.preventDefault();
    //   go(this);
    // });

    /*scroll suavizado con menu*/

    jQuery('.menu li a, .navigator a').click(function(e) {
     
     let that = this;
     let href = window.location.pathname;
     let goTo = jQuery(this).prop('pathname')

     // console.log(goTo)

     // console.log(href)

      if(jQuery(this).prop('hash') && goTo == href ){
         e.preventDefault();
        go(this);
        jQuery('.menu').toggleClass('active');

        jQuery('body').removeClass('body-fixed');

      }
    });


    //Mobile sticky headers//

    if( jQuery(window).width() < 768 ){
      jQuery('header').affix({
        offset: {
          top: 25
        }
      });

    };

    const locacion = window.location.hash

    if (locacion != ''){

      jQuery('html, body').animate({
        scrollTop: jQuery(locacion).offset().top
      }, 1000);



    };


/*No pasar de aquí*/
});