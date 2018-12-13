var nome = $("#resultado3");
console.log(nome[0]);


var box = $(".box");
var botao = $(".botao");
var nome2 = $(".nome");
var copia = $(".copia");

/*box[0].addEventListener("mouseover" , function(){	
	box.animate({
		width: "200px",}, 900);
	box.fadeOut();


});

box[0].addEventListener("mouseout", function(){
	box.fadeIn();
	box.animate({
		width: "100px",}, 900);
	
})

box[0].addEventListener("click" , function(){
	box.hide();
})*/

botao.on("click" , function(){
	box.height("800px");
	copia.delay(2000).fadeOut();
});
