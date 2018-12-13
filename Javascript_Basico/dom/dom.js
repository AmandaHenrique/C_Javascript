var nome = document.getElementById("primeiro-nome");
console.log(nome.textContent);
console.log(nome.innerHTML); //funancia igual :O

var cavalo = document.getElementsByClassName("cavalo"); //pega em array, pega todos
console.log(cavalo[0].innerHTML);

var tag = document.getElementsByTagName("p");
console.log(tag[0]);

var teste = document.querySelectorAll(".teste");
console.log(teste);

var pai = document.getElementById("pai");
var filhos = pai.querySelectorAll(".filho");

//ouuuu..


var filhos2 = document.getElementById("pai").querySelectorAll(".filho");

console.log(filhos);
console.log(filhos2[0]);


var divComida = document.getElementById("comida");
var filhos = divComida.getElementsByClassName("filho");


adicionarP("chocolate", divComida,"filho");
adicionarP("arroz", divComida,"filho");

divComida.removeChild(filhos[1]);

console.log(
	document.querySelector(".mouse").parentNode,
	document.querySelector(".teclas").parentNode.parentNode.parentNode
	);


function adicionarP(nome, div, classe){
	var p = document.createElement("p");
	p.innerHTML = nome;
	p.classList.add(classe);
	div.appendChild(p);
}