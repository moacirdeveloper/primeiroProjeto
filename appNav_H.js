let nav = document.getElementById("nav");
let side = document.getElementById("side");

let p1 = 3;

let corpoNav = `
					<p id="liHome" onclick="apresentar(0)">LOGO</p>
					<ul>
						<li id="liHome" onclick="apresentar(1)">HOME</li>
						<li id="liSobre" onclick="apresentar(2)">SOBRE</li>
						<li id="liContato" onclick="apresentar(3)">CONTATO</li>
					</ul>
					
				`;

nav.innerHTML = corpoNav;

/*funcoes*/
function apresentar(valor){

	console.log("Parametro: " + valor);

	side.innerHTML = "";
	side.style.backgroundColor = "#ddd";
	side.style.border = "";


	if(valor === 1){
		side.innerHTML = "<h1> H O M E <h1>"
		side.style.height = "400px";
		side.style.color = "blue";
		
	}else if(valor === 2){
		side.innerHTML = "<div><h1> S O B R E <h1></div>"
		side.style.height = "400px";
		side.style.color = "red";
		
	}else if(valor === 3){
		side.innerHTML = "<h1> C O N T A T O <h1>"
		side.style.height = "400px";
		side.style.color = "green";
		
	}else{
		//side.innerHTML = "<h1> H O M E <h1>"
		side.style.height = "400px";
		//side.style.color = "blue";
		side.style.backgroundColor = "yellow";
		side.style.border = "1px solid black";
	}

	
	
}
