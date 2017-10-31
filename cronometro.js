var CronoID = null  
var CronoEjecutandose = false  
var decimas, segundos, minutos  
  
function DetenerCrono (){  
    if(CronoEjecutandose)  
        clearTimeout(CronoID)  
    CronoEjecutandose = false  
}  
  
function InicializarCrono () {   
    decimas = 0  
    segundos = 0  
    minutos = 0  
       
    document.crono.display.value = '00:00:0'  
    document.crono.parcial.value = '00:00:0'  
}  
  
function MostrarCrono () {  
               
    decimas++  
    if ( decimas > 9 ) {  
        decimas = 0  
        segundos++  
        if ( segundos > 59 ) {  
            segundos = 0  
            minutos++  
            if ( minutos > 99 ) {  
                alert('Fin de la cuenta')  
                DetenerCrono()  
                return true  
            }  
        }  
    }  
   
    var ValorCrono = ""  
    ValorCrono = (minutos < 10) ? "0" + minutos : minutos  
    ValorCrono += (segundos < 10) ? ":0" + segundos : ":" + segundos  
    ValorCrono += ":" + decimas   
              
    document.crono.display.value = ValorCrono  
  
    CronoID = setTimeout("MostrarCrono()", 100)  
    CronoEjecutandose = true  
    return true  
}  
  
function IniciarCrono () {  
    DetenerCrono()  
    InicializarCrono()  
    MostrarCrono()  
}  
  
function ObtenerParcial() {   
    document.crono.parcial.value = document.crono.display.value  
}  