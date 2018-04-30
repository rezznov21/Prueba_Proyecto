/*=============================================
CONDICIONES
=============================================*/
	
var a = 5;
var b = 10;

if(a > b){

	console.log("a es mayor que b")
}else if(a == b){

	console.log("a es lo mismo que b");
}else{

	console.log("a no es lo mismo que b, y a es menor que b");
}

/*=============================================
CAMBIOS
=============================================*/

var dia = "lunes";

switch(dia){

	case "sábado":
	console.log("voy a estudiar php");
	break;

	case "martes":
	console.log("voy a estudiar CSS");
	break;

	case "jueves":
	console.log("voy a estudiar html");
	break;

	case "domingo":
	console.log("voy a descansar");
	break;

	default: console.log("Voy a estudiar javascript");
}	