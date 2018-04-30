/*


OBJETOS: Es una colección de propiedades y métodos

 */

var object = {

    // Una propiedad es una asociación entre un nombre y un valor.
    nombre: "Juan",
    edad: 31,

    //EL métodp es una función de un onjeto.
    descripcion: function () {

        console.log("Su nombre es  " + object.nombre + " y tiene " + object.edad + " años.")
    },

    saludar: function (saludo) {

        console.log(saludo + " " + object.nombre);
    }
}

object.descripcion();
object.saludar("Hola");

/*
Objetos Primitivos

//El objeto Date se utiliza para trabajar con fechas y horas.
https://www.w3schools.com/jsref/jsref_prototype_date.asp
 */

var d = new Date();
console.log(d.getFullYear());


