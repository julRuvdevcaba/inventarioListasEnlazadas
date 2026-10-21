class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {
        nuevo.sig = null;

        if (this.primero == null) {
            this.primero = nuevo;
        } else {
            let aux = this.primero;

            while (aux.sig != null) {
                aux = aux.sig;
            }

            aux.sig = nuevo;
        }
    }

    agregarInicio(nuevo) {
        nuevo.sig = this.primero;
        this.primero = nuevo;
    }

    insertar(nuevo, posicion) {
        if (posicion < 0 ) {
            return false;
        }

        if (posicion == 0) {
            this.agregarInicio(nuevo);
            return true;
        }

        let aux = this.primero;
        let i = 0;

        while (aux != null && i < posicion - 1) {
            aux = aux.sig;
            i++;
        }

        if (aux == null) {
            return false;
        }

        nuevo.sig = aux.sig;
        aux.sig = nuevo;

        return true;
    }

    buscar(codigo) {
        let aux = this.primero;

        while (aux != null) {
            if (aux.codigo == codigo) {
                return aux;
            }

            aux = aux.sig;
        }

        return null;
    }

    eliminar(codigo) {
        if (this.primero == null) {
            return null;
        }

        if (this.primero.codigo == codigo) {
            let eliminado = this.primero;
            this.primero = this.primero.sig;
            eliminado.sig = null;
            return eliminado;
        }

        let aux = this.primero;

        while (aux.sig != null && aux.sig.codigo != codigo) {
            aux = aux.sig;
        }

        if (aux.sig == null) {
            return null;
        }

        let eliminado = aux.sig;
        aux.sig = eliminado.sig;
        eliminado.sig = null;

        return eliminado;
    }

    extraerPrimero() {
        if (this.primero == null) {
            return null;
        }

        let extraido = this.primero;
        this.primero = this.primero.sig;
        extraido.sig = null;

        return extraido;
    }

    listar() {
        let texto = "";
        let aux = this.primero;

        if (aux == null) {
            return "<p>El inventario está vacío.</p>";
        }

        while (aux != null) {
            texto += aux.infoHTML();
            aux = aux.sig;
        }

        return texto;
    }
}