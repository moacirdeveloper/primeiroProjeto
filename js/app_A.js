/*VARIAVEIS*/
let navbarMenu = document.getElementsByClassName("navbar");
let item = document.getElementsByClassName("itemConteudo");
let conteudo = document.getElementsByClassName("conteudo");
let elementoConteudo = document.createElement("DIV");

elementoConteudo.innerHTML = `<b>6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. 
							  Maiores vero quod magnam, tempore repellat quibusdam nobis velit 
							  mollitia assumenda libero quas animi. Ducimus fugiat vel enim quia sunt</b>`;

elementoConteudo.classList.add("itemConteudo");
//console.log(navbarMenu);

navbarMenu[0].children[3].innerHTML = "MARKETING";
//navbarMenu[0].children[3].style.color = "red";

//console.log(item);

item[2].style.backgroundColor = "yellow";
item[0].style.backgroundColor = "red";

item[1].innerHTML = "corrupti repellendus voluptate e rerum. Ad alias doloribus quod repell";

/*INSERINDO OBJETO*/
conteudo[0].appendChild(elementoConteudo);
conteudo[0].removeChild(conteudo[0].children[2]);

