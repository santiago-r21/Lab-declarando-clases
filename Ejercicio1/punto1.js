class Vehiculo {
   constructor(marca, modelo, placa) {
        this.marca=marca;
        this.modelo=modelo;
        this.placa=placa;
        this.detalles=false
    };
    ObtenerDetalles(){
        this.detalles = true
        console.log(`los detalles de vehucolo son: marca ${this.marca} el modelo es: ${this.modelo} y la placa es ${this.placa}`);
    }
}
class carro extends Vehiculo {
        constructor(marca, modelo, placa, Npuertas) {
            super(marca,modelo,placa)
            this.Npuertas=Npuertas
        }
        ObtenerDetalles(){
            super.ObtenerDetalles()
            console.log(`El carro tiene ${this.Npuertas} puertas`);
        }
    }

class moto extends Vehiculo {
        constructor(marca, modelo, placa, cilindraje) {
            super(marca,modelo,placa)
            this.cilindraje=cilindraje
        }
        ObtenerDetalles(){
            super.ObtenerDetalles()
            console.log(`el cilindraje de la moto es ${this.cilindraje}`);
            
        }
    }
let auto= new carro("Ferrari","XM8","Dkl415", "2" )
 auto.ObtenerDetalles()
 let Mbike= new moto("Yamaha","YZF-R3","xYz789", "180" )
 Mbike.ObtenerDetalles()