class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.sig = null;
    }

    infoHTML() {
        return "<div><p><strong>Código:</strong> " + this.codigo +
            "</p><p><strong>Nombre:</strong> " + this.nombre +
            "</p><p><strong>Cantidad:</strong> " + this.cantidad +
            "</p><p><strong>Costo:</strong> $" + this.costo +
            "</p></div>";
    }

    info() {
        return "Código: " + this.codigo +
            ", Nombre: " + this.nombre +
            ", Cantidad: " + this.cantidad +
            ", Costo: $" + this.costo;
    }
}