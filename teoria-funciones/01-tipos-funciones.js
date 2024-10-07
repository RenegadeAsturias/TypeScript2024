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
    // 22-Funciones-constructor signature (firma de constructores)
    // 23-Funciones-generics (genericos)
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
