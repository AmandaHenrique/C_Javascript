window.onload = function(){
	console.log("Carregou a pagina");
}

//var botao = document.getElementById("button");
//
/*botao.addEventListener('click', function(){
	console.log(texto); ///nao funciona	
})*/






/*texto.addEventListener('mouseover', function(){
	alert("passou o mouse")
})*/

var linguagens = document.getElementById("linguagens");

linguagens.addEventListener("change" , function(){
	var options = this.options;
	var index = this.options.selectedIndex;

	console.log(options[index].textContent);
})


var nome = document.getElementById("nome");

nome.addEventListener("blur" , function(){
	nome.value = ""; // quando eu sair do input
});


var p = document.getElementById("resultado");

nome.addEventListener("keyup", function(){
	if(this.value == ""){
		p.innerHTML = "Nenhum texto";
	}else{
		p.innerHTML = this.value; // tecla solta
		//usar esse pois atualiza beem mais rápido
	}
	
});

const enterCode = 13;

var idade = document.getElementById("idade");
var p2 = document.getElementById("resultado2");


idade.addEventListener("keypress" , function(event){
	if(event.keyCode == enterCode){
		p2.style.display = "block";
		p2.innerHTML = this.value;
	} //Quando uma tecla foi pressionada
})


var estado = document.getElementById("estado");
var cidade = document.getElementById("cidade");

function clique (){
	event.preventDefault();
	if(estado.value ==""){
		estado.classList.add("erro");
	}
	if(cidade.value == ""){
		cidade.classList.add("erro");
	}
	if(cidade.value != "" && estado.value != ""){
		cidade.classList.remove("erro");
		estado.classList.remove("erro");
	}
}





