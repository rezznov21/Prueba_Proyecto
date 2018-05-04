/*========================
El objeto con las propiedades del Scroll
========================== */

var ps= {


    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    cabezote: document.querySelector("header"),
    botonera: document.querySelectorAll("nav ul li a"),
    ruta: null ,
    intervalo: null,
    destinoScroll: 0,
    padding: 0

}


/*========================
El objeto con los metodos del Scroll
========================== */

var ms = {

    inicioScroll: function () {

        document.addEventListener("scroll", ms.efectoParallax)
        ps.cabezote.style.position = "fixed"
        ps.cabezote.style.zIndex = 10

        for(var i = 0; i < ps.botonera.length; i++){

            ps.botonera[i].addEventListener("click", ms.desplazamiento)

        }
    },

    efectoParallax: function () {

        ps.posicionScroll =  window.pageYOffset


        //Esto esta comentado para que se acomode el Cabezote conforme bajas el scroll, pero lo profeiero desde un inicio que nunca se pierda el cabezote
        /*if(ps.posicionScroll > 100){

            ps.cabezote.style.position = "fixed"
            ps.cabezote.style.zIndex = 10
            ps.padding = 80;
        }else{
            ps.cabezote.style.position = "relative"
            ps.cabezote.style.zIndex = 0
            ps.padding = 160
        }*/

        if(ps.posicionScroll > ps.cajaScroll.offsetTop){

            for(var i = 0; i < ps.articulos.length; i++) {
                ps.articulos[i].style.marginLeft = "0%"
            }
        }else{

            for(var i = 0; i < ps.articulos.length; i++){
                ps.articulos[i].style.marginLeft = ps.posicionScroll/22.8 -100 + "%"
            }

        }
    },

    desplazamiento: function (ruta) {

        ruta.preventDefault()
        ps.ruta  = ruta.target.getAttribute("href")

        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop-100

        ps.intervalo = setInterval(function () {

            if(ps.posicionScroll < ps.destinoScroll){

                ps.posicionScroll += 100

                if(ps.posicionScroll >= ps.destinoScroll){

                    ps.posicionScroll = ps.destinoScroll

                    clearInterval(ps.intervalo)
                }

            }else {


                ps.posicionScroll -= 100

                if (ps.posicionScroll <= ps.destinoScroll) {

                    ps.posicionScroll = ps.destinoScroll

                    clearInterval(ps.intervalo)
                }


            }


            window.scrollTo(0, ps.posicionScroll)
        },50)





    }

}


ms.inicioScroll()