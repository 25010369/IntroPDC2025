//noprotect;
var mes=0;
var dia=0;
var alertar=("Formato invalido, intente de nuevo");
var preguntar = ("Ingrese el día de su nacimiento en el mes de ");
var confirmar = ("Usted seleccionó el mes de ");
var mensaje2 = ("Su signo zodiacal habiendo nacido un ");
var mestext = ("XX");
var opt1 = ("YY");
var opt2 = ("ZZ");
var limite = 0;

// Este programa permite saber el signo zodiacal basado en consultar primero el mes y día de nacimiento, si se ingresa un dato de texto al momento de hacer el parseInt se devolvera}
// un NaN el cual se verifica para saber si es correcto o no el dato ingresado bajo el formato numerico que se solicita, de ser un valor incorrecto se informará y se volvera a preguntar 
// primer programa Java realizado por Verner Acabal 25010369 

alert("Bienvenido, este programa le ayudara a saber su signo zodiacal basasdo en el mes y día de su nacimiento, presione enter para continuar");
while(mes<1||mes>12){
      mes = parseInt(prompt("Ingrese el mes de su nacimiento en formato numerico, (ene=1, feb = 2, mar=3 etc...Dic=12)"));
      if (isNaN(mes)){mes=0
                     alert("Formato invalido, intente de nuevo");}
       }


switch (mes){
  case 1: 
    mestext = "enero"
    opt1= "Capricornio"
    opt2= "Acuario"
    limite = 20
    break;
    
  case 2:
     mestext = "febrero"
    opt1= "Acuario"
    opt2= "Picis"
    limite = 19
    break;
    
    case 3:
     mestext = "marzo"
    opt1= "Piscis"
    opt2= "Aries"
    limite = 20
    break;
    
    case 4:
     mestext = "abril"
    opt1= "Aries"
    opt2= "Tauro"
    limite = 20
    break;
    
    case 5:
    mestext = "mayo"
    opt1= "Tauro"
    opt2= "Geminis"
    limite = 20
    break;
    
    case 6:
    mestext = "Junio"
    opt1= "Geminis"
    opt2= "Cancer"
    limite = 20
    break; 
    
     case 7:
     mestext = "julio"
    opt1= "Cancer"
    opt2= "Leo"
    limite = 22
    break;
    
    case 8:
     mestext = "agosto"
    opt1= "Leo"
    opt2= "Virgo"
    limite = 23
    break;
    
    case 9:
     amestext = "septiembre"
    opt1= "Virgo"
    opt2= "Libra"
    limite = 22
    break;
    
    case 10:
     mestext = "octubre"
    opt1= "Libra"
    opt2= "Escorpio"
    limite = 23
    break;
    
    case 11:
     mestext = "Noviembre"
    opt1= "Escorpio"
    opt2= "Sagitario"
    limite = 22
    break;
    
    case 12:
     mestext = "Diciembre"
    opt1= "Sagitario"
    opt2= "Capricornio"
    limite = 21
    break;
    }
    alert(confirmar+mestext)
    while(dia<1||dia>31){
      dia = parseInt(prompt(preguntar+mestext))
      if (isNaN(dia)){dia=0
      alert(alertar);}}
    
    if (dia<=limite)alert(mensaje2+ dia +" de "+ mestext + " es " +opt1); 
    else alert(mensaje2+ dia +" de "+ mestext + " es " +opt2)
    
    
    
    