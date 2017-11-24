<?php
require("config.php");
use Models\Usuario;

//if (isset($verify) && $verify == "Clr-C0r-".date('d')) {
	$datos = Usuario::all();
	$fecha = date('Y-m-d H:i:s');

	$excel = new ExportDataExcel('browser');
	$excel->filename = $fecha."-personas registradas.xls";

	// Setting the values of the headers and data of the excel file
	// and these values comes from the other file which file shows the data
	$excelHeader = array(array(
		"Nombre",
		"Email",
		"Celular",
		"Comentario",
		"Fecha"
		));
	
	if($datos){
		$excelValues = array();
		for( $i=0; $i < count($datos); $i++){
			$data[$i][] = $datos[$i]->nombre;
			$data[$i][] = $datos[$i]->correo;
			$data[$i][] = $datos[$i]->celular;
			$data[$i][] = $datos[$i]->comentario;
			$data[$i][] = $datos[$i]->fecha;
			
				
		}
		
		$excel->initialize();

		foreach($excelHeader as $row) {
			$excel->addRow($row);
		}
		foreach($data as $row) {
			$excel->addRow($row);
		}
		$excel->finalize();
	}
//}