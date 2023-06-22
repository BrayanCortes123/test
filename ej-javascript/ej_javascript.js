/* Activando el modo strict */
"use strict"

/* Ejercico N° 1 */
/* El siguiente codigo se ejecuta una vez cargue el documento html */
alert("Bienvenidos al mundo de Js");

/* Ejercicio N° 2, use strict no permita utilizar variables que no hayan sido declaradas */
let nombreAprendiz = "Brayan Stiven";
alert(nombreAprendiz);

/* Ejercicio N° 3 */
/* crear 2 variables de tipo string (Nombres Apellidos) y las mostramos en consola... */
let nombresAprendiz = "Brayan Stiven";
let apellidosAprendiz = "Cortes Castro";
console.log(nombreAprendiz + " " + apellidosAprendiz);

/* Ejercicio N° 4 */
let num1Int = 5; 
let num2Int = 10;
let num1Str = "2";
let num2Str = "8";

console.log();
console.log("Ejercicio 4");
console.log("Entero + Entero (5+10)");
console.log(num1Int + num2Int);
console.log("Entero + String (\"2\" + \"8\")");
console.log(num1Str + num2Str);
console.log("Entero + String (\"5+\"  2\")");
console.log(num1Int + num1Str);

/* Ejercicio N° 5 */
/* De String a Entero */
console.log("Convertir explicita de variable");
console.log("Convertir String a entero");
let num1Inte = parseInt(num1Str);
let resultadoint = num1Int + num2Int;
console.log(resultadoint);

/* De Entero a String */
console.log("Convertir explicita de entero a string");
let num3Str = num1Int.toString();
let resultadostr = num1Str + num3Str;
console.log(resultadostr);

/* De Entero y String a Decimal */
let num1Float = parseFloat(num1Int);
let nume3Float = parseFloat(num3Str);
let num5Float = 5.3;
console.log("valores:" + num1Float + " + " + nume3Float + " + " + num5Float);
console.log("Resultado:" + (num1Float + nume3Float + num5Float));

/* De Decimal a entero */ 
let num6int = Math.ceil(num5Float);
console.log("Coversion de decimal (5.3) a entero con ajuste hacia el techo" + num6int);

console.log("Operadores Aritmeticos");

let numero1 = 8;
let numero2 = 6;

let resultado1 = (numero1/numero2);

console.log("Suma");
console.log("8 + 6 =" + (numero1+numero2));
console.log("Resta");
console.log("8 - 6 =" + (numero1-numero2));
console.log("Multiplicacion");
console.log("8 * 6 =" + (numero1*numero2));
console.log("Division");
console.log("8 / 6 =" + (numero1/numero2));
console.log("Redondear segun el promedio");
console.log("8 / 6 =" + (Math.round(resultado1)));
console.log("Redondear segun el promedio hacia arriba");
console.log("8 / 6 =" + (Math.ceil(resultado1)));
console.log("Redondear segun el promedio hacia abajo");
console.log("8 / 6 =" + (Math.floor(resultado1)));