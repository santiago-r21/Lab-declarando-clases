class Figura {
    constructor(color) {
        this.color=color
    }
    area(){
        return 0
    }
}
class Rectangulo extends Figura {
    constructor(color,base,altura) {
        super(color)
        this.base=base
        this.altura=altura
    }
    area(){
        super.area
        let areaR=this.base*this.altura
        return areaR
    }
}
class Circulo extends Figura {
    constructor(color,radio) {
        super(color)
        this.radio=radio
        
    }
    area(){
        super.area
        let areaC=3.14*(this.radio*this.radio)
        return areaC
    }
}
let rect=new Rectangulo("azul",23,12)
   console.log( rect.area())
   
let circ=new Circulo("verde",32)
console.log(circ.area())

