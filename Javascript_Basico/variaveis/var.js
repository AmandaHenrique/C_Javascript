//A função mudou minha variavel, a função esta no ESCOPO GLOBAL;

var nome = "Amanda";

function mudarNome(){
	nome = "Joana";
	return nome;
}

console.log(mudarNome());


//A função esta presa na função, está em um ESCOPO LOCAL
function mudarNome2(){
	var nome = "CHUCHU";
	return nome;
}

console.log(mudarNome2());


/*Quando crio uma variavel ser o var =  a variavel foi criada em 
um escopo local mas definida como escopo global, tanto que posso mudar ela 
"definir um escopo global dentro de um escopo local"
segue exemplo: */
function global(){
	localGlobal = "chocolate"; 
}

localGlobal = "vinte";

console.log(localGlobal);



/*EM ECS o

let -  pode ser usado dentro de funções
e no for principalmente, já dizendo que aquela varivel pertence
ao escopo local e só irá pertencer e ser usado ali.

const - uma variavel que nunca poderá ser alterada.

*/

const idade = 15;
idade = 16;
//DÁ ERRO

console.log(idade);
