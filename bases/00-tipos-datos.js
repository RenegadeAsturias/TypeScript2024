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
})();
