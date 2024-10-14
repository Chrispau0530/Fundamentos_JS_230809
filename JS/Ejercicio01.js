//  Comentarios de una sola linea //


/*
Comentarios multi linea
*/

// Ejercicio 01 :Declaracion de variables 

// a) Var

var Minombre = "Christian"
var misApellidos;
var edad ="19";


//El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funcion o metodo
console.warn("-----Declaracion de variables usando :VAR--")
console.log("Intentado leer las variables :",Minombre,misApellidos);

misApellidos="Rodriguez"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar a leerlas:",Minombre,misApellidos);

//Una variable puede cambiar en el proceso de ejecucion del programa 

// b)Const


console.warn("-----Declaracion de variables tipo constante usando = CONST")
const miUniversidad="UT Xicotepec";
const miMatricula=230809
console.log("Hola, ",Minombre ," ",misApellidos,"Se que estudias actualmente en ",miUniversidad,"  asignaron la matricula",miMatricula,"  y tienes una edad de ",edad,"  años");

//Para saber el tipo de dato que tiene una variable o constante podemos utilixar la funcion typeOf()
console.log("Analixando los datos puedo deducir que : ")
console.log("Mi nombre es del tipo ",typeof(Minombre))
console.log("Mi edad es del tipo ",typeof(edad))
console.log("Mi Apellidos es del tipo ",typeof(misApellidos))
console.log("Mi Universidad es del tipo ",typeof(miUniversidad))
console.log("Mi Matricula es del tipo ",typeof(miMatricula))

// c) Let

let mifechaNacimiento="2005-04-30";
let micolorfavorito;

console.warn("---Declaracion de variabñes locales usando : LET")
console.log("Genial , te voy conociendo mejor , ahora se que tu naciste el : ", mifechaNacimiento,"  y que tu color favorito es : mmmm dejame pensar...")
micolorfavorito="Naranja";
console.log(`Creo que es ${micolorfavorito}, le atine?`) //La manera de mezclar textos fijos con el valor actual de las variables se le conoce interpolacion y deben iniciar y finalizar on un backtic - tilde inversa


console.log("Mi Color favorito es del tipo ",typeof(micolorfavorito))
console.log("Mi Fecha nacimiento  es del tipo ",typeof(mifechaNacimiento))


//