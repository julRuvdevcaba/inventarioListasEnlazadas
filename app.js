
const inventario = new Inventario();

const divDetalles = document.getElementById("detalles");
const formulario = document.getElementById("formProducto");

const txtCod = document.getElementById("txtCod");
const txtNombre = document.getElementById("txtNombre");
const txtCantidad = document.getElementById("txtCantidad");
const txtPrecio = document.getElementById("txtPrecio");
const txtPosicion = document.getElementById("txtPosicion");

const btnAdd = document.getElementById("btnAdd");
const btnAddInicio = document.getElementById("btnAddInicio");
const btnInsertar = document.getElementById("btnInsertar");
const btnBuscar = document.getElementById("btnBuscar");
const btnEliminar = document.getElementById("btnEliminar");
const btnExtraerPrimero = document.getElementById("btnExtraerPrimero");
const btnListar = document.getElementById("btnListar");
const btnCancelar = document.getElementById("btnCancelar");

function crearProducto() {
    const codigo = Number(txtCod.value);
    const nombre = txtNombre.value;
    const cantidad = Number(txtCantidad.value);
    const costo = Number(txtPrecio.value);

    return new Producto(codigo, nombre, cantidad, costo);
}

btnAdd.addEventListener("click", () => {
    const nuevo = crearProducto();
    inventario.agregar(nuevo);
    divDetalles.innerHTML = "<p>Producto agregado al final.</p>" + nuevo.infoHTML();
});

btnAddInicio.addEventListener("click", () => {
    const nuevo = crearProducto();
    inventario.agregarInicio(nuevo);
    divDetalles.innerHTML = "<p>Producto agregado al inicio.</p>" + nuevo.infoHTML();
});

btnInsertar.addEventListener("click", () => {
    const nuevo = crearProducto();
    const posicion = Number(txtPosicion.value);

    if (inventario.insertar(nuevo, posicion)) {
        divDetalles.innerHTML = "<p>Producto insertado correctamente.</p>" + nuevo.infoHTML();
    } else {
        divDetalles.innerHTML = "<p>No se pudo insertar en esa posición.</p>";
    }
});

btnBuscar.addEventListener("click", () => {
    const codigo = Number(txtCod.value);
    const encontrado = inventario.buscar(codigo);

    if (encontrado == null) {
        divDetalles.innerHTML = "<p>No existe un producto con ese código.</p>";
    } else {
        divDetalles.innerHTML = "<p>Producto encontrado:</p>" + encontrado.infoHTML();
    }
});

btnEliminar.addEventListener("click", () => {
    const codigo = Number(txtCod.value);
    const eliminado = inventario.eliminar(codigo);

    if (eliminado == null) {
        divDetalles.innerHTML = "<p>No existe un producto con ese código.</p>";
    } else {
        divDetalles.innerHTML = "<p>Producto eliminado:</p>" + eliminado.infoHTML();
    }
});

btnExtraerPrimero.addEventListener("click", () => {
    const extraido = inventario.extraerPrimero();

    if (extraido == null) {
        divDetalles.innerHTML = "<p>El inventario está vacío.</p>";
    } else {
        divDetalles.innerHTML = "<p>Producto extraído del inicio:</p>" + extraido.infoHTML();
    }
});

btnListar.addEventListener("click", () => {
    divDetalles.innerHTML = inventario.listar();
});

btnCancelar.addEventListener("click", () => {
    divDetalles.innerHTML = "";
});

formulario.addEventListener("reset", () => {
    divDetalles.innerHTML = "";
});
