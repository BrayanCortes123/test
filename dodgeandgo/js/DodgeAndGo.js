let mainbicy = document.getElementById("mainbicy");
let mainbicyTwo = document.getElementById("mainbicyTwo");
let mainimg = document.getElementById("mainimg");

window.addEventListener("keydown", function(event){
    if (event.key == "ArrowRight") {
        mainimg.classList.add("main-img-1")
        mainimg.classList.remove("main-img-0")
    }
});

window.addEventListener("keydown", function(event){
    if (event.key == "ArrowUp"){
        mainbicy.style.bottom = "70px";
    }
});

window.addEventListener("keydown", function(event){
    if (event.key == "ArrowDown"){
        mainbicy.style.bottom = "0px";
    }
});

// Bicicleta 2

window.addEventListener("keydown", function(event){
    if (event.key == "d" || event.key == "D") {
        mainimg.classList.add("main-img-1")
        mainimg.classList.remove("main-img-0")
    }
});

window.addEventListener("keydown", function(event){
    if (event.key == "s" || event.key == "S"){
        mainbicyTwo.style.bottom = "-70px";
    }
});

window.addEventListener("keydown", function(event){
    if (event.key == "w" || event.key == "W"){
        mainbicyTwo.style.bottom = "0px";
    }
});



