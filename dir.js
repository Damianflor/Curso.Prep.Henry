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

Text = "hola mundo"
string = {}
for(var i = 0; i < Text.length; i++) {
    let letter = Text[i]
    if(string[letter] == undefined){
        string[letter] = 1
    } else {
        string[letter]++
    }(string)
}
console.log(string)


//var s = "HENRYsoy"
//var p = ("")
//for(var i = 0; i < s.length; i++){
//    if(s = s[5][i]) {
//        return p = s.shift() 
//    } 
//}

function dividirCadena(cadenaADividir,separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    console.log('<p>La cadena original es: "' + cadenaADividir + '"');
    console.log('<br>El separador es: "' + separador + '"');
    console.log("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");
 
    for (var i=0; i < arrayDeCadenas.length; i++) {
       console.log(arrayDeCadenas[i] + " / "); 
    }
}
 
var cadenaVerso = "HENRYsoy";
 
 
var minusculas = "s"
 
//dividirCadena(cadenaVerso, minusculas);

var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); 
console.log(strReverse)

var s = "soyHENRY"
var letras = ""
var may = ""
for(var i = 0;i < s.length; i++){
    if (s[i] == s[i].toUpperCase()) {
        may = may + s[i]
    } else {
        letras = letras + s[i]
    }
    
} console.log(may + letras)


