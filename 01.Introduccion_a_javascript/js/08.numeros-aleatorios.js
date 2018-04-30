var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;
/*=============================================
NUMEROS ALEATORIOS

El objeto Math permite realizar tareas matemáticas en los números.
Math.random = devuelve un número aleatorio entre 0 (inclusive), y 1 (exclusivo)
Math.floor = redondea al número menor del decimal
Math.ceil = redondea al número mayor del decimal
Math.round = devuleve el valor de x redondeado a su número entero más próximo
=============================================*/


numero = Math.round(Math.random()* 100);
numeroAleatorio.innerHTML =  numero;
