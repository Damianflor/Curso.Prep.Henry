
str = "the henry chellenge is close"

var string = str.split(" ");
var reverse = [];
for(let i = 0; i < string.length; i++) {
    let palabra =string[i];
    var strReverse = '';
    for(let j = palabra.length - 1; j >= 0 ; j--){
        strReverse += palabra[j]
    }
    reverse.push(strReverse)
    strReverse = ''
} console.log(reverse.join(' '))


umero = 636;
var numero1 = umero.toString();
var numeroString = numero1.split('');
numeroString.reverse();
newString = numeroString.join('');

if (numero1 === newString){
  console.log("Es capicua")
}
else {
  console.log("No es capicua")
}


arr = ["you", "are", "beautiful", "looking"]
for(var i = 0; i < arr.length; i++){
  var aux = arr[i]
  var j = i - 1;
  while(j >= 0 && aux.length < arr[j].length){
    arr[j+1] = arr[j]
    j--;
  }
  arr[j+1] = aux
}
console.log(arr)



arreglo1 = [1, 2, 4, 5, 9, 8];
arreglo2 = [4,7,9,2];
var arreglo = [];
for(var i = 0; i < arreglo1.length; i++){
  for (let j = 0;j < arreglo2.length; j++){
    if (arreglo1[i] === arreglo2[j]){
      arreglo.push(arreglo1[i])
    }
  }
}
console.log(arreglo)







