// Variáveis
var img = document.querySelector("img#img")
var button = document.querySelector("input#button")
var number;
button.addEventListener('click', () => {
    number = Number((Math.random() * 6 + 1).toFixed(0))
    console.log(number)
    
    if (number == 1) {
        img.src = "./imagens/dado1-editado.png"
    } else if (number == 2) {
        img.src = "./imagens/dado2-editado.jpg"
    } else if (number == 3){
        img.src = "./imagens/dado3-editado.jpg"
    } else if (number == 4){
        img.src = "./imagens/dado4-editado.png"
    } else if (number == 5){
        img.src = "./imagens/dado5-editado.png"
    } else{
        img.src = "./imagens/dado6-editado.jpg"
    }
})