//criando o prompt e armazenando numa variável
let nprompt = window.prompt("Escreva um número: ")
//calculando a raiz quadrada do número
let sqr = Math.sqrt(nprompt)
//buscando o campo de resposta
let result = document.querySelector("div#res")
//colocando o valor da raiz quadrada do número dentro do campo
result.innerHTML = `A raiz quadrada do número escolhido é: ${sqr}`
//mudando a propriedade display
result.style.display = "block"
 