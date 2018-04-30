/*=============================================
Variables
=============================================*/

// Variables numéricas 
var numero = 5;

// Variables de texto
var palabra = "palabra";

// Variables booleanas
var booleana = true;

// Variables de tipo arreglo
var colores = ["rojo", "amarillo", true, 5];

// Variables de tipo objeto (propiedad:valor) se puede poner sin comillas
var jugo = {ingrediente1:"fresa",
			ingrediente2:"mandarina",
    		ingrediente3 :"banano"};

console.log("jugo", jugo.ingrediente1); //Para acceder al valor que queremos

// Variables DOM
/*
El DOM es la estructura de objetos que genera el navegador cuando se carga un documento y se puede alterar mediante Javascript para cambiar dinámicamente los contenidos y aspecto de la página
*/

var caja = document.querySelector("#caja"); // Dentro del queryselector va el elemento que voy a seleccionar.

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajas = document.querySelectorAll(".cajas"); // En CSS cuando vas a seleccionar una clase es con .<nombre_de_la_clase>

