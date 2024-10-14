// Repaso de Objetos

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practixca 05: Repaso de Objetos en Java Script");

console.log("%c1.- Variables Independientes ",style_console);

let producto_Nombre="Computadora  Gammer Laptop 17\"";
let producto_Marca="Asus";
let producto_Modelo="TUF 17";
let Producto_precio=15749.50;
let producto_Disponibilidad=true;
let producto_SKU=Symbol("TUF707VV-HX221W")
let producto_Stock=15;
let producto_Imagen= null;
let producto_Barcode;
let producto_Categorias=["Electronicos","Computación","Gamming","Promociones Buen Fin","Mejor Valorados"];


console.log(`Los datos del PRODUCTO son: \n 
    Nombre: ${producto_Nombre}, Tipo de dato <${typeof(producto_Nombre)}>
    Marca: ${producto_Marca}, Tipo de dato <${typeof(producto_Marca)}>
    Modelo: ${producto_Modelo}, Tipo de dato <${typeof(producto_Modelo)}>
    Precio: ${Producto_precio}, Tipo de dato <${typeof(Producto_precio)}>
    Disponibilidad: ${producto_Disponibilidad}, Tipo de dato <${typeof(producto_Disponibilidad)}>
    Stock: ${producto_Stock}, Tipo de dato <${typeof(producto_Stock)}>
    Barcode: ${producto_Barcode}, Tipo de dato <${typeof(producto_Barcode)}>
    Imagen: ${producto_Imagen}, Tipo de dato <${typeof(producto_Imagen)}>
    Categorias: ${producto_Categorias}, Tipo de dato <${typeof(producto_Categorias)}>`);


    console.log("En el caso del SKU al ser un Simbol, no se puede concatenar a la cadena de impresión anterior")
    console.log(producto_SKU);
    console.log(typeof(producto_SKU));

// ahora lo declaramos como un objeto
console.log("%c2.- Variables Independientes ",style_console);
    let producto= 
    {
        ID:3436,
        Nombre: "Tenis Deportivos",
        Marca: "Nke",
        Modelo: "Jodan ' 24",
        Precio: 3361.25,
        Disponiblidad: false,
        Stock: 0,
        SKU: "DZ5485-612",
        Imagen: "../Assets/Products/sneaker/JORDAN.png",
        Barcode: null,
        Categorias:["Deportes", "Tenis","Juvenil"]

    
    }

    // Ahora leemos el objeto 
    console.table(producto)

    // Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.

    console.log("Accediendo a propiedades especificas del PRODUCTO")
    console.log(`Nombre Completo del PRODUCTO: ${producto.Nombre} ${producto.Marca} ${producto.Modelo} `)
    console.log(`Precio: ${producto.Precio}`)
    if(producto.Disponiblidad ==0)
    console.log(`Estatus: Agotado`)
    else
    console.log(`Estatus: ${producto_Stock} , Unidades disponibles`)


    console.log("%c3.- Destructuración de Objetos ",style_console);
    let producto2= 
    {
        ID: 2323,
        Clave: 316,
        Nombre: "Lentes para sol",
        Marca: "Oakley",
        Modelo: "QNTM Kato",
        Precio: 6829.00,
        Disponiblidad: true,
        Stock: 5,
        SKU: "OO9481D-03",
        Imagen: "../Assets/Products/sunglasses/katoRed.png",
        Barcode: 888392491626,
        Categorias:["Deportes", "Lentes","Accesorios"]

    
    }

    let Comprador=
    {
        Clave:3216,
        Nombre: "Christian ",
        Apellidos: "Rodriguez Perez",
        Tipo: "Frecuente",
        Correo: "rodriguez@gmail.com",
        PaisOrigen: "México",
        SaldoActual: 14000.00
    }
    let Pedido=
    {
        ID:232121,
        Producto_Clave: 316,
        Comprador_Clave: 3216,
        Cantidad: 2,
        Estatus: "Carrito de compra",
        TipoPago : "Tajeta de credito"
    }

    // En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldos a favor 

    let { Precio: producto_precio2}=producto2;
    let {Cantidad:pedido_cantidad}=Pedido;
    let {SaldoActual:Cliente_SaldoActual}=Comprador;
    let Costo_compra=Producto_precio*pedido_cantidad;

    
    console.log(`El cliente ha agregado a su carrito de compras ${pedido_cantidad} unidades, con un costo total de: ${Costo_compra}`)
    if(Costo_compra<Cliente_SaldoActual)
        console.log("El cliente tiene saldo suficiente");

    // Actualizar el valor de los Objetos 
    console.log("%c4.- Actualizacion de los valores de las propiedades de un Objeto",style_console);

    console.log(`El objeto  actualmente tiene los siguientes valores `);
    console.log(JSON.stringify(producto2,null,2));
    //Convierte el objeto a una cadena para evitar problemas de referencia 
    console.log(`Por cuestiones de inflacion el costo del producto ha cambiado y debe de ser actualizado ... de $6829.00 a $6,915.00`);
    //Para podificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada 
    producto2.Precio=6915.00;
    console.log(`Los nuevos valores del producto son : `);
    console.log(producto2)

    // ¿Puedo cambiar no solo el valor ,sino  el tipo de dato a un Objeto en JavaScript?
    console.log(`---------------------------------------`)
    console.log(`El objeto  actualmente tiene los siguientes valores `);
    var tipoDisponibilidad =typeof(producto2.Disponiblidad)
    console.log(`El tipo de dato de la disponibilidad es : ${tipoDisponibilidad}`)
    console.log(JSON.stringify(producto2,null,2));
    producto2.Disponiblidad="SI";
    let nuevoTipoDisponibilidad = typeof(producto2.Disponiblidad)
    console.log(producto2)
    console.log(`El nuevo tipo de dato es : ${nuevoTipoDisponibilidad}`)



    // Agregar nuevas propiedades al Objeto 
    console.log("%c5.- Agregar nuevas propiedades al Objeto",style_console);
    // Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto
    console.log("Los datos actuales del Comprador son :  ")
    console.table(Comprador)
    
    Comprador[`Direccion`] = "La cumbre, colonia nigromante , NO.64 ,Huauchinango,Puebla, Mexico"
    Comprador[`Tipo`] = "NUEVO CLIENTE"
    Comprador[`Actividadreciente`]= true
    Comprador[`TotalCompras`] = 3516.25
    console.log("Despues de haber agregado las propiedadea Direccion,Tipo,Actividadreciente,TotalCompras...")
    console.table(Comprador)


    //Eliminar propiedades existentes de un Objeto
    console.log("%c6.- Eliminar propiedades existentes del Objeto ",style_console);
    console.log("La estructura y valores del Objeto PEDIDO son previos a la modificacion: ")
    console.table(Pedido)
    delete Pedido.TipoPago
    console.log("Despues de la modificacion")
    console.table(Pedido)

    //
