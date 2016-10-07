/* EvalError  - Erro usando o método eval()
Esse método permite executar uma linha javaScript no formato de String
Ex:  ("alert('oi')")


* RangeError -  Numero extrapola limites

* ReferenceError - Referência a valor indefinido
 ex: uma variavel que não foi definida

* SintaxeError - Erro de sintaxe da linguagem , quando se escreve juma instrução de maneira errada

* TypeError - Operando diferente do esperado

* URIError   -   uso errado de funções URI
*/

/*var x = a;

var b = x + a;

alert(b); 
*/


var x = prompt("Informe numero maior que 10");  

try{

if(x < 10){
  throw "Numero menor que 10"; 
 } 
  alert(x);
}catch(er){   
    alert(er);
}

try{

   var y = a;
   var b = y + 10;
   alert(b);
   
}catch(e){   
   //alert(e.name + " - " + e.message);
   alert(e.toString());
}// finally{
//}


var Carro = {
    marca : "nissan", 
    modelo : "350z",
    potencia : {
         cavalos : "350",
         velocidade : "320km/h"
    }
};

with (Carro.potencia) {
    alert(cavalos);
    alert(velocidade);
}