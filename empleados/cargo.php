<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "propinas";


$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);
// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM cargo WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM cargo WHERE id=".$_GET["borrar"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post 
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    
              
    $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO empleados(nombre,apellido,identificacion,id_cargo) VALUES ('valor1','valor2','valor3','valor4')");
 
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }else{  echo json_encode(["success"=>0]); }
    
    
    
   
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización

// Consulta todos los registros de la tabla empleados
// Consulta todos los registros de la tabla empleados
$sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM cargo ");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>0]]); }


?>



