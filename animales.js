class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    
}

Animal.prototype.saludar = function (){
    return "hola" + this.especie + "tienes" + this.edad + "años"
}

let perro = new Animal ("perro", 8, "marron");
let gato = new Animal ("gato", 4, "blanco");
let pajaro = new Animal ("pajaro", 1, "amarillo");

console.log(perro.saludar())