console.log("Hola mundo!!!!!!!");

let ciudad ="pitalito";

/* Toda la oracion en mayuscula */
let ciudadupper = ciudad.toUpperCase();
console.log("Toda la oracion en mayuscula: "+ciudadupper);

/* Toda la oracion en miniscula */
let ciudadlow = ciudad.toLowerCase();
console.log("Toda la oracion en miniscula: "+ciudadlow);

/* Primer letra en mayuscula */
let ciudadOracion = ciudad[0].toUpperCase()+ciudad.slice(1).toLowerCase();
console.log("Primer letra en mayuscula: "+ciudadOracion);

/* Extraer partes de una cadena */
let year = "2023-06-22";
let yearStr = year.toString();
let yearCard = yearStr.slice(2, 4);
console.log("Extraer partes de una cadena: "+ yearCard);

/* Saber la cantidad de caracteres en una oracion */
let nombres = "Brayan Stiven Cortes Castro";
let cantNombres = nombres.length;
console.log("Cantidad de letras: "+ cantNombres);

