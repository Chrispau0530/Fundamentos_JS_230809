// Repaso de Arreglos



//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,0,36,1) 0%, rgba(255,129,26,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prácitca 06: Arreglos en Java Script")

//DECLARACIÓN DE UN ARREGLO
//Para declarar un arreglo (array) de datos en JavaScript basta con  agregar [], y dentro los datos que contendra el arrego.

const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log("%c1.- Declaración de un Arreglo (Array)", style_console);

console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valos de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los límites establecidos.  siendo el límite inferior 0 y el superior tamaño -1 

console.log("%c2.- Leer o recuperar los datos de un arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`El úlitmo mes del año es: ${mesesAnio[mesesAnio.length-1]}`)
// No se pueden accedes a elementos con posiciones negativas o posiciones superiores al tamaño definido.

console.log(`El mes del año en la posición -1 es:  ${mesesAnio[-1]}`)

console.log(`El treceavo mes del año en la posición es:  ${mesesAnio[12]}`)

console.log(`¿Que tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)


//Al ser JavaScript un leguaje débilmente tipado podremos crear arreglos mixtos de tipos de Datos
console.log("Declarando un Arrego Mixto")
const saludar =  function(nombre){return `Hola, ${nombre}!`}

let arregloMixto = ["String", 5,45.26,-200, -.16854, Symbol("MARH"), 'z', false, BigInt(1111222233334444555566667777), true, {latidud: "20° 18' 0\" N" , longitud: "97° 58' 00\" W", altitud: 796}, saludar, null ]

//Mostramos el contenido del objeto
console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")


console.log(`El dato en la posicion[0] = ${arregloMixto[0]} y es del tipo: ${(typeof(arregloMixto[0]))}`);
console.log(`El dato en la posicion[1] = ${arregloMixto[1]} y es del tipo: ${(typeof(arregloMixto[1]))}`);
console.log(`El dato en la posicion[2] = ${arregloMixto[2]} y es del tipo: ${(typeof(arregloMixto[2]))}`);
console.log(`El dato en la posicion[3] = ${arregloMixto[3]} y es del tipo: ${(typeof(arregloMixto[3]))}`);
console.log(`El dato en la posicion[4] = ${arregloMixto[4]} y es del tipo: ${(typeof(arregloMixto[4]))}`);
console.log(`El dato en la posicion[5] = ${arregloMixto[5].toString} y es del tipo: ${(typeof(arregloMixto[5]))}`);
console.log(`El dato en la posicion[6] = ${arregloMixto[6]} y es del tipo: ${(typeof(arregloMixto[6]))}`);
console.log(`El dato en la posicion[7] = ${arregloMixto[7]} y es del tipo: ${(typeof(arregloMixto[7]))}`);
console.log(`El dato en la posicion[8] = ${arregloMixto[8]} y es del tipo: ${(typeof(arregloMixto[8]))}`);
console.log(`El dato en la posicion[9] = ${arregloMixto[9]} y es del tipo: ${(typeof(arregloMixto[9]))}`);
console.log(`El dato en la posicion[10] = ${arregloMixto[10]} y es del tipo: ${(typeof(arregloMixto[10]))}`);
console.log(`El dato en la posicion[11] = ${arregloMixto[11]} y es del tipo: ${(typeof(arregloMixto[11]))}`);
console.log(`El dato en la posicion[12] = ${arregloMixto[12]} y es del tipo: ${(typeof(arregloMixto[12]))}`);
console.log("%c3.- Arreglos Multidimencionales (Matrices)", style_console);

console.log("Declarando una matriz regular.")
//Una matriz es una estructura de datos multidensional (tabla) de n columnas o m filas

let matriz = [[1,2,3,4],['a','b','c','d']]
//esta es una matríz regular de 4 x 4

console.log(matriz)
console.table(matriz)

console.log("Declarando una matriz irregular.")

const matrizIrregular= [["Juan", "Pedro", "María", "Inés"],
[true,false,null],
[9.2]]

console.log(matrizIrregular)
console.table(matrizIrregular)

// Accediendo a los valores de una matriz

console.log("Leyendo las Propiedades de una Matriz Regular")
console.log(`Elemento en la posicion [0][0]: ${matriz[0][0]}`)
console.log(`Elemento en la posicion [1][2]: ${matriz[1][2]}`)


// Accediendo a los valores de una matriz irregular
console.log("Leyendo las Propiedades de una Matriz Irregular")
console.log(`Elemento en la posicion [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elemento en la posicion [2][0] (Promedio de Juan): ${matrizIrregular[2][0]}`)
console.log(`Elemento en la posicion [1][2] (¿Es María mayor de edad?): ${matrizIrregular[1]
[2]}`)


// Funciones y Métodos de Arreglos
// Los metodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un método sino una propiedad


console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methos or Array Functions", style_console);
console.log("¿Como saber cual es el tamaño de un arrego?")
console.log(`meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`¿Qué pasa con los multidimensionales ?`)
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`)
console.log("mmm, eso me da el tamaño de número de filas de la matriz, pero cómo saber el numero de columnas?")
console.log(`la matriz regular tiene un número de ${matriz[0].length}`)
console.log("Y para las irregulares?")
// Para saber la dimensión de una matriz irregular podemos hacer el uso de ciclo
let numeroFilas = matrizIrregular.length
for (let i = 0;i<numeroFilas; i++)
console.log(`La longitud de la fila ${[i]} es = ${matrizIrregular[i].length}`)

console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH) ",style_console);

let estudiantes =["Christian Paul","Alisson Lizeth","Daniel Bravo","Aiton Artiaga"]
console.log("Los elementos actuales del arreglo son: ")
console.table(estudiantes)
console.log("Agregamos a un nuevo estudiante llamado : Abril Guzman")
estudiantes.push("Abril Guzman")
console.log("Despues de agregarla los elementos del arreglo son : ")
console.table(estudiantes)

//EL elemento push agrega otra columna en la ultima posicion que se encuentra el arreglo 


console.log("¿Que pasa con los Mixtos?")
console.log("El arregloMixto actualmente tiene los siguientes elementos : ")
console.table(arregloMixto)
console.log("Agregamos la palabra : \"Hola\" , como nuevo elemento")
arregloMixto.push("Hola");
console.log("Y tambien agregamos el numero -13235343423235435445.23245454342122323, siendo este un tipo de BigInt")
arregloMixto.push(BigInt(-13235343423235435445.23245454342122323))
console.log("Despues de estados operaciones el arreglo queda con los siguientes elementos ")
console.table(arregloMixto)
console.log("%c6.-Agregar un nuevo elemento o un arreglo (UNSHIFT) en la posicion inicial",style_console)
console.table(estudiantes)
console.log("Ahora agregamos a Abishai Flores , al comienzo del arreglo")
estudiantes.unshift("Abishai Flores ");
console.log("La lista actual es:")
console.table(estudiantes)
console.log("%c7.-Eliminar elementosn de un arreglo en la ultima posicion (POP)",style_console)
console.log("El arreglo tiene los siguientes elementos ")
console.table(estudiantes)
console.log("Para este caso elininaremos a Abril Guzman , en la ultima posicion")
estudiantes.pop();
console.log("Despues de eliminar el elemento el arreglo quedo de la siguiente manera ")
console.table(estudiantes)

console.log("%c8.-Eliminar elementosn de un arreglo en la primera posicion (SHIFT)",style_console)
console.log("El arreglo tiene los siguientes elementos")
console.table(estudiantes)
console.log("Para este caso elininaremos a Abishai Folores, en la ultima posicion")
estudiantes.shift();
console.log("Despues de eliminar el elemento el arreglo quedo de la siguiente manera ")
console.table(estudiantes)

console.log("%c9.-Dividir un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)",style_console)
console.log("El arreglo original tiene los siguientes elementos ")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminado ciertos elementos en base a du posicion ")
//Cuando la funcion rsplice recibe un solo parametro eliminara los elementos de esa posicion en adelante 
estudiantes.splice(2)
console.table(estudiantes)

//Cuando la fusion splice recibe 2 parametros se elimina todos los elementos que no esten en ese rango
estudiantes.push("Zyanya Zacatengo","Tania Ibarra","Juvenal Viveros","Marcos Rios","Jonathan Baldemar ")
console.log("Se han agregado nuevos estudiantes , por lo que el arreglo es :")
console.table(estudiantes)
console.log("Ahpra ya tenemos los elementos suficientes para aplicar el metodo de splice con dos parametros que sean 3,5")
estudiantes.splice(3,5)
console.log("El resultado fue :")
console.table(estudiantes)

//Splice sirve tambien para insertar elementos en posiciones especificos , ahora  necesitamos insertar a "Antonio Ocpaco" entre "Christian " y "Alisson"

console.log("Ahora vamos a insertar \"Antonio Ocpaco\" en medio de Christian y alisson")
estudiantes.splice(1,0,"Antonio Ocpaco")
console.log("Resultado en ")
console.table(estudiantes)

//Tambien splice sirve para remplazar elementos por otros , en este caso remplazaremos Antonio Ocpaco  por Brandom Leon

console.log("Ahora vamos a remplazar \"Brandom Leon\" en medio de Christian y alisson")
estudiantes.splice(0,1,"Brandom Leon")
console.log("Resultado en ")
console.table(estudiantes)
console.log("%c10.- Metodos para la manipulacion de Arreglos INMUTABLES ")

let SignosZodiacales = ["Aries ","Tauro","Geminis","Cancer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"]

//Destructuracion de Arreglos 

let[Signo1,,Signo3,,,,signo7,,,,] = SignosZodiacales;
console.log(`El primer signo zodiacal es : ${Signo1}`)
console.log(`El tercer signo zodiacal es : ${Signo3}`)
console.log(`El primer septimo zodiacal es : ${signo7}`)
// console.log(`El cuarto signo zodiacal es : ${signo4}`)

//Congelamos el arreglo volviendolo INMUTABLE 
Object.freeze(SignosZodiacales);
//Filtrado de Datos
console.log("%c11.- Filtrado de Elementos dentro de un Arreglo utilizando  el método FILTER", style_console);

console.table(estudiantes);
//Antes de filtrar datos llenemos el arreglo con 10 Elementos
estudiantes.push("Ángel Rufino")
estudiantes.push("Osvaldo Abishai")
estudiantes.push("Karen Negrete")
estudiantes.push("Uriel Abdalha")
estudiantes.push("Lorena Galindo")
estudiantes.push("Esther González")
console.table(estudiantes);

 Object.freeze(estudiantes);

//Filter es un método que recorre los elementos de un arreglo haciendo alguna tarea en específico, lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que puede ser mutable.

console.log("Filtramos los primeros 5 elementos");
let nuevoEstudiantes = estudiantes.filter((estudiante,index) => index<5);//Funcion lambda recorre todo el arreglo y solo devuelve en la iteracion estudiante que sean menor a 5 
console.table(nuevoEstudiantes);

console.log("Filtramos los nombres con mas de 15 carácteres");
//Filtrar a los estudiantes que su nombre tenga más de 15 carácteres
let nuevoEstudiantesNombre = estudiantes.filter((estudiante) => estudiante.length>15); //Es como si fuera la condición
console.table(nuevoEstudiantesNombre);

console.table(filtraPrimeros5(estudiantes));
//Intentamos modificar el arreglo inmutable
/*estudiantes.pop();
console.table(estudiantes);*/

//Intentamos modificar el nuevo arreglo que no ha sido congelado
nuevoEstudiantes.unshift("Daniela Lopéz")
console.table(nuevoEstudiantes)

//La función lambda es mas corta al hacer una function
function filtraPrimeros5(arregloEstudiantes)
{
    let listaFiltrada=[]
    for (let i=0; i<5; i++){
        listaFiltrada.push(arregloEstudiantes[i]);
    }
    return listaFiltrada;
}

//Filtrado de Datos - Transformando datos
console.log("%c12.- Filtrado de Elementos dentro de un Arreglo utilizando  el método MAP en el que necesitamos transformarlo", style_console);
console.log("Imprimir los elementos actuales de signosZodiacales:")
console.table(signosZodiacales);
//Que podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letras MAYÚSCULAS
console.table(signosZodiacales.map(signoZodiacal=> signoZodiacal.toUpperCase()));

//Reducción de elementos de un arreglo, se usa cuando debemos hacer operaciones matemáticas o cuantittativas o un arreglo, como obtener totales, la idea es reducir la lista a un valor más simplificado.

const costosListaCompras = [15,52.50,16.90,32.50,28,105,45.2,94.10]
//como podemos calular el total de una lista de costos de un carrito de compras
console.log("Los precios son:")
console.table(costosListaCompras)
console.log(`El total de la compra es: ${costosListaCompras.reduce((total, precio)=>total + precio,0).toFixed(2)}`)
