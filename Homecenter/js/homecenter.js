let lupaCel = document.getElementById("lupaCel");
let seekerCellID = document.getElementById("seekerCellID");
let xSalid = document.getElementById("xSalid");
let mensajeAyuda = document.getElementById("mensajeAyuda");
let ana = document.getElementById("ana");
let mujerYAna = document.getElementById("mujerYAna");
let ayudaBox = document.getElementById("ayudaBox");
let xCircle = document.getElementById("xCircle");
let chatBox = document.getElementById("chatBox");
let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let sliderMoving = document.getElementById("sliderMoving");
let currentIndex = 0;
let dots = document.querySelectorAll(".mini-dot");
/* let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let dot4 = document.getElementById("dot4"); */

lupaCel.addEventListener("click",function(){
    seekerCellID.classList.add("seekerCell-hidden");
    seekerCellID.classList.remove("seeker-cell");
})

xSalid.addEventListener("click",function(){
    seekerCellID.classList.remove("seekerCell-hidden");
    seekerCellID.classList.add("seeker-cell");
})
ana.addEventListener("click",function(){
    if(mensajeAyuda.classList.contains("mensaje-ayuda")) {
        mensajeAyuda.classList.remove("mensaje-ayuda");
        mensajeAyuda.classList.add("mensaje-ayuda-hidden");
        mujerYAna.classList.remove("mujer-y-ana");
        mujerYAna.classList.add("mujer-y-ana-hidden");
        ayudaBox.classList.remove("ayuda");
        ayudaBox.classList.add("ayuda-new");
        ana.classList.add("asistente-new");
        ana.classList.remove("asistente");
        xCircle.classList.add("x-circle-hidden");
        xCircle.classList.remove("x-circle");
        chatBox.classList.add("chat");
        chatBox.classList.remove("chat-hidden");
    } else {
        mensajeAyuda.classList.add("mensaje-ayuda");
        mensajeAyuda.classList.remove("mensaje-ayuda-hidden");
        mujerYAna.classList.add("mujer-y-ana");
        mujerYAna.classList.remove("mujer-y-ana-hidden");
        ayudaBox.classList.add("ayuda");
        ayudaBox.classList.remove("ayuda-new");
        ana.classList.remove("asistente-new");
        ana.classList.add("asistente");
        xCircle.classList.remove("x-circle-hidden");
        xCircle.classList.add("x-circle");
        chatBox.classList.remove("chat");
        chatBox.classList.add("chat-hidden");
    }
});

leftArrow.style.display = "none";

rightArrow.addEventListener("click", function () {
    dots[currentIndex].style.fontSize = "0.01em"; // Restaura el tamaño de fuente del punto actual
    currentIndex++;
    if (currentIndex === 1) {
        leftArrow.style.display = "flex"; 
    }
    if (currentIndex > 2) {
        currentIndex = 3;
        rightArrow.style.display = "none"; 
    }
    sliderMoving.style.transform = `translateX(-${currentIndex * 102}%)`;
    leftArrow.style.display = "flex"; 
    dots[currentIndex].style.fontSize = "0.4em"; // Ajusta el tamaño de fuente del nuevo punto actual
});

leftArrow.addEventListener("click", function () {
    dots[currentIndex].style.fontSize = "0.01em"; // Restaura el tamaño de fuente del punto actual
    currentIndex--;
    if (currentIndex === 2) {
        rightArrow.style.display = "flex";
    }
    if (currentIndex < 1) {
        currentIndex = 0;
        leftArrow.style.display = "none"; 
    }
    sliderMoving.style.transform = `translateX(-${currentIndex * 102}%)`;
    rightArrow.style.display = "flex"; 
    dots[currentIndex].style.fontSize = "0.4em"; // Ajusta el tamaño de fuente del nuevo punto actual
});


