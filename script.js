//Obtive a div com id root
const divRoot = document.getElementById("root")
// Imprimindo no console a div
console.log(divRoot)
let valor1 = 10;
let valor2 = 20;
// Criando um elemento de titulo nível 1
const resultado = document.createElement("h1")
// Atribuindo o valor da soma dos dois valores para o texto do título
resultado.textContent = (valor1 + valor2)
divRoot.appendChild(resultado)

valor1 = 5
// Criamos uma nova div
const divValores = document.createElement("div")
// Atribuímos o id "valores" para a div 
divValores.setAttribute("id", "valores")
divRoot.appendChild(divValores)

// Criamos um elemento título 2 para mostrar 
// o conteúdo da constate valor1
const h2Valor1 = document.createElement("h2")
// Atribuímos o conteúdo da constante valor1 
// para o texto do título 2
h2Valor1.textContent = valor1

// Adicionamos o título 2 na div com id "valores"
divValores.appendChild(h2Valor1)
console.log(valor1)