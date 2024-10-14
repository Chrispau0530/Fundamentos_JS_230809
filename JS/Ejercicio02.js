//Tipos de datos en JS

//1.Underfined
let cliente;

console.warn("---Tipo de Dato UNDEFIED ---")

console.log(`El cliente : ${cliente}`)
console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);
cliente ="Juan Romero"
console.log(`El cliente : ${cliente}`)
console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);
cliente=209901
console.log(`El cliente : ${cliente}`)

console.log(`El tipo de dato de la variable cliente es  ${typeof(cliente)}`);

//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

console.warn("----Tipo de dato BOOLEAN (BOLEANO -TRUE-FALSE")
//2.BOOLEAN 
let esPremium = "No lo se";

console.log(`Es un cliente premium ${esPremium}`);

console.log(`El tipo de dato de la variable es Premium es  ${typeof(esPremium)}`);

esPremium=false;
console.log(`Es un cliente premium ${esPremium}`);
console.log(`El tipo de dato de la variable es Premium es  ${typeof(esPremium)}`);
console.log(`Es un cliente premium ${esPremium}`);
if(esPremium)
    console.log("Es un cliente pago por usar el servicio");
else
console.log("Es un usuario que recibe los servicios gratuitos ");


// 3. NUMBER

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion ;

console.warn ("---- Tipo de Dato -NUMBER (Numeros,positivos,decimales,flotantes)")
console.log(`Tu saldo al dia de hoy es de : ${saldo_cuenta} ,(Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta : ${costo_producto} (T)`)
cantidad =8;
console.log(`Has elegido comprar : ${cantidad} de productos .`)
console.log(`El importe total de la compra es : ${cantidad*costo_producto}`)


saldo_cuenta= saldo_cuenta -(cantidad*costo_producto);
console.log(`Tu saldo nuevo es de : ${saldo_cuenta}`);

//El cliente realiza un abono de 1500 

monto_transaccion=1500;
console.log (`Tu abono de : ${monto_transaccion} ha sido recibido , tu nuevo saldo es de : ${saldo_cuenta+monto_transaccion}`)

//4. String (Cadena de Caracteres)
const alumno = "Christian Paul Rodriguez Perez"
let producto;

console.warn("----Tipo de Dato -String (Cadena de Caracteres ");
console.log(`El nombre del alumno es : ${alumno}, que es de tipo de dato ${typeof(alumno)}`);

//Inicializamos el valor de la variale producto

producto="MONITOR 20\"FULL HD"
console.log(`El nombre del PRODUCTO  es : ${producto}, que es de tipo de dato ${typeof(producto)}`);

//Manipulando los STRINGS
console.log(`Mas adelante podremos transformar el contenido de los STRING usando los metodos y funciones especificas,como convertir su valor a mayusculas: ${alumno}=>${alumno.toLowerCase()}`)
console.log(`O en su defecto a minusculas : ${producto} => ${producto.toLowerCase}`)

//5.BIGINT (Numero de mayor Amplitud)

console.warn("---tipo de Dato -BIGINT (Numero Ammplio)");
const NumeroGrande= 1234567890
const NumeroGrande2= 1234556789076542
let NumeroGrande3= 13223445456556563434545454578787878787878
let NumeroGrande4=1232343453432212324546334454545454656562323545656676878789787878
console.log(`El primero experimento de un numero grande es : ${NumeroGrande}, que es soportado por NUMBER, y su tipo de dato es: ${typeof(NumeroGrande)}`);
console.log(`El segundoo experimento de un numero grande es : ${NumeroGrande2}, que es soportado por NUMBER, y su tipo de dato es: ${typeof(NumeroGrande2)}`);
console.log(`El tercer experimento de un numero grande es : ${NumeroGrande3}, que NO es soportado por NUMBER, y su tipo de dato es: ${typeof(NumeroGrande3)}`);
console.log(`El cuarto experimento de un numero grande es : ${NumeroGrande4}, que NO es soportado por NUMBER, y su tipo de dato es: ${typeof(NumeroGrande4)}`);


 NumeroGrande3=BigInt(13223445456556563434545454578787878787878);
console.log(`El quinto experimento de un numero grande es : ${NumeroGrande3}, que ya fue convertido en BIGINT , y su tipo de dato es ${typeof(NumeroGrande3)}`);

NumeroGrande4=BigInt(1232343453432212324546334454545454656562323545656676878789787878);
console.log(`El sexto experimento de un numero grande es : ${NumeroGrande4}, que ya fue convertido en BIGINT , y su tipo de dato es ${typeof(NumeroGrande4)}`);


