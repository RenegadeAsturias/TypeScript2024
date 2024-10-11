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



// 29-Funciones-overload (sobrecarga)



// 30-Funciones-uso de 'this' (esto)



// 31-Funciones-rest parameters (parámetros rest)



// 32-Funciones-parameter destructuring (destructuración de parámetros)



// 33-Funciones-void como valor de retorno 






})();

