const $textarea    = jQuery('.form-group textarea');
const $input     = jQuery('.form-group input');
const $form      = jQuery('#aliados');
const $btnSubmit = jQuery('#aliados .btn-submit');
const $cal       = jQuery('#aliados');

//Estado activo de los campos//
const campoActive = (el) =>{

  jQuery(el)
    .focusin(function() {
      jQuery(this).parent().addClass('active')
    
    })
    .focusout(function() {

      let $self = jQuery(this);

      if (jQuery($self).val() != '' ){
        jQuery($self).parent().addClass('active')

      }else{
        jQuery($self).parent().removeClass('active')

      }
    });

};


jQuery(document).ready( ()=>{

  //inputs activos
  campoActive($input);
  campoActive($textarea);


  //metodo para aceptar texto con espacios y caracteres especiales

  jQuery.validator.addMethod('letras', function(val, el){
    return this.optional(el) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(val);
  });


  //Ubicacion de mensaje de error//
  const errorPlacement = (error, element)=>{
    error.insertAfter(element.parent())
  };

  $form.validate({
    debug: true,

    errorElement: 'div',
    errorClass: 'msn-place',

    rules: {

      nombre:       {required:true,letras:true},
      celular:     {required:true, digits:true, minlength:9, maxlength:10 },
      email:      {required:true, email:true},
      comentario:    { required:true, maxlength:250  },
      politicas:    { required:true}

    },


    messages: {
      nombre:{
        required:'Indicanos tu nombre',
        letras: 'Solo ingresa letras'
      },
      celular:{
        required: 'Indicanos un tel&eacute;fono de contacto' ,
        digits:'Solo ingresa n&uacute;meros',
        minlength: 'N&uacute;mero no v&aacute;lido',
        maxlength: 'N&uacute;mero no v&aacute;lido'
      },
      email:{
        required: 'Indicanos un email' ,
        email: 'Formato de email inv&aacute;lido'
      },
      comentario:{
        required: 'C&uacute;entanos algo',
        maxlength: 'El mensaje es muy largo'

      },
      politicas:{
        required: 'Debes aceptar los t&eacute;rminos y condiciones'

      }

    },

    errorPlacement

  });

  
/*No pasar de acá para el DOM ready*/
});