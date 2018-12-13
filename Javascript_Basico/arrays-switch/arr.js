var array = ["uva", ["chocolate", "uva"]];

var indice = 1;
var zerado = 0;

/*posso nomear variaveis com os valores que vou usar 
para acessar meu array, para que nao fique , [1] [1] [0] """""boa pratica""""
disseram mas nao parece*/

console.log(array[indice][zerado]);


switch(indice){
	case 3 : 
		console.log("É um mesmo");
		break;

	case 2 :
		console.log("É dooois");
		break;

	default:
		console.log("Nenhum");
		break;

}