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
 
dividirCadena(cadenaVerso, minusculas);

var str = 'asdfghjkl hola como estas';
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

var str = "The Henry Challenge is close!"

//var separar = str.split(" ")
  //var str1 = "";
  //var str2 = "";
  //var str3 = "";
  //var str4 = "";
  //var str5 = "";
  //str1 = separar[0].split('').reverse().join('');
  //str2 = separar[1].split('').reverse().join('');
  //str3 = separar[2].split('').reverse().join('');
  //str4 = separar[3].split('').reverse().join('');
  //str5 = separar[4].split('').reverse().join('');
  //console.log(str1 + ' ' + str2 + ' ' + str3 + ' ' + str4 + ' ' + str5) 
  var separar = str.split(" ")
  var ter = [];
  for(var i = 0; i < separar.length; i++){
    for(var f = separar[i].length - 1; f >= 0; f--){
      ter.push(separar[i])
    }
  }  
  console.log(ter)



