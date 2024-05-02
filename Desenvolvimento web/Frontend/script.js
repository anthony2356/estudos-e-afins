/*acessa o elemento html trocando o contexto do texto*/
const myHeading = document.querySelector("h1");
myHeading.textContent = "Ola mundo!";

/*conceito de variáveis normal + condição if*/
let myVariable = "chocolate";
if (myVariable === "chocolate") {
  alert("sim eu amo chocolate");
} else {
  alert("sim eu amos chocolate, porém coca é mais delicioso");
}

/*2 coisas importantes dentro do javascript*/
let myVariable1 = document.querySelector("h1");
alert("ola");

/*função com parâmetros que retornam dois valores relacionais com
a dos parãmetros e depois multiplica
*/
function multiply(num1, num2) {
  let result = alert(num1 * num2);
  return result;
}

multiply(4, 7);
multiply(4, 72);
multiply(4, 722);

/*acessa o documento que possui o elemmento html, com o atributo de 
ouvir elementos, com a detecção de um clique, uma função sem parãmetros 
retorna uma janela pop-up;
*/
document.querySelector("html").addEventListener("click", function () {
  alert("chega de me clicar em mim >:C");
});

/*acessa o documento que possui o elemmento html, com o atributo de 
ouvir elementos, com a detecção de um clique, uma arrow function pelo qual 
retorna uma janela pop-up;
*/
document.querySelector("html").addEventListener("click", () => {
  alert("clique detectado");
});

/*acessa a imagem armazenada, acessando a imagem armazenada
ele acessa a fonte mudando então a foto de perfil;
*/
const minhaImagem = document.querySelector("img");
minhaImagem.onclick = () => {
  const minhaFonte = minhaImagem.getAttribute("src");
  if (minhaFonte === "images/firefox-icon.png") {
    minhaImagem.setAttribute("src", "images/firefox2.png");
  } else {
    minhaImagem.setAttribute("src", "images/firefox-icon.png");
  }
};

/*acessa os elementos html botão e o título, então ele chama
uma função que muda o nome, coletando assim, os dados vindo
de um prompt, se não tiver um nome, então ele troca, se não
ele define um valor dentro do armazenamento, buscando então
um nome, tendo um nome existente, então ele troca o contexto
do texto, apresentando o nome armazenado dentro do localstorage;
*/
let b = document.querySelector("button");
let c = document.querySelector("h1");
function trocarNome() {
  const meuNome = prompt("escreva um nome");
  if (!meuNome) {
    trocarNome();
  } else {
    localStorage.setItem("name", meuNome);
    c.textContent = "google é incrível, ${meuNome}";
  }
}

b.onclick = () => {
  trocarNome();
};
