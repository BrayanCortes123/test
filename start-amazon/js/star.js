let star = document.querySelectorAll(".star");
let valor = document.getElementById("valor");

valor.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        updateStars();
    }
});

function updateStars() {
    let valorNumerico = parseFloat(valor.value);

    if (isNaN(valorNumerico) || valorNumerico < 0 || valorNumerico > 5) {
        alert("Ingrese un valor válido entre 0 y 5");
        return;
    }

    let starIndex = Math.floor(valorNumerico);
    let decimalPart = valorNumerico % 1;

    star.forEach((estrella, index) => {
        estrella.classList.remove("fa-regular", "fa-star", "fa-star-half-stroke", "fa-solid");

        if (index < starIndex) {
            estrella.classList.add("fa-solid", "fa-star");
        } else if (index === starIndex && decimalPart > 0) {
            if (decimalPart < 0.3) {
                estrella.classList.add("fa-solid", "fa-star");
            } else if (decimalPart < 0.8) {
                estrella.classList.add("fa-solid", "fa-star-half-stroke");
            } else {
                estrella.classList.add("fa-solid", "fa-star");
            }
        } else {
            estrella.classList.add("fa-regular", "fa-star");
        }
    });
}