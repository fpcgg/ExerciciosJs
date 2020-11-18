//criando o prompt e armazenando
let nome = window.prompt("Digite seu nome:")

//colocando no site
let res = document.querySelector("section#res")

res.innerHTML = `Olá, ${nome}!`