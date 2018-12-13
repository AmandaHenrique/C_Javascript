var festa = {
	nome: "Alice",
	idade: 15,
	salgados: {
		sabores: ["frango", "batata-doce" , "queijo"],
		valor: 520
	}
}


console.log(festa.salgados.sabores[0]);



var cliente = {
	nome: "Amanda",
	idade: 15
}
var pedido = {
	produto: "pizza",
	valor: 400
}

const array = [cliente , pedido];

console.log(array[0].nome);

/*Tenho objetos dentro de uma array*/