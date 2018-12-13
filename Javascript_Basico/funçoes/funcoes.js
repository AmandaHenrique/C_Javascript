var position = 0;

var pessoas = [];

function criarPessoa(nome, idade, estado){
	var pessoa = {
		nome: nome,
		idade: idade,
		estado: estado
	}
	return pessoa;
	pessoas[position] = pessoa;
}

(criarPessoa('Amanda' , 19 ,'São Paulo'));
(criarPessoa('Chuchu' , 15 ,'São '));
console.log(pessoas);


function argumentos(){
	console.log(arguments);
}