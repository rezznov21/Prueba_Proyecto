/*=======================================================
Objetos con las propiedades de la calculadora.
 ========================================================*/

var propiedades = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null ,
    digito: null ,
    operaciones: document.querySelector("#operaciones"),
    cantidadSig: 0,
    cantidadDecimal: false,
    resultado: false
}


/*=======================================================
Objetos con los metodos de la calculadora
 ========================================================*/

var metodos = {

    inicio: function () {


        for(var i = 0; i < propiedades.teclas.length; i ++){
            propiedades.teclas[i].addEventListener("click", metodos.oprimirTecla)
        }
    },

    teclado: function(){

      document.addEventListener("keydown", metodos.oprimir)
    },

    oprimir: function(tecla){


        if(tecla.keyCode == 48 || tecla.keyCode == 96){


            propiedades.accion = "numero"
            propiedades.digito = 0
        }
        if(tecla.keyCode == 49 || tecla.keyCode == 97){


            propiedades.accion = "numero"
            propiedades.digito = 1
        }
        if(tecla.keyCode == 50 || tecla.keyCode == 98){


            propiedades.accion = "numero"
            propiedades.digito = 2
        }
        if(tecla.keyCode == 51 || tecla.keyCode == 99){


            propiedades.accion = "numero"
            propiedades.digito = 3
        }
        if(tecla.keyCode == 52 || tecla.keyCode == 100){


            propiedades.accion = "numero"
            propiedades.digito = 4
        }
        if(tecla.keyCode == 53 || tecla.keyCode == 101){


            propiedades.accion = "numero"
            propiedades.digito = 5
        }
        if(tecla.keyCode == 54 || tecla.keyCode == 102){


            propiedades.accion = "numero"
            propiedades.digito = 6
        }
        if(tecla.keyCode == 55 || tecla.keyCode == 103){


            propiedades.accion = "numero"
            propiedades.digito = 7
        }
        if(tecla.keyCode == 56 || tecla.keyCode == 104){


            propiedades.accion = "numero"
            propiedades.digito = 8
        }
        if(tecla.keyCode == 57 || tecla.keyCode == 105){


            propiedades.accion = "numero"
            propiedades.digito = 9
        }
        if(tecla.keyCode == 187 || tecla.keyCode == 107){


            propiedades.accion = "signo"
            propiedades.digito = "+"
        }
        if(tecla.keyCode == 189 || tecla.keyCode == 109){


            propiedades.accion = "signo"
            propiedades.digito = "-"
        }
        if(tecla.keyCode == 88 || tecla.keyCode == 106){


            propiedades.accion = "signo"
            propiedades.digito = "*"
        }
        if(tecla.keyCode == 111){


            propiedades.accion = "signo"
            propiedades.digito = "/"
        }
        if(tecla.keyCode == 190 || tecla.keyCode == 110){


            propiedades.accion = "decimal"
            propiedades.digito = "."
        }
        if(tecla.keyCode == 13){


            propiedades.accion = "igual"

        }
        if(tecla.keyCode == 8){



            metodos.borrarCalculadora();
        }


        metodos.calculadora(propiedades.accion, propiedades.digito)
    },

    oprimirTecla: function (tecla) {

        propiedades.accion = tecla.target.getAttribute("class");
        propiedades.digito = tecla.target.innerHTML;

        metodos.calculadora(propiedades.accion, propiedades.digito)
    },

    calculadora: function (accion, digito) {

        switch (accion){

            case "numero":

                propiedades.cantidadSig = 0;

                if(propiedades.operaciones.innerHTML == 0){

                    propiedades.operaciones.innerHTML = digito
                }else {

                    if(propiedades.resultado){

                        propiedades.resultado = false
                        propiedades.operaciones.innerHTML = digito

                    }else{

                        propiedades.operaciones.innerHTML += digito

                    }

                    //propiedades.operaciones.innerHTML += digito
                }
                break;

            case "signo":

                propiedades.cantidadSig++

                if(propiedades.cantidadSig == 1){

                    if(propiedades.operaciones.innerHTML == 0){

                        propiedades.operaciones.innerHTML = 0
                    }else{

                        propiedades.operaciones.innerHTML += digito
                        propiedades.cantidadDecimal = false
                        propiedades.resultado = false

                    }

                }

                break;

            case "decimal":

                if(!propiedades.cantidadDecimal){

                    propiedades.operaciones.innerHTML +=digito
                    propiedades.cantidadDecimal = true
                    propiedades.resultado = false
                }

                break;

            case "igual":

                propiedades.operaciones.innerHTML = eval(propiedades.innerHTML)
                propiedades.resultado = true
                break;

        }
    },

    borrarCalculadora: function () {

        propiedades.operaciones.innerHTML = 0;

    }
}

metodos.inicio();
metodos.teclado();