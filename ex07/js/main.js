//criando o prompt do raio e armazenando numa variável
let raio = prompt("Digite o raio da lata (em milímetros): ")
//criando o prompt da altura e armazenando numa variável
let altura = prompt("Digite a altura da lata (em milímetros): ")
//convertendo os valores para cm
let raioCm = raio / 10
let alturaCm = altura / 10
//calculado o volume e colocando dentro do campo de resposta
let volume = document.querySelector("div#res")
let calculandoVol = (raioCm**2) * alturaCm * Math.PI
volume.innerHTML = `O volume da lata é de ${calculandoVol}`
volume.style.display = "block"