let divFor = document.getElementById("divFor");
let quebraLinha = document.createElement("BR");
let paragrafo = divFor.getElementsByTagName("P")

let conteudo = [];

for(let x=0; x<10; x++){

	conteudo[x] = `Texto: ${x}`;

	divFor.innerHTML += `<span><b> ${x} </b></span><br>`;
	divFor.innerHTML += `<p><b> ${x} </b></p><br>`;

	//document.write(conteudo[x] + "<br>");
	 
}

//console.log(conteudo);



