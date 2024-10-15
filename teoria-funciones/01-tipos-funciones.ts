(()=>{

// 20-Funciones-como expresiones
function saludar1(fn: (a: string) => void) {
    fn("Hola Mundo");
}
function imprimirEnConsola1(s: string) {
    console.log(s);
}
saludar1(imprimirEnConsola1);

type Fn = (a: string) => void;
function saludar2(fn: Fn) {
    fn("Hola Mundo");
}
function imprimirEnConsola2(s: string) {
    console.log(s);
}
saludar2(imprimirEnConsola2);


// 21-Funciones-call signature (firma de funciones)
type FuncionDescribible = {
    descripcion: string;
    base: number;
    (base: number): number;
};

function imprimirEnConsola(fn: FuncionDescribible) {
    console.log(fn.descripcion + fn(fn.base));
}

const cuadradoDeUnNumero: FuncionDescribible = (base) => {
    return base * base;
};

cuadradoDeUnNumero.descripcion = "El cuadrado de 2 es ";
cuadradoDeUnNumero.base = 2;

imprimirEnConsola(cuadradoDeUnNumero);

const mitadDeUnNumero: FuncionDescribible = (base) => {
    return base / 2;
};

mitadDeUnNumero.descripcion = "La mitad de 10 es ";
mitadDeUnNumero.base = 10;

imprimirEnConsola(mitadDeUnNumero);


// 22-Funciones-constructor signature (firma de constructores)
interface Transporte {
    nombre: string;
}

class Caballo implements Transporte {
    constructor(public nombre: string) {}
}

class Automovil implements Transporte {
    constructor(public nombre: string) {}
}

type ConstructorDeTransporte = {
    new (nombre: string): Transporte;
};

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string) {
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, "Paso Fino");
const miAutomovil = construirTransporte(Automovil, "Toyota");

console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi automovil es un " + miAutomovil.nombre);


// 23-Funciones-generics (genericos)

// Evitar esto
function primerElementoDeUnArreglo(arreglo: any[]) {
    return arreglo[0];
}

// Utilizar generics
function obtenerPrimerElementoDeArreglo<Type>(arreglo: Type[]): Type {
    return arreglo[0];
}

const primerNumero = obtenerPrimerElementoDeArreglo([1, 2, 3, 4]);

console.log("El primer numero es " + primerNumero);

const primeraLetra = obtenerPrimerElementoDeArreglo(["a", "b", "c", "d"]);

console.log("La primera letra es " + primeraLetra);


// 24-Funciones-generics inference (inferencia)
function map<Entrada, Salida>(arr: Entrada[], func: (arg: Entrada) => Salida): Salida[] {
    return arr.map(func);
}

const longitudDeStrings = map(["hola mundo", "adios mundo"], (arg) => {
    return arg.length;
});

// 25-Funciones-constraints (restricciones)
function determinarMasLargo<T extends { length: number }>(a: T, b: T) {
    if (a.length) {
        return a;
    } else {
        return b;
    }
}

const elArregloMasLargo = determinarMasLargo(["a", "b"], ["a", "b", "c"]);

console.log("El arreglo mas largo es ", elArregloMasLargo);

const elStringMasLargo = determinarMasLargo(
    "this is my first text",
    "and this is text which is longer"
);

console.log(`El string mas largo es '${elStringMasLargo}'`);


// 26-Funciones-especificar type arguments (argumentos del Type)
function combinar<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

// combinar([1, 2, 3], ["a"]); 

//Type 'string' is not assignable to type 'number'.
// 5 combinar([1, 2, 3], ["a"]);

// Para poder utilizar la anterior función podemos especificarle los tipos que T puede tener.
// combinar<string | number>([1, 2, 3], ["a"]);


// 27-Funciones-recomendaciones al escribir generics

// primerElemento1 Vs primerElemento2
function primerElemento1<Type>(arr: Type[]) {
    return arr[0];
}

function primerElemento2<Type extends any[]>(arr: Type[]) {
    return arr[0];
}

// filtrar1 Vs filtrar2
function filtrar1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}

function filtrar2<Type, Func extends (arg: Type) => boolean>(
    arr: Type[],
    func: Func
): Type[] {
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
function f1a(n: number) {
    console.log(n.toFixed()); // no se especifican argumentos
    console.log(n.toFixed(3)); // se especifica un argumento
}

function f1b(n?: number) {
    // ...
}

// También es posible asignar un valor por default y omitir el tipo que es inferido desde su asignación.
function f1c(n = 10) {
    // ...
}


// 29-Funciones-overload (sobrecarga)
function longitud1(a: any[]): number;
function longitud1(x: string): number;
function longitud1(x: any): number {
    return x.length;
}

console.log(longitud1("hola mundo"));
console.log(longitud1([1, 2, 3, 4, 5]));

// Podemos simplificar esta función con sobrecarga
//  de una forma mucho mas sencilla usando unions.

function calcularLongitud(x: any[] | string) {
    return x.length;
}

console.log(calcularLongitud("hola mundo"));
console.log(calcularLongitud([1, 2, 3, 4, 5]));


// 30-Funciones-uso de 'this' (esto)
const usuario = {
    id: 123,
    admin: false,
    volverseAdmin: function () {
        this.admin = true;
    },
};

console.log(usuario.admin);
usuario.volverseAdmin();
console.log(usuario.admin);

// Funciona como esperamos 
// Cuando ejecutamos la función volverseAdmin() el valor de admin cambia de false a true.
// false;
// true;

// Pero OJO!!! cuando utilizamos una función de tipo flecha.

const usuario2 = {
    id: 123,
    admin: false,
    volverseAdmin: () => {
        // this.admin = true; // ...El compilador ya muestra error
    },
};

// Si lo ejecutamos igualmente 
// En este caso this no permite hacer cambios a admin por lo cual el valor false se preserva.

console.log(usuario2.admin);
usuario2.volverseAdmin();
console.log(usuario2.admin);

// No Funciona como esperamos 
// false;
// false;


// 31-Funciones-rest parameters (parámetros rest)
function multiplicar(n: number, ...m: number[]): number {
    return m.reduce((p, c) => {
        return p * c;
    }, n);
}

console.log(multiplicar(2, 2));
console.log(multiplicar(2, 2, 3));
console.log(multiplicar(2, 2, 3, 4));


// 32-Funciones-parameter destructuring (destructuración de parámetros)
/**
function sumar1(num) {
    return num.a + num.b + num.c;
}

const numeros = { a: 1, b: 2, c: 3 };

console.log(sumar1(numeros));

function sumar2({ a, b, c }): number {
    return a + b + c;
}

console.log(sumar2({ a: 1, b: 2, c: 3 }));

function sumar3({ a, b, c }: { a: number; b: number; c: number }): number {
    return a + b + c;
}

console.log(sumar3({ a: 1, b: 2, c: 3 }));
*/

// 33-Funciones-void como valor de retorno 






})();

