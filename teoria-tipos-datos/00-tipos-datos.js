"use strict";
(() => {
    // 01-boolean
    let esVerdadero = true;
    console.log(esVerdadero);
    // 02-number (númerico)
    let entero = 6;
    let hexadecimal = 0xf00d;
    let binario = 0b1010;
    let octal = 0o744;
    // 03-string (cadena de caracteres)
    let marca = "toyota";
    let modelo = "prius";
    let nombre = "Raul";
    let apellido = "Jimenez";
    let impresion = `
Nombre: ${nombre}
Apellido: ${apellido}
`;
    // 04-arrays (arreglos)
    // Ambas formas de declarar el arreglo producen el mismo efecto. 
    let listaDeNumeros = [1, 2, 3];
    // listaDeNumeros.push("a"); -Error!
    let listaDeNumeros2 = [1, 2, 3];
    // 05-tuples (tuplas)
    let futbolista;
    futbolista = ["Raul Jimenez", 28];
    console.log(`El nombre es ${futbolista[0]}`);
    console.log(`Su edad es ${futbolista[1]}`);
    // 06-enums (enumeradores)
    let MarcasDeCoche1;
    (function (MarcasDeCoche1) {
        MarcasDeCoche1[MarcasDeCoche1["Toyota"] = 0] = "Toyota";
        MarcasDeCoche1[MarcasDeCoche1["Chevrolet"] = 1] = "Chevrolet";
        MarcasDeCoche1[MarcasDeCoche1["Ford"] = 2] = "Ford";
    })(MarcasDeCoche1 || (MarcasDeCoche1 = {}));
    let prius1 = MarcasDeCoche1.Toyota;
    console.log(prius1);
    let MarcasDeCoche2;
    (function (MarcasDeCoche2) {
        MarcasDeCoche2[MarcasDeCoche2["Toyota"] = 100] = "Toyota";
        MarcasDeCoche2[MarcasDeCoche2["Chevrolet"] = 101] = "Chevrolet";
        MarcasDeCoche2[MarcasDeCoche2["Ford"] = 102] = "Ford";
    })(MarcasDeCoche2 || (MarcasDeCoche2 = {}));
    let prius2 = MarcasDeCoche2.Toyota;
    console.log(prius2);
    // Esto dará undefined porque el índice de MarcasDeCoche2 empieza en 100 (Toyota=100)
    console.log(MarcasDeCoche2[0]);
    // Para acceder los índices posibles sería [100],[101],[102]
    console.log(MarcasDeCoche2[100]);
    // 07-any (cualquiera)
    let variableSinTipo = "Hola Mundo"; // Tratar de evitar siempre que sea posible
    variableSinTipo = 100;
    console.log(`variableSinTipo=${variableSinTipo}`);
    // 08-unknown (desconocido)
    let valorDesconocido = 4;
    valorDesconocido = true;
    // 09-void (ninguno)
    function saludar() {
        console.log("Hola Mundo");
    }
    saludar();
    // 10-null y undefined (null e indefinido)
    let variableSinDefinir = undefined;
    let variableNula = null;
    // 11-never (nunca)
    // esta funcion no tiene un punto final ya que dispara una excepcion
    function error(mensaje) {
        throw new Error(mensaje);
    }
    // esta funcion no tiene un punto final ya que dispara un error
    function fallo() {
        return error("Reportar fallo");
    }
    // esta funcion no finaliza ya que posee un loop infinito
    function loopInfinito() {
        while (true) { }
    }
    /** 12-objects (objetos)
    declare function crear(o: object): void;
    
    crear({ prop: 0 });
    crear(null);
    crear(undefined);
    crear([]);
    
    // false es un tipo primitivo, por lo cual se generara un error
    crear(false); */
    // 13-unions (uniones)
    function imprimirId1(id) {
        console.log(`El id es ${id}`);
    }
    imprimirId1(1);
    imprimirId1("abc");
    function imprimirId2(id) {
        if (typeof id === "string") {
            console.log(`El id es ${id.toUpperCase()}`);
        }
        else {
            console.log(`El id es ${id.toFixed(2)}`);
        }
    }
    imprimirId2("este_es_mi_id");
    imprimirId2(100.234234123);
    // 14-type assertion (confirmación de tipos)
    let algunValor1 = "esto es un string";
    let longitudDelString1 = algunValor1.length;
    // Otra forma de llevar a cabo la misma operación es utilizando <tipo> antes de la variable.
    let algunValor2 = "este es un string";
    let longitudDelString2 = algunValor2.length;
    // 15-functions (funciones)
    function elevarAlCuadrado(base) {
        return base * base;
    }
    let numeroBase = 10;
    let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
    console.log(numeroAlCuadrado);
    // funciones anónimas
    const nombres = ["Juan", "Pedro", "Luis"];
    nombres.forEach(function (s) {
        console.log(s.toUpperCase());
    });
    nombres.forEach((s) => {
        console.log(s.toUpperCase());
    });
    function imprimirCoordenada(punto) {
        console.log(`La coordenada x es : ${punto.x}`);
        console.log(`La coordenada y es : ${punto.y}`);
    }
    imprimirCoordenada({ x: 10, y: 25 });
    function convertirMayusculas(texto) {
        return texto.toUpperCase();
    }
    console.log(convertirMayusculas("hola mundo"));
    // 17-interfaces (interfaces)
    function imprimirEtiqueta1(etiqueta) {
        console.log(etiqueta.label);
    }
    let miEtiqueta1 = { numero: 10, label: "Esta es mi etiqueta" };
    imprimirEtiqueta1(miEtiqueta1);
    function imprimirEtiqueta2(etiqueta) {
        console.log(etiqueta.label);
    }
    let miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta" };
    imprimirEtiqueta2(miEtiqueta2);
    function crearCuadrado(cuadrado) {
        const area = cuadrado.ancho * cuadrado.ancho;
        return { area: area };
    }
    crearCuadrado({ ancho: 10 });
    let punto1 = { x: 10, y: 20 };
    // punto1.x = 20;
    let ro = [1, 2, 3, 4, 5];
    // ¿Cómo agregar propiedades a un type previamente definido?
    // Cuando se utiliza type no es posible agregar mas propiedades. Esta es una de las diferencias que existen entre interface vs type. 
})();
