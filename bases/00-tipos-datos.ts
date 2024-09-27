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



