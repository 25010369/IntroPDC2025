//noprotect;
//El programa permitira jugar a las adivinanzas respecto a un numero random generado en el codigo y un numero que el usuario selecciona, 
//asi mismo el usuario seleccionará si considera que en numero ingresado es mayor, menor o igual.

var jugar="SI"

while(jugar=="SI"){

  var random=0
var numero=0
var seleccion=0
var random=(Math.floor(Math.random() * 9))
var sino = 1


alert("Bienvendo, vamos a jugar a las adivinanzas!!! piensa en un numero del 3 al 6, ...cuando estes listo presiona el boton Ok para continuar")

while(numero<3||numero>6){
     var numero=prompt("Ingrese un numero del 3 al 6")
  if (isNaN(numero)){numero=0}
}

var seleccion=parseInt( prompt("Ingrese 1 si cree que el numero que ingresó es menor al que la computadora eligió, o 2 si cree que igual o 3 si cree que es mayor"))


switch (seleccion){
  case 1:
    if (numero<random) alert("La computadora eligió "+random+" usted eligió "+numero+" su elección es menor, ¡Felicidades, ha adivinado!" )
    else alert("La computadora eligió "+random+" usted eligió "+numero+" su elección no es menor, lo lamento no ha adivinado")
    break;
  case 2:
    if (numero==random) alert("La computadora eligió "+random+" usted eligió "+numero+" su elección es igual, ¡Felicidades, ha adivinado!"  )
    else alert("La computadora eligió "+random+" usted eligió "+numero+" su elección no es igual, lo lamento no ha adivinado")
    break;
    
  case 3:
   if (numero>random) alert("La computadora eligió "+random+" usted eligió "+numero+" su elección es mayor, ¡Felicidades, ha adivinado!" )
   else alert("La computadora eligió "+random+" usted eligió "+numero+" su elección no es mayor, lo lamento no ha adivinado" )
   break;
              
}      
while(sino==1){
  var jugar=prompt("¿desea seguir jugando? ingrese SI para continuar jugando o NO para finalizar")
  if (jugar=="SI"||jugar=="NO") (sino=0)
  if (jugar=="SI") jugar="SI"; else jugar="NO"; 
  }
  }
 alert("Verner Acabal 25010369"); 



