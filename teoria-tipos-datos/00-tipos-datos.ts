(()=>{

// 01-boolean
let esVerdadero = true;
console.log(esVerdadero);

// 02-number (númerico)
let entero: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octal: number = 0o744;

// 03-string (cadena de caracteres)
let marca: string = "toyota";
let modelo: string = "prius";

let nombre: string = "Raul";
let apellido: string = "Jimenez";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;

// 04-arrays (arreglos)

// Ambas formas de declarar el arreglo producen el mismo efecto. 
let listaDeNumeros: number[] = [1, 2, 3];
// listaDeNumeros.push("a"); -Error!
let listaDeNumeros2: Array<number> = [1, 2, 3];

// 05-tuples (tuplas)

let futbolista: [string, number];
futbolista = ["Raul Jimenez", 28];
console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

// 06-enums (enumeradores)

enum MarcasDeCoche1 {
    Toyota,
    Chevrolet,
    Ford,
}

let prius1: MarcasDeCoche1 = MarcasDeCoche1.Toyota;
console.log(prius1);

enum MarcasDeCoche2 {
    Toyota = 100,
    Chevrolet,
    Ford,
}

let prius2: MarcasDeCoche2 = MarcasDeCoche2.Toyota;
console.log(prius2);
// Esto dará undefined porque el índice de MarcasDeCoche2 empieza en 100 (Toyota=100)
console.log(MarcasDeCoche2[0]); 
// Para acceder los índices posibles sería [100],[101],[102]
console.log(MarcasDeCoche2[100]); 

// 07-any (cualquiera)

let variableSinTipo: any = "Hola Mundo"; // Tratar de evitar siempre que sea posible
variableSinTipo = 100;
console.log(`variableSinTipo=${variableSinTipo}`);

// 08-unknown (desconocido)
let valorDesconocido: unknown = 4;
valorDesconocido = true;

// 09-void (ninguno)
function saludar(): void {
    console.log("Hola Mundo");
}
saludar();

// 10-null y undefined (null e indefinido)
let variableSinDefinir: undefined = undefined;
let variableNula: null = null;

// 11-never (nunca)
// esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}
// esta funcion no tiene un punto final ya que dispara un error
function fallo(): never {
    return error("Reportar fallo");
}
// esta funcion no finaliza ya que posee un loop infinito
function loopInfinito(): never {
    while (true) {}
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
function imprimirId1(id: number | string) {
    console.log(`El id es ${id}`);
}
imprimirId1(1);
imprimirId1("abc");

function imprimirId2(id: number | string) {
    if (typeof id === "string") {
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}
imprimirId2("este_es_mi_id");
imprimirId2(100.234234123);

// 14-type assertion (confirmación de tipos)
let algunValor1: unknown = "esto es un string";
let longitudDelString1: number = (algunValor1 as string).length;

// Otra forma de llevar a cabo la misma operación es utilizando <tipo> antes de la variable.
let algunValor2: unknown = "este es un string";
let longitudDelString2: number = (<string>algunValor2).length;

// 15-functions (funciones)

function elevarAlCuadrado(base: number): number {
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

// 16-aliases (alias)

// Alias:
type Punto = {
    x: number;
    y: number;
};

function imprimirCoordenada(punto: Punto) {
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada y es : ${punto.y}`);
}
imprimirCoordenada({ x: 10, y: 25 });

type TextoEnMayusculas = string;

function convertirMayusculas(texto: string): TextoEnMayusculas {
    return texto.toUpperCase();
}
console.log(convertirMayusculas("hola mundo"));

// 17-interfaces (interfaces)

function imprimirEtiqueta1(etiqueta: { label: string }) {
    console.log(etiqueta.label);
}

let miEtiqueta1 = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta1(miEtiqueta1);

interface Etiqueta {
    label: string;
}

function imprimirEtiqueta2(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
}

let miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta" };

imprimirEtiqueta2(miEtiqueta2);


interface Cuadrado {
    color?: string;
    ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): { area: number } {
    const area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}

crearCuadrado({ ancho: 10 });


interface Punto1 {
    readonly x: number;
    readonly y: number;
}

let punto1: Punto1 = { x: 10, y: 20 };
// punto1.x = 20;

let ro: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// ro.push(6);


// 18-interfaces vs types (interfaces vs tipos)

interface Transporte {
    nombre: string;
}

type Figura = {
    nombre: string;
};

// ¿Cómo extender una interface?
interface Auto extends Transporte {
    ruedas: number;
}

// ¿Cómo extender un type?
type Cuadrado1 = Figura & {
    lados: 4;
};

// ¿Cómo agregar mas propiedades a una interface previamente definida?
interface Transporte {
    peso: number;
}

// ¿Cómo agregar propiedades a un type previamente definido?
// Cuando se utiliza type no es posible agregar mas propiedades. Esta es una de las diferencias que existen entre interface vs type. 




})();

