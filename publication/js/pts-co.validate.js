"use strict";
var $textarea=jQuery(".form-group textarea"), $input=jQuery(".form-group input"), $form=jQuery("#aliados"), $btnSubmit=jQuery("#aliados .btn-submit"), $cal=jQuery("#aliados"), campoActive=function(e) {
    jQuery(e).focusin(function() {
        jQuery(this).parent().addClass("active")
    }
    ).focusout(function() {
        var e=jQuery(this);
        ""!=jQuery(e).val()?jQuery(e).parent().addClass("active"):jQuery(e).parent().removeClass("active")
    }
    )
}
;
jQuery(document).ready(function() {
    campoActive($input), campoActive($textarea), jQuery.validator.addMethod("letras", function(e, a) {
        return this.optional(a)||/^[a-z" "ñÑáéíóúÁÉÍÓÚ, .;]+$/i.test(e)
    }
    );
    var e=function(e, a) {
        e.insertAfter(a.parent())
    }
    ;

    jQuery.validator.addMethod("email", function(a, e) {
        return this.optional(e)||/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(a)
    });

    $form.validate( {
        debug:!0, errorElement:"div", errorClass:"msn-place", rules: {
            nombre: {
                required:!0, letras:!0
            }
            , celular: {
                required:!0, digits:!0, minlength:9, maxlength:10
            }
            , email: {
                required:!0, email:!0
            }
            , comentario: {
                required:!0, maxlength:250
            }
            , politicas: {
                required:!0
            }
        }
        , messages: {
            nombre: {
                required:"Indicanos tu nombre", letras:"Solo ingresa letras"
            }
            , celular: {
                required:"Indicanos un tel&eacute;fono de contacto", digits:"Solo ingresa n&uacute;meros", minlength:"N&uacute;mero no v&aacute;lido", maxlength:"N&uacute;mero no v&aacute;lido"
            }
            , email: {
                required:"Indicanos un email", email:"Formato de email inv&aacute;lido"
            }
            , comentario: {
                required:"C&uacute;entanos algo", maxlength:"El mensaje es muy largo"
            }
            , politicas: {
                required:"Debes aceptar los t&eacute;rminos y condiciones"
            }
        },
        submitHandler: function(form){
            var nombre = $("#nombre").val();
            var email = $("#email").val();
            var celular = $("#celular").val();
            var comentario = $("#comentario").val();
            $.ajax({
                url:"usuario.php",
                type:"POST",
                data:{nombre: nombre, email: email, celular: celular,comentario: comentario, accion: "insertar_usuario" },
                dataType:"json",
                success: function(data){
                    if(data){
                        alert("Se registro correctamente la información.");
                    }else{
                        alert("ERROR.");
                    }
                    location.href = 'index.html';
                }
            });
        }
        , errorPlacement:e
    }
    );
}
);