var js = document.getElementsByClassName("js");

for(let i = 0; i<js.length; i++){
	let texto = js[i].innerHTML;
	js[i].innerHTML = "curso de "+texto;
}


var array = [1,2,7,'n'];

array.forEach(function(a, position){
	//o primeiro parametro é o que tem no array, o segundo é a posição

	//no for each posso percorrer arrays, não htmlCollection
	
	if(a === 7){
		array[position] = 8; //aqui no for each preciso pegar o array e a posição para muda-lo
	}else{
		console.log(a+1)
	}
	console.log(array);

})

//MAP é parecido com forEach

var array2 = [2,2,'xuxu',90];

array2.map(function(element, index){
	if(element === 2 ){
		element = 'dois'; // aqui posso mudar direto :D , ao contrário do forEach
	}
	console.log(element);
})

/*caso em coloque o map dentro de uma variavel e der um return no elemente
ele me retorna um outro vetor ja modificado, dai é só acessar a variavel
que guarder ele*/

i = 0;
while(i < 4){
	console.log('i');
	i++;
}