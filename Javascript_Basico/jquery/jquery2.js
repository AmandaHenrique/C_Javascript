/*var nav = $(".nav");

nav.on("click" , function() {
	nav.removeClass("active");
	$(this).addClass("active");

	//a variavell active pode ser qualquer nome sabiiaaa???
});*/

var form = $(".formulario");

var resultado = $("#resultado");

form.on("submit" , function(event) {
	event.preventDefault();
	var dados = $(this).serialize();
	var dadosArrayObjetos = $(this).serializeArray();
	resultado.text(dados);
	console.log(dadosArrayObjetos);
})



var container = $(".container");
var box = $(".box");

var position = box.position();
//Me retorna a posição em relação ao container que ele esta.

var offset = box.offset();
//Me retorna a posição em relação a toda a minha página.

console.log(position);
console.log(offset);

//position e offset