//¿Se puede realizar operaciones matematicas entre un NUMBER Y un BIGINT?

const numero= 129;

console.log(`Intentando realizar la suma de : numero+numeroGrande3 el resultado es: ${BigInt(numero ) + NumeroGrande3}`)

 console.warn("---Tipo de dato SYMBOL(Simbolo o Unico)---")
//6.SYMBOL (simbolo)

// 6. SYMBOL (Símbolo)
console.warn("--- Tipo de Dato SYMBOL (Símbolo o Único)")

const numero1 =5;
const numero2= 5.0;
const numero3= "5";
const numero4="5.0"
const numero5=Symbol(5)
const numero6=Symbol(5)
const numero7=Symbol(5.0)
const numero8=Symbol("5")
const numero9=Symbol("5.0")


// Pruebas comparativas
console.log("¿Es  5 = 5.0?")
if(numero1 == numero2)
    console.log("Se comparó numero1 con numero2, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor.")

console.log("¿Es  5 = \"5\"?")
if(numero1 == numero3)
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero31 con numero3, determinando que NO tienen el mismo valor.")


console.log("¿Es  5 === \"5\"?")
if(numero1 === numero3)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")


console.log("¿Es  5 = \"5.0\"?")
if(numero1 == numero4)
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero31 con numero4, determinando que NO tienen el mismo valor.")


console.log("¿Es  5 === \"5.0\"?")
if(numero1 === numero4)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")



console.log(`¿Es  5 === Symbol(5)?  , antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y  numero5 del tipo: ${typeof(numero5)}`)
if(numero1 === numero5)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")


//7.NULL 
console.warn("--Tipo de Dato - NUL (Nulo o Vacio) ");
//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacio , bajo su consentimiento a diferencia de UNDEFINED que es un valor desconocido asignado por default de javascript

let NombreUsuario= null;
let passUsuario = null;
let generoUsiario = null;
let estatudRelacionActual = null;
let fecha_UltimoPost;


//Supongamos que estamos programando una Red Social , tipo Facebook , en la que parte de la informacion se publicara en el perfil del usuario
// Si el usuario no ha iniciado sesion en el dispositivo movil o en la aplicacion web , puede explorar contenido con accesso publico y no existiera informacion para mostrar

//En la HU (Historial de Usuario ), que el usuario desea logearse debera ingresar su numero telefonico o correo electronico y una contraseña que deberemos guardar en las variables previamente declaradas

//Supongamos que el usuario :Christian P. con correo electronico christian@gmail.com desea ingresar la contraseña : pass1234

NombreUsuario="christian@gmail.com";
passUsuario="pass1234";

 //En este momento de ejecucion del sistema no sabemos su genero , ni su estado de relacion sentimental

 console.log(`El usuario ${NombreUsuario} esta intentando logearse con una contraseña de : ${passUsuario}`);

 //Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzara la sesion en la plataforma actualizando estos valores

 //Dado de Christian P. es del genero Masculino , y denota que su status de relacion no ha sido capturado o lo  mantiene privado esto generar la actualizacion de los valores en las variables 



 console.log(`El usuario ${NombreUsuario}), se ha logrado exitosamente al tener acceso a su informacion de perfil podemos deducir que es el genero ${generoUsiario} y que su estatus de relacion es : ${estatudRelacionActual} y su ultima publicacion la reañozp eñ: ${fecha_UltimoPost}`);
 // Comparando NULL vs UNDEFINED 
 //Si bien el UNDEFINED y NULL tienen el mismo valor , no tienen el mismo tipo de dato

 console.log("Comparacion de la equidad entre UNDEFINED  y NULL")
 console.log(
(fecha_UltimoPost == estatudRelacionActual) ?
"Ambas variables tienen el mismo valor":
"Las variables no tienen el mismo valor "
 );


 console.log("Comparacion de la identidad entre UNDEFINED y NULL");
 console.log(
(fecha_UltimoPost===estatudRelacionActual) ?
"Ambas variables tienen el mismo valor y el mismo tipo de dato":
"Las variales tienen ell mismo valor , pero no el mismo tipo de dato"

 )



// 8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Función)")

// Declaramos una funcion que nos permita recibir un paramento en este caso el nombre de la persona a saludar, y le enviamos un saludo, esta función la asignamos a una constante.
const saludar =  function(nombre){return `Hola, ${nombre}!`}

// Invocamos a la función declarada
console.log(saludar('Christian'));

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)


