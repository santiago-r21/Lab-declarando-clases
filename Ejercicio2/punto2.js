class Empleado {
    constructor(nombre,edad,salario) {
        this.nombre = nombre
        this.salario = salario
        this.edad = edad
    }
    calcularSalario(salario){
        console.log(`su salario base es ${this.salario}` );
}
}

class Gerente extends Empleado{
    constructor(nombre,edad,salario, bonificacion) {
       super(nombre,edad,salario)
       this.bonificacion = bonificacion
    }
    calcularSalario(){
    super.calcularSalario()
     let salario_final = this.salario+this.bonificacion
    console.log(`el salario es de ${salario_final} con la bonificacion ${this.bonificacion}`);

}
}

class Desarrollador extends Empleado{
    constructor(nombre,edad,salario, lenguaje) {
       super(nombre,edad,salario)
        this.lenguaje=lenguaje
}
    calcularSalario(salario){
        console.log(`su salario base es ${this.salario}` );
}
}
let ger=new Gerente("Santiago Rios", "21", 10000000, 250000)
ger.calcularSalario()
let dev=new Desarrollador("Santiago cajamarca", "21", 1450000, "python")
dev.calcularSalario()
