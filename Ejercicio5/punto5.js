class Animal {
    constructor(nombre,edad) {
        this.nombre=nombre
        this.edad=edad
    }
    emitir_sonido(){
        return this.sonido
    }
}
class Perro extends Animal{
    constructor(nombre,edad,sonido){
        super(nombre,edad)
        this.sonido="woof"
    }
    emitir_sonido(){
        super.emitir_sonido
        return this.sonido
        
    }
}
class Gato extends Animal{
    constructor(nombre,edad,sonido){
        super(nombre,edad)
        this.sonido="Miau"
    }
    emitir_sonido(){
        super.emitir_sonido
        return this.sonido
        
    }
}
let dog=new Perro("Samy",3,"Woof")
     console.log(dog.emitir_sonido());
let cat=new Gato("hernesto",1,"Miau")
    console.log(cat.emitir_sonido());
