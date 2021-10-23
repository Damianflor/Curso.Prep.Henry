numeros = [1,2,3,4,5,6,7,8,9,10]
let menor = numeros[0]
let mayor = numeros[0];
for(var i = 0; i < numeros.length; i++) {
    if(numeros[i] < menor){
        menor = numeros[i]
    }
    if(numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

 
console.log([menor,mayor])


let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++) {
    arrayTablaDel6.push(6 * i)
  }
  console.log(arrayTablaDel6)


