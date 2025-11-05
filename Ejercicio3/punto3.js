class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    ObtenerDetalles(){ 
        console.log(`los detalles del producto son: 
            nombre ${this.nombre} 
            precio ${this.precio} 
            marca ${this.marca}`);
    }
}
class Telefono extends Producto {
    constructor(nombre, precio, marca,almacenamiento, ram) {
        super(nombre, precio, marca)
        this.almacenamiento=almacenamiento;
        this.ram=ram;
    }
    ObtenerDetalles(){
        super.ObtenerDetalles()
        console.log(`El Telefono tiene ${this.almacenamiento} de almacenamiento`)
        console.log(`El Telefono tiene ${this.ram} de memoria ram`)
    }
}
class Laptop extends Producto {
    constructor(nombre, precio, marca,procesador, pulgada) {
        super(nombre, precio, marca)
        this.procesador=procesador;
        this.pulgada=pulgada;
    }
     ObtenerDetalles(){
        super.ObtenerDetalles()
        console.log(`La Laptop tiene ${this.procesador} de procesador`)
        console.log(`La Laptop mide ${this.pulgada} pulgadas`)
    }
}
let ntel= new Telefono("redmi","1000001","xiaomi","3 ","2")
ntel.ObtenerDetalles()

let wdal= new Laptop ("Legion","2349875","Lenovo","Rysen 5","129")
wdal.ObtenerDetalles()