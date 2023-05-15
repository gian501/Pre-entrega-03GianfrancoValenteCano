let productAgCarr = localStorage.getItem("productos-en-carrito");
productAgCarr = JSON.parse(productAgCarr); 

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoAcc = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const cTotal = document.querySelector("#total");
const bComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito() {
    if (productAgCarr && productAgCarr.length > 0) {

        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcc.classList.remove("disabled");
        carritoComprado.classList.add("disabled");
    
        carritoProductos.innerHTML = "";
    
        productAgCarr.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p><span data-id ='${producto.id}'class="restar"> - </span>${producto.cantidad}<span data-id='${producto.id}' class="sumar"> + </span></p>
                </div>  
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            carritoProductos.append(div);
        })

    } else {
        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcc.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }
    actualizarBotonesSumar()
    actualizarBotonesResta()
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productAgCarr.findIndex(producto => producto.id === idBoton);
    productAgCarr.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productAgCarr));

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    productAgCarr.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productAgCarr));
    cargarProductosCarrito();

}



function actualizarTotal() {
    const totalCalculado = productAgCarr.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    cTotal.innerText = `$${totalCalculado}`;
}



bComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    productAgCarr.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productAgCarr));
    
    carritoVacio.classList.add("disabled");
    carritoProductos.classList.add("disabled");
    carritoAcc.classList.add("disabled");
    carritoComprado.classList.remove("disabled");

}



function actualizarBotonesSumar() {
    const botonesSumar = document.querySelectorAll(".sumar");

    botonesSumar.forEach((btn) => {
        btn.addEventListener("click", sumarUnitCarrito);
    });
}

function sumarUnitCarrito(e) {
    e.preventDefault();
    const idProductS = e.currentTarget.dataset.id;
    const indice = productAgCarr.findIndex((p) => p.id === idProductS);
    productAgCarr[indice].cantidad++;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productAgCarr));
    cargarProductosCarrito();

}
function actualizarBotonesResta() {
    const botonesResta = document.querySelectorAll(".restar");
    botonesResta.forEach((boton) => {
        boton.addEventListener("click", restarUnitCarrito);
    });
}

function restarUnitCarrito(e) {
    e.preventDefault();
    const idProductR = e.currentTarget.dataset.id;
    const indic = productAgCarr.findIndex((produc) => produc.id === idProductR);
    if(productAgCarr[indic].cantidad > 1){
        productAgCarr[indic].cantidad--;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productAgCarr));
        cargarProductosCarrito();
    }
    
}






       
                
                
            


 