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
    // 25-Funciones-constraints (restricciones)
    // 26-Funciones-especificar type arguments (argumentos del Type)
    // 27-Funciones-recomendaciones al escribir generics
    // 28-Funciones-parámetros opcionales
    // 29-Funciones-overload (sobrecarga)
    // 30-Funciones-uso de 'this' (esto)
    // 31-Funciones-rest parameters (parámetros rest)
    // 32-Funciones-parameter destructuring (destructuración de parámetros)
    // 33-Funciones-void como valor de retorno 
})();
