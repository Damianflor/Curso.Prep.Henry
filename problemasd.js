var alumnos = ['luis', 'damian', 'cesar', 'bibis', 'jesus']

alumnos.forEach(function(elemento,indice){
    console.log(elemento,indice);
})



var numbers = [1,5,9,8,7]
var dobles = numbers.map(function(x) {
    return x * 2;
});
var numbers = [1,5,9,8,7]
var sumaReduce = numbers.reduce(function(acc,elemento){
    return acc + elemento;
}, 0);


const obtenerInformacion = (materia)=>{
    Materias = {
	fisica:["pedro","pepito","damian","carlos","alin"],
	programacion: ["pedro", "juan", "pepito"],
	logica: ["pedro","juan","alin","damian"],
	quimica: ["alin","damian","juan","carlos"],
    }
    if (Materias[materia] !== undefined){
	return [Materias[materia],materia,materia];
    } else {
	return Materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos= informacion[0];
    alumnos.shift();
    console.log(`El profesor de ${informacion[1]} es: ${profesor} Los alumnos son : ${alumnos}`);
}
}
const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion()
    let cantidadTotal = 0;
    let clasesPresentes = []
    for(info in informacion) {
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info)
        }
    }
    return `${alumno} esta en ${cantidadTotal} clases
    Esta cursando las clases: ${clasesPresentes}`;
}
mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

console.log(cantidadDeClases("pedro"))