<?php 
require_once('config.php');
use Models\Usuario as Usuario;
if(isset($_POST['accion'])){
	$accion = $_POST['accion'];
}

if($accion == 'insertar_usuario'){
	
	$limpiar = new CleanDoor();

	$nombre = $limpiar->allClean($_REQUEST['nombre']);
	$email = $limpiar->allClean($_REQUEST['email']);
	$celular = $limpiar->allClean($_REQUEST['celular']);
	$comentario = $limpiar->allClean($_REQUEST['comentario']);


	$usuario = new Usuario();

	$usuario->nombre = $nombre;
	$usuario->correo = $email;
	$usuario->celular = $celular;
	$usuario->comentario = $comentario;
	
	$resultado = $usuario->save();

/*
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
//$mail->Host = ""; // A RELLENAR. Aquí pondremos el SMTP a utilizar. Por ej. mail.midominio.com
//$mail->Username = ""; 
//$mail->Password = ""; // A RELLENAR. Aqui pondremos la contraseña de la cuenta de correo
$mail->Port = 465; // Puerto de conexión al servidor de envio. 
$mail->From = "fsmartinez@unipanamericana.edu.co"; 
$mail->FromName = "Envio Automatico - Prueba"; //A RELLENAR Nombre a mostrar del remitente. 
$mail->AddAddress("santiago.martinez@brm.com.co"); 
$mail->IsHTML(true); // El correo se envía como HTML 
$mail->Subject = "Registro persona Super aliados"; // Este es el titulo del email. 
$body = "Nuevo comentadio de un aliado";
$body .= "Nombre: ".$nombre;
$body .= "Correo: ".$email;
$body .= "Celular: ".$celular;
$body .= "Comentario: ".$comentario;
$mail->Body = $body; // Mensaje a enviar. 
$exito = $mail->Send(); // Envía el correo.
//if($exito){ echo "El correo fue enviado correctamente."; }else{ echo "Hubo un problema. Contacta a un administrador."; } 
*/
	echo json_encode($resultado);

}



?>