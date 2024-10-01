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




})();

