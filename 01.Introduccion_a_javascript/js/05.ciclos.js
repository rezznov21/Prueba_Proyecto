/*=============================================
CICLO FOR
=============================================*/
var cajas = document.querySelectorAll(".cajas");
// cajas[0].style.width = "50px";
// cajas[0].style.height = "50px";
// cajas[0].style.background = "blue";

for(var i = 0; i < cajas.length; i++){

	cajas[i].style.width = "50px";
	cajas[i].style.height = "50px";
	cajas[i].style.background = "blue";
	cajas[i].style.marginTop = "5px";  // En javascript los estilos con mas de dos palabras se escriben con estilo camelo
	cajas[i].style.marginRight = "5px";
	cajas[i].style.display = "inline-block";

}

for(var i = 0; i < 5; i++){
    console.log("i", i);


}

/*=============================================
CICLO WHILE
=============================================*/

var n = 1;

while(n <= 5){

	n++;
}

/*=============================================
CICLO DO WHILE
=============================================*/

var p = 1;

do{
	p++;
}

while(p <= 5);