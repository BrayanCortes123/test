/* Obtener fecha y hora Greanwich Mean Time */
console.log("== Fecha y Hora GHT ==");
let timeGMT = new Date();
console.log(timeGMT);

/* Hora colombiana */
console.log("== Fecha y Hora en String ==");
let timeGMTStr = timeGMT.toString();
console.log(timeGMTStr);

/* Dia de la Semana */
console.log("== Dia de la Semana ==");
let timeGMTDay = timeGMT.getDay();
let diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles",
                 "Jueves", "Viernes", "Sabado"];
console.log("Hoy es: " + diaSemana[timeGMTDay]);

/* Mes del Año */
console.log("== Mes del Año ==");
let timeGMTMonth = timeGMT.getMonth();
let MesAño = ["Enero", "Febrero", "Marzo", "Abril",
              "Mayo", "Junio", "Julio", "Agosto",
              "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("El Mes es: " + MesAño[timeGMTMonth]);

/* Año */
console.log("== Año ==");
let timeGMTYear = timeGMT.getFullYear();
console.log("El Año es: " + timeGMTYear);

/* Hora */
console.log("==Hora==");
let timeGMTHours = timeGMT.getHours();
console.log("La hora: " + timeGMTHours);

/* Fecha y Hora desfragmentada */
console.log("== Fecha y Hora desfragmentada ==");
let currentTime = new Date();
console.log("Dia de la Semana: " + currentTime.getDay());
console.log("Mes del Año: " + currentTime.getMonth());
console.log("Dia del Mes: " + currentTime.getDate());
console.log("Año: " + currentTime.getFullYear());
console.log("Hora: " + currentTime.getHours());
console.log("Minutos: " + currentTime.getMinutes());
console.log("Segundos: " + currentTime.getSeconds());
console.log("Milisegundos: " + currentTime.getMilliseconds());

/* Saber los Milisegundos transcurridos */
console.log("== Milisegundos transcurridos desde 01/01/1970 ==");
console.log(currentTime.getTime());

/* Establecer una diferencia de fechas */
console.log("== Estableciendo diferencia en Fechas ==");
let newYear2024 = new Date("January 4, 2024");
let FechaActual = new Date();
let newYear2024ms = newYear2024.getTime();
let FechaActualms = FechaActual.getTime();

let milisecDiff = newYear2024ms = FechaActualms;
let diasDiff = milisecDiff / (1000 * 60 * 60 * 24);
console.log("Dias faltante para el año nuevo: " + Math.floor(diasDiff));

/* Para ingresar Fecha y Hora */
console.log("Ingresar Fecha y Hora");
let fechaHora = new Date("July 2, 2023 08:00:00");
let fechaHorams = fechaHora.getTime();
let fechaDiVot = fechaHorams - FechaActualms;
console.log("Segundos faltantes: " + Math.trunc(fechaDiVot) / 1000);
console.log("Minutos faltantes: " + Math.trunc(fechaDiVot) / (1000 * 60));
console.log("Horas faltantes: " + Math.trunc(fechaDiVot) / (1000 * 60 * 60));
console.log("Dias faltantes: " + Math.trunc(fechaDiVot) / (1000 * 60 * 60 * 24));

calculartiempovotaciones();

function calculartiempovotaciones() {
    let fechaHora = new Date("June 30, 2023 08:00:00");
    let fechaHorams = fechaHora.getTime();
    let fechaDiVot = fechaHorams - FechaActualms;
    let diasRestantes = Math.floor(fechaDiVot / (1000 * 60 * 60 * 24));
    let horasRestantes = Math.floor(fechaDiVot / (1000 * 60 * 60));
    let horasRestantesDecim = Math.floor(horasRestantes % 24);
    let minutosRestantes = fechaDiVot / (1000 * 60);
    let minutosRestantesSinDecim = Math.floor(minutosRestantes % 60);
    console.log("El tiempo restante para las votaciones es: " + diasRestantes + " Dias, " + horasRestantesDecim + " Horas y " + minutosRestantesSinDecim);
}