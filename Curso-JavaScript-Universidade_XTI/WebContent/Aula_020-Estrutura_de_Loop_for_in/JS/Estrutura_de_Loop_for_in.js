//var numeros = new Array("um", "dois", "tres");
//for(var i=0; i<numeros.length;i++){
//    alert(numeros[i]);
//}
//for(i in numeros){
//    alert(numeros[i]);
//    }
var Carro = {
  marca: "Nissan",
  modelo: "350z",
  comprimento: "3.345mm",
  velocidade: "320km/h",
  cavalo: "350"
};

for (var props in Carro){
    alert(props + " = " + Carro[props]);
}