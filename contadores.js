/*Funciones de Carga*/
function doLoad() {
       log1( "Life: " + counter1 );
       document.getElementById("btnIncrement1").addEventListener("click", incrementCounter1, false);
       document.getElementById("btnDecrement1").addEventListener("click", decrementCounter1, false);
       log2( "Life: " + counter2 );
       document.getElementById("btnIncrement2").addEventListener("click", incrementCounter2, false);
       document.getElementById("btnDecrement2").addEventListener("click", decrementCounter2, false);
       log3( "Poison: " + counter3 );
       document.getElementById("btnInfect1").addEventListener("click", incrementCounter3, false);
       document.getElementById("btnDecrinfect1").addEventListener("click", decrementCounter3, false);
       log4( "Poison: " + counter4 );
       document.getElementById("btnInfect2").addEventListener("click", incrementCounter4, false);
       document.getElementById("btnDecrinfect2").addEventListener("click", decrementCounter4, false);
       log5( "Counter: " + counter5 );
       document.getElementById("btnIncrement5").addEventListener("click", incrementCounter5, false);
       document.getElementById("btnDecrement5").addEventListener("click", decrementCounter5, false);
       log6( "Counter: " + counter6 );
       document.getElementById("btnIncrement6").addEventListener("click", incrementCounter6, false);
       document.getElementById("btnDecrement6").addEventListener("click", decrementCounter6, false);
       log7( "Counter: " + counter7 );
       document.getElementById("btnIncrement7").addEventListener("click", incrementCounter7, false);
       document.getElementById("btnDecrement7").addEventListener("click", decrementCounter7, false);
}

/*Contador de Vidas: Jugador 1*/
var counter1 = 20;
function log1(msg, doAlert) {
       document.getElementById("statusMessages1").innerHTML = msg;
       if (doAlert) {
             alert(msg)
       }
}

/*Cargando Funcion de Incrementar y Decrementar Contador Vida1 mediante Click*/
function incrementCounter1 () {
       counter1++;
       log1( "Life: " + counter1 );
}
function decrementCounter1 () {
    counter1--;
    log1( "Life: " + counter1 );
}

/*Contador de Vidas: Jugador 2*/
var counter2 = 20;
function log2(msg, doAlert) {
       document.getElementById("statusMessages2").innerHTML = msg;
       if (doAlert) {
             alert(msg)
       }
}

/*Cargando Funcion de Incrementar y Decrementar Contador Vida2 mediante Click*/
function incrementCounter2 () {
       counter2++;
       log2( "Life: " + counter2 );
}
function decrementCounter2 () {
    counter2--;
    log2( "Life: " + counter2 );
}

/*Contador de Infect: Jugador 1*/
var counter3 = 0;
function log3(msg, doAlert) {
       document.getElementById("statusMessages3").innerHTML = msg;
       if (doAlert) {
             alert(msg)
       }
}

/*Cargando Funcion de Incrementar y Decrementar Contador Infect1 mediante Click*/
function incrementCounter3 () {
       counter3++;
       log3( "Poison: " + counter3 );
}
function decrementCounter3 () {
    counter3--;
    log3( "Poison: " + counter3 );
}
/*Contador de Infect: Jugador 2*/
var counter4 = 0;
function log4(msg, doAlert) {
       document.getElementById("statusMessages4").innerHTML = msg;
       if (doAlert) {
             alert(msg)
       }
}

/*Cargando Funcion de Incrementar y Decrementar Contador Infect2 mediante Click*/
function incrementCounter4 () {
       counter4++;
       log4( "Poison: " + counter4 );
}
function decrementCounter4 () {
    counter4--;
    log4( "Poison: " + counter4 );
}

/*Contadores Varios*/
var counter5 = 0;
function log5(msg, doAlert) {
       document.getElementById("statusMessages5").innerHTML = msg;
       if (doAlert) {
             alert(msg)
       }
}
function incrementCounter5 () {
    counter5++;
    log5( "Counter: " + counter5 );
}
function decrementCounter5 () {
 counter5--;
 log5( "Counter: " + counter5 );
}

var counter6 = 0;
function log6(msg, doAlert) {
       document.getElementById("statusMessages6").innerHTML = msg;
       if (doAlert) {
             alert(msg)
       }
}
function incrementCounter6 () {
    counter6++;
    log6( "Counter: " + counter6 );
}
function decrementCounter6 () {
 counter6--;
 log6( "Counter: " + counter6 );
}

var counter7 = 0;
function log7(msg, doAlert) {
       document.getElementById("statusMessages7").innerHTML = msg;
       if (doAlert) {
             alert(msg)
       }
}
function incrementCounter7 () {
    counter7++;
    log7( "Counter: " + counter7 );
}
function decrementCounter7 () {
 counter7--;
 log7( "Counter: " + counter7 );
}

window.addEventListener("load", doLoad, false);
