class Vehiculo {
   constructor(marca, modelo, año) {
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
        this.detalles=false
    };
    ObtenerDetalles(){
        this.detalles = true
        console.log(`los detalles de vehucolo son: marca ${this.marca} el modelo es: ${this.modelo} y su año de salida es ${this.año}`);
    }
}
class carro extends Vehiculo {
        constructor(marca, modelo, año, Npuertas) {
            super(marca,modelo,año)
            this.Npuertas=Npuertas
        }
        ObtenerDetalles(){
            super.ObtenerDetalles()
            console.log(`El carro tiene ${this.Npuertas} puertas`);
        }
    }

class moto extends Vehiculo {
        constructor(marca, modelo, año, cilindraje) {
            super(marca,modelo,año)
            this.cilindraje=cilindraje
        }
        ObtenerDetalles(){
            super.ObtenerDetalles()
            console.log(`el cilindraje de la moto es ${this.cilindraje}`);
            
        }
    }
let auto= new carro("Ferrari","XM8","2009", "2" )
 auto.ObtenerDetalles()
 let Mbike= new moto("Yamaha","YZF-R3","2025", "180" )
 Mbike.ObtenerDetalles()