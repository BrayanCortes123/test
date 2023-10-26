class Automovil {
  constructor(marca, modelo, precio, anyo, ciudad, Kilometros) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.anyo = anyo;
    this.ciudad = ciudad;
    this.Kilometros = Kilometros;
  }
}

let auto1 = new Automovil("Toyota", "Prado", 350000000, 2015, "Garzon - Huila", 1000);
let auto2 = new Automovil("Ford", "Mustang", 202000000, 2020, "Neiva - Huila", 16600);
let auto3 = new Automovil("Chevrolet", "Camaro", 158000000, 2016, "Pitalito - Huila", 27600);

let autos = [auto1, auto2, auto3];

let inputBusqueda = document.getElementById("busqueda");

inputBusqueda.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";
      let mainContent = document.getElementById("mainContent");
      mainContent.innerHTML = "";
      let busqueda = inputBusqueda.value;
      for (let i = 0; i < autos.length; i++) {
          let auto = autos[i];
          if (auto.marca.toLowerCase().startsWith(busqueda.toLowerCase())) {
              let boxAuto = document.createElement("div");
              mainContent.appendChild(boxAuto);
              boxAuto.setAttribute("class", "box-auto");

              let boxImg = document.createElement("div");
              boxAuto.appendChild(boxImg);
              boxImg.setAttribute("class", "box-img");

              let imgAuto = document.createElement("img");
              imgAuto.setAttribute("class", "img-auto");
              boxImg.appendChild(imgAuto);

              if (auto.marca === "Toyota") {
                  imgAuto.setAttribute("src", "MercadoLibre/img/toyota.png");
              } else if (auto.marca === "Ford") {
                  imgAuto.setAttribute("src", "MercadoLibre/img/mustang.png");
              } else if (auto.marca === "Chevrolet") {
                  imgAuto.setAttribute("src", "MercadoLibre/img/camaro.png");
              }
  
          let boxCorazon = document.createElement("div");
          boxImg.appendChild(boxCorazon);
          boxCorazon.setAttribute("class", "box-corazon");
  
          let corazon = document.createElement("div");
          boxCorazon.appendChild(corazon);
          corazon.setAttribute("class", "corazon");
  
          let iconHearth = document.createElement("i");
          corazon.appendChild(iconHearth);
          iconHearth.setAttribute("class", "icon-style-hearth fa-regular fa-heart");
  
          let isLiked = false; 
          corazon.addEventListener("click", function () {
            if (isLiked) {
              iconHearth.classList.remove("clicked");
              isLiked = false;
            } else {
              iconHearth.classList.add("clicked");
              isLiked = true;
            }
          });
  
          let boxInfo = document.createElement("div");
          boxAuto.appendChild(boxInfo);
  
          let txtMarca = document.createElement("label");
          boxInfo.appendChild(txtMarca);
          boxInfo.setAttribute("class", "box-info");
  
          txtMarca.innerHTML = auto.marca;
  
          let txtModelo = document.createElement("label");
          boxInfo.appendChild(txtModelo);
          txtModelo.innerHTML = " " + auto.modelo;
  
          let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio);
          let txtPrecio = document.createElement("label");
          boxInfo.appendChild(txtPrecio);
          txtPrecio.innerHTML = " " + precioFormat;
  
          let boxProcedencia = document.createElement("div");
          boxInfo.appendChild(boxProcedencia);
          boxProcedencia.setAttribute("class", "box-procedencia");
  
          let txtanyo = document.createElement("label");
          boxProcedencia.appendChild(txtanyo);
          txtanyo.innerHTML = auto.anyo + " · ";
  
          let txtKilometros = document.createElement("label");
          boxProcedencia.appendChild(txtKilometros);
          let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.Kilometros);
          txtKilometros.innerHTML = txtKilometrosFormat + " km · ";
  
          let txtciudad = document.createElement("label");
          boxProcedencia.appendChild(txtciudad);
          txtciudad.innerHTML = auto.ciudad;
  
          let boxLineaDiv = document.createElement("div");
          mainContent.appendChild(boxLineaDiv);
          boxLineaDiv.setAttribute("class", "box-linea-div");
        }
      }
    }
  });
  