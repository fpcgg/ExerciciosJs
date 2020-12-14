// buscando os campos de resposta
const zerone = document.querySelector("input#zerone")
const zerofive = document.querySelector("input#zerofive")
const twothree = document.querySelector("input#twothree")
const fivetwe = document.querySelector("input#fivetwe")
const button = document.querySelector("input#button")

//colocando os valores aleatórios nos campos 
button.addEventListener('click', () => {
    let fn = Math.random()
    zerone.value = fn;
    zerofive.value = `${Math.floor(Math.random() * 5 + 1)}`;
    twothree.value = `${Math.random() * (3 - 2) + 2}`;
    fivetwe.value = `${Math.floor(Math.random() * (12 - 5 + 1) + 5) }`
})