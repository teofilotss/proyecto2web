document.getElementById("main-header").addEventListener("click", function(){  // document.getElementById("main-header"). Así seleccionados un objete de la pagina web para realizar una determinada tarea
document.body.style.fontSize="15px"; //  asi asignaos para que cambia una propiedad
/* El método addEventListener() nos sirve para registra un evento a un objeto en específico
 en el ejemplo anterior evento click
 */
});

var muestraFoto = document.getElementById("visor"); //  asi se declara varialbes

document.getElementById("boton-dibujando").addEventListener("click", function(){
        muestraFoto.src = "images/diseñando.jpg";
        //aqui se escriben las instrucciones que se ejecutarán cunado el objeto recibo el evento
});

document.getElementById("boton-mundolaboral").addEventListener("click",function(){
    muestraFoto.src = "images/mundo_laboral.jpg";
});

document.getElementById("boton-tecnologia").addEventListener("click", function(){
    muestraFoto.src = "images/tecnologia.jpg";
});

document.getElementById("boton-mundo").addEventListener("click", function(){
    muestraFoto.src = "images/ubicando_mundo.jpg";
});

document.getElementById("boton-ejecutivos").addEventListener("click", function(){
    muestraFoto.src = "images/ejecutivos.jpg";
});

// declaracion de variables para arreglos
let frases=[];
frases[0]="El alma no tiene género. (Anónimo)";
frases[1] = "La primera igualdad es la equidad. (Víctor Hugo)";
frases[2] = "La igualdad implica individualidad. (Trey Anastasio)";
frases[3] = "Si practicas la equidad, aunque mueras no perecerás. (Lao-Tsé)";

let botonFrase1 = document.getElementById("frase1");
let botonFrase2 = document.getElementById("frase2");
let botonFrase3 = document.getElementById("frase3");
let botonFrase4 = document.getElementById("frase4");
let FraseDia = document.getElementById("frase-dia");

botonFrase1.addEventListener("click", function(){
    FraseDia.innerHTML = frases[0];
})
botonFrase2.addEventListener("click", function(){
    FraseDia.innerHTML = frases[1];
})
botonFrase3.addEventListener("click", function(){
    FraseDia.innerHTML = frases[2];
})
botonFrase4.addEventListener("click", function(){
    FraseDia.innerHTML = frases[3];
})

// NÚMERO ALEATORIOS
// console.log(Math.floor(Math.random()* 20)); esto es una prueba de numero aleatorio entero sin decimal

let nombrePersonaje=document.getElementById("nombre-personaje");
let personajes=[];
personajes[0]="1. ¿Cómo surgió la Educación en STEAM?";
personajes[1]="2. ¿Qué ocurre en el aprendizaje cuando se combinan las áreas STEM con las disciplinas artísticas?";
personajes[2]="3. ¿Por qué es importante educar en STEAM?";
personajes[3]="4. ¿Qué ventajas aporta?";
personajes[4]="5. ¿Qué tipo de metodologías se pueden utilizar?";
personajes[5]="6. ¿Por dónde empezar?";
personajes[6]="7. ¿Algún ejemplo práctico?";
personajes[7]="8. ¿Qué obstáculos deben superarse?";
personajes[8]="9. ¿Algunas iniciativas interesantes?";
personajes[9]="10. ¿Cómo evaluar los aprendizajes STEAM?";



let aleatorio=Math.floor(Math.random()* 5);
nombrePersonaje.innerHTML=personajes[aleatorio];

//INTERVALO DE TIEMPO  -  setTimeout (cambia 1 sola vez)
let personajedia=document.getElementById("personajedia")

    function cambiaColorPersonaje(){
        personajedia.style.backgroundColor="#000000";   // cambia color de fondo
        personajedia.style.color="#ffffff"   //cambia color de texto a blanco
    }
setTimeout(cambiaColorPersonaje, 3000); // cambia 1 sola vez despues de 3 segundos

//INTERVALO DE TIEMPO  -  setInterval
function cambiaPersonaje(){
    let aleatorio=Math.floor(Math.random()* 10);
    nombrePersonaje.innerHTML=personajes[aleatorio];
}
setInterval(cambiaPersonaje, 500);  //cambia la fase cada medio segundo


//Galeria con botones
let paisajes=[];
paisajes[0]="images/bosque.jpg";
paisajes[1]="images/cerro.jpg";
paisajes[2]="images/naturaleza.jpg";
paisajes[3]="images/laguna.jpg";
paisajes[4]="images/catarata.jpg";

let bretroceder=document.getElementById("boton-retroceder");
let bavanzar=document.getElementById("boton-avanzar");
let muestra=document.getElementById("muestra");

let posicion = 0;

muestra.src=paisajes[posicion];

bavanzar.addEventListener("click", function(){
   /*
    if(posicion<4){
        posicion++;
        muestra.src=paisajes[posicion];
        }

    */
        posicion++;  // El valor de la variable incremanta en una unidad
        if(posicion==5){
            posicion=0;
         }
        muestra.src=paisajes[posicion];
        
});

bretroceder.addEventListener("click", function(){
   /*
    if(posicion>0){
    posicion--;
    muestra.src=paisajes[posicion];
    }
    */
    posicion--;     // la variable desminuye 1
    if(posicion==-1){
        posicion=4;
    }
    muestra.src=paisajes[posicion];

});

/*
let cajaP=document.getElementById("caja-posicion")
cajaP.innerHTML=posicion;
*/

function avanzar(){
    posicion++;  // El valor de la variable incremanta en una unidad
    if(posicion==5){
        posicion=0;
     }
    muestra.src=paisajes[posicion];
}
setInterval(avanzar, 2000);  // avanza automatico cada determinando tiempo (2segundo=2000 milisegundos (ms))


// API FETCH CARGAR PAGINA CON EL MENU 

let iMdelosteam=document.getElementById("menu-item-steam")
let iContactos=document.getElementById("menu-item-contactos")
let iNosotros=document.getElementById("menu-item-nosotros")
let mcontent=document.getElementById("main-content")

iMdelosteam.addEventListener("click", function(){
    fetch("paginas/steam.html")
        .then(response => response.text())
        .then(data =>{
            mcontent.innerHTML=data;
        });
})

iContactos.addEventListener("click", function(){
    fetch("paginas/contacto.html")
        .then(response => response.text())
        .then(data =>{
            mcontent.innerHTML=data;
        });
})

iNosotros.addEventListener("click", function(){
    fetch("paginas/nosotros.html")
        .then(response => response.text())
        .then(data =>{
            mcontent.innerHTML=data;
        });
})

