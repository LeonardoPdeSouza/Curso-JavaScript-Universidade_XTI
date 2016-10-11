Pessoa = {
    nome : "Leonardo"
};

var idade = 6 , sexo = "masculino"; // duas variaveis
var x = (idade >= 18) ? "Maior de idade" : "menor de idade"; // valor de x condicional ternaria
alert(x); // mostra o valor de x

alert(Pessoa.nome); // mostra o nome da pessoa
delete Pessoa.nome; //deleta o nome da pessoa
alert(Pessoa.nome); // mostra o nome da pessoa / nome da pessoa foi apagado

alert("nome" in Pessoa); // contém
alert("email" in Pessoa); // não contém

var idade2 = new Number(31);
alert(idade2 instanceof Number()); // verifica o tipo

alert(this.document.title); // da classe

alert(typeof (true)); // retorna o time


