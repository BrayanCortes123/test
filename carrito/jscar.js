let imgBox = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini1.addEventListener("click",function(){
    imgBox.setAttribute("src","carrito/img/image-1.jpg")
    boxImgBox1.classList.add("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox1.classList.add("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
})

imgMini2.addEventListener("click",function(){
    imgBox.setAttribute("src","carrito/img/image-2.jpg")
    boxImgBox2.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox2.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
})

imgMini3.addEventListener("click",function(){
    imgBox.setAttribute("src","carrito/img/image-3.jpg")
    boxImgBox3.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox4.classList.remove("box-img-mini")
    boxImgBox3.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox4.classList.remove("img-mini-act")
})
imgMini4.addEventListener("click",function(){
    imgBox.setAttribute("src","carrito/img/image-4.jpg")
    boxImgBox4.classList.add("box-img-mini")
    boxImgBox1.classList.remove("box-img-mini")
    boxImgBox2.classList.remove("box-img-mini")
    boxImgBox3.classList.remove("box-img-mini")
    boxImgBox4.classList.add("img-mini-act")
    boxImgBox1.classList.remove("img-mini-act")
    boxImgBox2.classList.remove("img-mini-act")
    boxImgBox3.classList.remove("img-mini-act")
})


/*botones de disminucion y aumento*/
let cantibox = document.getElementById("cantibox");
let btnmenos = document.getElementById("btnmenos");
let btncanti = document.getElementById("btncanti");
let btnmas = document.getElementById("btnmas");
let num = document.getElementById("num");


btnmas.addEventListener("click", function() {
       let numtxt = document.getElementById("num").innerHTML;
       let numInt = parseInt(numtxt);
       let totalEleInt = numInt + 1;
       let totalEletxt= totalEleInt.toString();
       num.innerHTML = totalEletxt;

});

btnmenos.addEventListener("click", function() {
    let numtxt = document.getElementById("num").innerHTML;
    let numInt = parseInt(numtxt);
    let totalEleInt = numInt - 1;
    let totalEletxt= totalEleInt.toString();
    num.innerHTML = totalEletxt;

});


