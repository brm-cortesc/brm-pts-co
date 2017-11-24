<?php 
require 'vendor/autoload.php';
/*
@ini_set("display_errors","5");
@error_reporting(E_ALL);
*/
//Importamos el archivo autoload.php presente en nuestro directorio vendor require 'vendor/autoload.php';
//Después importamos la clase Capsule escribiendo su ruta completa incluyendo el namespace
use Illuminate\Database\Capsule\Manager as Capsule;

// Se ingresa la zona horaria
date_default_timezone_set('America/Bogota');

//Creamos un nuevo objeto de tipo Capsule
$capsule = new Capsule;
//Indicamos en el siguiente array los datos de configuración de la BD
$capsule->addConnection([
    'driver' =>'mysql',
    'host' => 'localhost',
    'database' => 'brm_colombia',
    /* Local **
    'username' => 'root',
    'password' => '1nt3r4ct1v3',
    /**/
    /* Produccion **/
    'username' => 'root',
    'password' => '',
    /**/
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => 'puc_',
]);
 
//Y finalmente, iniciamos Eloquent
$capsule->bootEloquent();


function printVar( $variable, $title = "" ){
	$var = print_r( $variable, true );
	echo "<pre style='background-color:#dddd00; border: dashed thin #000000;'><strong>[$title]</strong> $var</pre>";
}


require_once("./class/cleanDoor.php");
require_once("./class/class.phpmailer.php");
require_once("./class/class.smtp.php");
require_once("./excel/php-export-data.class.php");
//Smarty
//require($_SERVER["DOCUMENT_ROOT"]."/Smarty/libs/Smarty.class.php");
//require_once("./Smarty/libs/Smarty.class.php");
/*require_once("../../Smarty/libs/Smarty.class.php");
$smarty = new Smarty();

$smarty->compile_check = true;
$smarty->left_delimiter = '{#';
$smarty->right_delimiter = '#}';
*/


?>