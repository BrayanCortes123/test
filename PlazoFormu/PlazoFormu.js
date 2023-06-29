
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let fechaActual = new Date();

    let dia = parseInt(document.getElementById('dia').value, 10);
    let year = parseInt(document.getElementById('year').value, 10);
    let hora = parseInt(document.getElementById('hora').value, 10);
    let minutos = parseInt(document.getElementById('minutos').value, 10);

    let fechaVencimiento = new Date(year, fechaActual.getMonth(), dia, hora, minutos);

    let diferencia = fechaVencimiento.getTime() - fechaActual.getTime();

    if (diferencia <= 0) {
      document.getElementById('resultado').innerText = '';
      document.getElementById('mensaje').innerText = 'El plazo ha vencido. No es posible subir el archivo.';
    } else {
      let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById('resultado').innerText = 'Tiempo restante: ' + dias + ' días, ' + horas + ' horas y ' + minutosRestantes + ' minutos.';
      document.getElementById('mensaje').innerText = '';
    }
  });