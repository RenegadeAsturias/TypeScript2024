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

