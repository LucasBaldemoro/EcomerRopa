let ConteinerProdutos = document.querySelector(".ConteinerProdutos");
let inputTexto = document.querySelector("#inputTexto");
let ButtonModo = document.querySelector(".Modo");
let CuerpoPagina = document.querySelector("main");
let Carrito  = document.querySelector(".CarritoContenido")
let CheckAmarillo = document.getElementsByName("amarrillo");
const Articulos = [
  {
    id: "1",
    nombre: "REMERA SEET",
    imagen: "remera1 copy.webp",
    precio: "$19.200",
  },

  {
    id: "2",
    nombre: " REMERA ICE CUBE",
    imagen: "remera2.webp",
    precio: "$19.200",
  },

  {
    id: "3",
    nombre: "REMERA ANGELS      ",
    imagen: "remera3.webp",
    precio: "$23.400",
  },

  {
    id: "4",
    nombre: "REMERA HORSE      ",
    imagen: "remera4.webp",
    precio: "$23.400",
  },

  {
    id: "5",
    nombre: "REMERA BANANA      ",
    imagen: "remera5.webp",
    precio: "$23.400",
  },
  {
    id: "6",
    nombre: "REMERA RELAX      ",
    imagen: "remera6.webp",
    precio: "$23.400",
  },
  {
    id: "7",
    nombre: "REMERA FUTURE      ",
    imagen: "remera7.webp",
    precio: "$23.400",
  },
  {
    id: "8",
    nombre: "REMERA PEANUTS      ",
    imagen: "remera8.webp",
    precio: "$23.400",
  },

  {
    id: "9",
    nombre: "REMERA DAVID      ",
    imagen: "remera david.webp",
    precio: "$23.400",
  },

  {
    id: "10",
    nombre: "REMERA RELAX      ",
    imagen: "remera relax.webp",
    precio: "$23.400",
  },

  {
    id: "11",
    nombre: "REMERA BANANA      ",
    imagen: "remera-banana.webp",
    precio: "$23.400",
  },

  {
    id: "12",
    nombre: "REMERA GLOW      ",
    imagen: "remeraglog.webp",
    precio: "$23.400",
  },
];




let articulo = "";

Articulos.forEach((item) => {
  articulo += `
    <div class='Produt' data-id='${item.id}'>
                      <div class="ImagenConteiner">
                                  <img src='${item.imagen}' class = 'imagen-producto'>

                      </div>

            <h2>${item.nombre}</h2>
                  <span class="Precio">${item.precio}</span>
                  <span class="cuotas">3 cuotas sin interés de $6.400</span>

                    

                        <a href="#" class="ProductoCompra" >Agregar al Carrito</a>
                   
      </div>`;






      
});

ConteinerProdutos.innerHTML = articulo;





let productos = document.querySelectorAll(".Produt")
productos.forEach((producto) => {


let BotonFinalizacion = producto.querySelector(".ProductoCompra")

BotonFinalizacion.addEventListener("click", function() {

  Carrito.innerHTML  += `
    <hr/>

  <div class='ProdutSelecionado' data-id='${producto.id}'>

  <div class='Produtinformacion' >
                    <div class="ImagenConteiner">
                                <img src='${producto.querySelector("img").getAttribute("src")}' class = 'imagen-producto'>

                    </div>

          <h2>${producto.querySelector("h2").textContent}</h2>
          <input type = "number">
   </div>

                  
    <span class="Precio">${producto.querySelector("h2").textContent}</span>

                 
    </div>`;






})





});








inputTexto.addEventListener("input", function () {
  let valortexto = inputTexto.value.trim().toLowerCase();

  ConteinerProdutos.innerHTML = "";

  // Filtrar los productos
  let productosBuscados = Articulos.filter((producto) =>
    producto.nombre.toLowerCase().includes(valortexto)
  );

  // Mostrar los productos filtrados
  productosBuscados.forEach((producto) => {
    ConteinerProdutos.innerHTML += `
         <div class='Produt' data-id='${producto.id}'>
                      <div class="ImagenConteiner">
                    <img src='${producto.imagen}' class = 'imagen-producto'>
                      </div>

            <h2>${producto.nombre}</h2>
                  <span class="Precio">${producto.precio}</span>
                  <span class="cuotas">3 cuotas sin interés de $6.400</span>

                    

                        <a href="#" class="ProductoCompra" >Agregar al Carrito</a>
                   
      </div>`;
  });
});

ButtonModo.addEventListener("click", function () {
  if (!CuerpoPagina.classList.contains("oscuro")) {
    CuerpoPagina.classList.add("oscuro");
  } else {
    CuerpoPagina.classList.remove("oscuro");
  }
});

let CarritoDecompras = document.querySelector(".CarritoDecompras");
let carritocompra = document.querySelector(".carrito-compra");
let BotonCerrar = document.querySelector(".Cerrar");

BotonCerrar.addEventListener("click", function () {
  CarritoDecompras.style.visibility = "hidden";
});

carritocompra.addEventListener("click", function () {
  CarritoDecompras.style.visibility = "visible";



});

