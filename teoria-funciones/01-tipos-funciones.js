"use strict";
(() => {
    // 20-Funciones-como expresiones
    function saludar1(fn) {
        fn("Hola Mundo");
    }
    function imprimirEnConsola1(s) {
        console.log(s);
    }
    saludar1(imprimirEnConsola1);
    function saludar2(fn) {
        fn("Hola Mundo");
    }
    function imprimirEnConsola2(s) {
        console.log(s);
    }
    saludar2(imprimirEnConsola2);
    function imprimirEnConsola(fn) {
        console.log(fn.descripcion + fn(fn.base));
    }
    const cuadradoDeUnNumero = (base) => {
        return base * base;
    };
    cuadradoDeUnNumero.descripcion = "El cuadrado de 2 es ";
    cuadradoDeUnNumero.base = 2;
    imprimirEnConsola(cuadradoDeUnNumero);
    const mitadDeUnNumero = (base) => {
        return base / 2;
    };
    mitadDeUnNumero.descripcion = "La mitad de 10 es ";
    mitadDeUnNumero.base = 10;
    imprimirEnConsola(mitadDeUnNumero);
    class Caballo {
        constructor(nombre) {
            this.nombre = nombre;
        }
    }
    class Automovil {
        constructor(nombre) {
            this.nombre = nombre;
        }
    }
    function construirTransporte(ctr, nombre) {
        return new ctr(nombre);
    }
    const miCaballo = construirTransporte(Caballo, "Paso Fino");
    const miAutomovil = construirTransporte(Automovil, "Toyota");
    console.log("Mi caballo se llama " + miCaballo.nombre);
    console.log("Mi automovil es un " + miAutomovil.nombre);
    // 23-Funciones-generics (genericos)
    // Evitar esto
    function primerElementoDeUnArreglo(arreglo) {
        return arreglo[0];
    }
    // Utilizar generics
    function obtenerPrimerElementoDeArreglo(arreglo) {
        return arreglo[0];
    }
    const primerNumero = obtenerPrimerElementoDeArreglo([1, 2, 3, 4]);
    console.log("El primer numero es " + primerNumero);
    const primeraLetra = obtenerPrimerElementoDeArreglo(["a", "b", "c", "d"]);
    console.log("La primera letra es " + primeraLetra);
    // 24-Funciones-generics inference (inferencia)
    function map(arr, func) {
        return arr.map(func);
    }
    const longitudDeStrings = map(["hola mundo", "adios mundo"], (arg) => {
        return arg.length;
    });
    // 25-Funciones-constraints (restricciones)
    function determinarMasLargo(a, b) {
        if (a.length) {
            return a;
        }
        else {
            return b;
        }
    }
    const elArregloMasLargo = determinarMasLargo(["a", "b"], ["a", "b", "c"]);
    console.log("El arreglo mas largo es ", elArregloMasLargo);
    const elStringMasLargo = determinarMasLargo("this is my first text", "and this is text which is longer");
    console.log(`El string mas largo es '${elStringMasLargo}'`);
    // 26-Funciones-especificar type arguments (argumentos del Type)
    function combinar(arr1, arr2) {
        return arr1.concat(arr2);
    }
    // combinar([1, 2, 3], ["a"]); 
    //Type 'string' is not assignable to type 'number'.
    // 5 combinar([1, 2, 3], ["a"]);
    // Para poder utilizar la anterior función podemos especificarle los tipos que T puede tener.
    // combinar<string | number>([1, 2, 3], ["a"]);
    // 27-Funciones-recomendaciones al escribir generics
    // primerElemento1 Vs primerElemento2
    function primerElemento1(arr) {
        return arr[0];
    }
    function primerElemento2(arr) {
        return arr[0];
    }
    // filtrar1 Vs filtrar2
    function filtrar1(arr, func) {
        return arr.filter(func);
    }
    function filtrar2(arr, func) {
        return arr.filter(func);
    }
    /** saludarEj1 Vs saludarEj2
    function saludarEj1(Type extends string)(s: Type) {
        console.log("Hola " + s);
    }
    
    function saludarEj2(s: string) {
        console.log("Hola " + s);
    } */
    // 28-Funciones-parámetros opcionales
    function f1a(n) {
        console.log(n.toFixed()); // no se especifican argumentos
        console.log(n.toFixed(3)); // se especifica un argumento
    }
    function f1b(n) {
        // ...
    }
    // También es posible asignar un valor por default y omitir el tipo que es inferido desde su asignación.
    function f1c(n = 10) {
        // ...
    }
    // 29-Funciones-overload (sobrecarga)
    // 30-Funciones-uso de 'this' (esto)
    // 31-Funciones-rest parameters (parámetros rest)
    // 32-Funciones-parameter destructuring (destructuración de parámetros)
    // 33-Funciones-void como valor de retorno 
})();
