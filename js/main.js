// PRODUCTOS
const productos = [
    // Cervezas
    {
        id: "cerveza-01",
        titulo: "Stella Artois",
        imagen: "./img/cervezas/01.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 650
    },
    {
        id: "cerveza-02",
        titulo: "Heineken",
        imagen: "./img/cervezas/02.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 550
    },
    {
        id: "cerveza-03",
        titulo: "Goolsh",
        imagen: "./img/cervezas/03.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 900
    },
    {
        id: "cerveza-04",
        titulo: "Blue Moon",
        imagen: "./img/cervezas/04.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 800
    },
    {
        id: "cerveza-05",
        titulo: "Corona",
        imagen: "./img/cervezas/05.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 600
    },
    // Whisky
    {
        id: "Whisky-01",
        titulo: "Glenmorangie The Quinta Ruban Whisky 700 ml",
        imagen: "./img/whisky/01.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 73000
    },
    {
        id: "Whisky-02",
        titulo: "Johnnie Walker Blue Label Whisky 750 ml",
        imagen: "./img/whisky/02.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 101000
    },
    {
        id: "Whisky-03",
        titulo: "Makers Mark Whisky 750 ml",
        imagen: "./img/whisky/03.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 21000
    },
    {
        id: "Whisky-04",
        titulo: "Glenfiddich 15 Años Whisky 750 ml",
        imagen: "./img/whisky/04.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 50000
    },
    {
        id: "Whisky-05",
        titulo: "The Macallan Triple Cask 12 Años Whisky 700 ml",
        imagen: "./img/whisky/05.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 71000
    },
    {
        id: "Whisky-06",
        titulo: "Glen Moray Heritage 18 Años Whisky 700 ml",
        imagen: "./img/whisky/06.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 110000
    },
    {
        id: "Whisky-07",
        titulo: "The Macallan Sherry Oak 12 Años Whisky 750 ml",
        imagen: "./img/whisky/07.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 95000
    },
    {
        id: "Whisky-08",
        titulo: "Chivas Regal Royal Salute 21 Años Sapphire Whisky 700 ml",
        imagen: "./img/whisky/08.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 95000
    },
    // Gin
    {
        id: "Gin-01",
        titulo: "Bombay Gin 750 ml",
        imagen: "./img/gin/01.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 7500
    },
    {
        id: "Gin-02",
        titulo: "Hendricks Gin 700 ml",
        imagen: "./img/gin/02.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 19000
    },
    {
        id: "Gin-03",
        titulo: "Rutte Sloe Gin 700 ml",
        imagen: "./img/gin/03.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 40000
    },
    {
        id: "Gin-04",
        titulo: "Puerto de Indias Black Edition Gin 700 ml",
        imagen: "./img/gin/04.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 26000
    },
    {
        id: "Gin-05",
        titulo: "Tanqueray Gin 700 ml",
        imagen: "./img/gin/05.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 10000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";//cada vez que se ejecute, limpia y hace el forEach que coincida con la condicion 

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");//contenedor de cada producto
        div.classList.add("producto");// le damos la clase producto
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;//lo que le agregamos adentro a cada div;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos)

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "catalogo") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);//realiza un filtro por cada categoria de productos
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}




let productosEnCarrito;

const productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    //check si el producto esta en el array
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}